import React, { useMemo, useState } from 'react';
import { Input, Tree, TreeProps } from 'antd';
import type { DataNode, EventDataNode } from 'antd/es/tree';
import treeToList from '@/utils/treeToList';

const getParentKey = (key: React.Key, tree: DataNode[]): React.Key => {
  let parentKey: React.Key = '';
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some((item) => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }

  return parentKey;
};

const SearchTree: React.FC<TreeProps> = ({
  selectedKeys,
  treeData:
  data = [],
  expandedKeys: expKeys,
  autoExpandParent: autoExpParent,
  ...restProps
}) => {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>(expKeys || []);
  const [searchValue, setSearchValue] = useState('');
  const [autoExpandParent, setAutoExpandParent] = useState(autoExpParent === undefined || autoExpParent);

  const onExpand = (
    newExpandedKeys: React.Key[],
    info: {
      node: EventDataNode<DataNode>;
      expanded: boolean;
      nativeEvent: MouseEvent;
    }
  ) => {
    setExpandedKeys(newExpandedKeys);
    setAutoExpandParent(false);
    restProps.onExpand && restProps.onExpand(newExpandedKeys, info);
  };

  // 不带children的数据
  const dataList = useMemo(() => treeToList(data, 'parentId', 'key'), [data]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const newExpandedKeys = dataList
      .map((item) => {
        if (item.title.indexOf(value) > -1) {
          return getParentKey(item.key, data);
        }
        return null;
      })
      .filter((item, i, self): item is React.Key => !!(item && self.indexOf(item) === i));
    setExpandedKeys(newExpandedKeys);
    setSearchValue(value);
    setAutoExpandParent(true);
  };

  const treeData = useMemo(() => {
    const loop = (data: DataNode[]): DataNode[] =>
      data.map((item) => {
        const strTitle = item.title as string;
        const index = strTitle.indexOf(searchValue);
        const beforeStr = strTitle.substring(0, index);
        const afterStr = strTitle.slice(index + searchValue.length);
        const title =
          index > -1 ? (
            <span>
              {beforeStr}
              <span style={{ color: 'red' }}>{searchValue}</span>
              {afterStr}
            </span>
          ) : (
            <span>{strTitle}</span>
          );
        if (item.children) {
          return { title, key: item.key, children: loop(item.children) };
        }

        return {
          title,
          key: item.key,
        };
      });

    return loop(data);
  }, [data, searchValue]);

  return (
    <div>
      <Input style={{ marginBottom: 8 }} placeholder="请输入" onChange={onChange} />
      <Tree
        {...restProps}
        onExpand={onExpand}
        expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        treeData={treeData}
        selectedKeys={selectedKeys}
      />
    </div>
  );
};

export default SearchTree;
