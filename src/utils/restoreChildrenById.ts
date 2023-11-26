type TreeNode = {
  id: number;
  children: TreeNode[];
};

const restoreChildrenById = (originalTree: TreeNode[], tree: TreeNode[], targetId: number): TreeNode[] => {
  return tree.map(treeNode => {
    if (treeNode.id === targetId) {
      // 如果当前节点的 id 等于目标 id，将 children 还原为 originalTree 中的 children
      const originalNode = originalTree.find(node => node.id === targetId);
      return originalNode ? { ...treeNode, children: originalNode.children } : treeNode;
    } 

    if (treeNode.children && treeNode.children.length > 0) {
      const originalNode = originalTree.find(node => node.id === treeNode.id);
      return {
        ...treeNode,
        children: originalNode ?
          restoreChildrenById(originalNode.children, treeNode.children, targetId) :
          treeNode.children
      };
    }

    return treeNode;
  });
}

export default restoreChildrenById;
