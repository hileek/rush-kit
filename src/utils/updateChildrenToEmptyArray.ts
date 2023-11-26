type TreeNode = {
  id: number;
  children: TreeNode[];
};

const updateChildrenToEmptyArray = (tree: TreeNode[], targetId: number): TreeNode[] => {
  return tree.map(node => {
    if (node.id === targetId) {
      // 如果当前节点的 id 等于目标 id，将 children 置为空数组
      return { ...node, children: [] };
    } 

    if (node.children && node.children.length > 0) {
      return { ...node, children: updateChildrenToEmptyArray(node.children, targetId) };
    }

    return node;
  });
};

export default updateChildrenToEmptyArray;
