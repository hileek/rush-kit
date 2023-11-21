interface TreeNode {
  key: string | number;
  [key: string]: any; // 其他属性
  children?: TreeNode[];
}

/**
 * 将扁平的数组转换成树形结构
 * @param data 目标元素
 * @param parentId 元素所属父元素的id
 * @param targetId 元素唯一标识
 * @returns tree
 */
export default function listToTree(data: any[], parentId: string | number = 'parentId', targetId: string | number = 'id'): TreeNode[] {
  const map: Record<string | number, TreeNode> = {};
  data.forEach((item: any) => {
    // 表格需要key
    item.key = item[targetId];
    map[item[targetId]] = { ...item, children: [] };
  });

  const tree: TreeNode[] = [];
  Object.values(map).forEach((item: TreeNode) => {
    // 对应的父元素
    const parent = map[item[parentId]];
    if (parent) {
      parent.children!.push(item);
    } else {
      tree.push(item);
    }
  });

  return tree;
}
