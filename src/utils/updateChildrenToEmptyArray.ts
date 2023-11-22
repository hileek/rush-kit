type TreeNode = {
  id: number;
  children: TreeNode[];
  // 其他可能的属性
};

function updateChildrenToEmptyArray(tree: TreeNode[], targetId: number): TreeNode[] {
  // 使用 map 复制一份树的副本，避免修改原始数据
  return tree.map(node => {
    if (node.id === targetId) {
      // 如果当前节点的 id 等于目标 id，将 children 置为空数组
      return { ...node, children: [] };
    } else if (node.children && node.children.length > 0) {
      // 如果当前节点有 children，递归调用函数处理子节点
      return { ...node, children: updateChildrenToEmptyArray(node.children, targetId) };
    } else {
      // 其他情况直接返回节点，不需要修改
      return node;
    }
  });
}

export default updateChildrenToEmptyArray