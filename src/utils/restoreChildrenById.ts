type TreeNode = {
  id: number;
  children: TreeNode[];
  // 其他可能的属性
};

// function restoreChildrenById(originalTree: TreeNode[], tree: TreeNode[], targetId: number): TreeNode[] {
//   return originalTree.map(originalNode => {
//     if (originalNode.id === targetId) {
//       // 如果当前节点的 id 等于目标 id，将 children 还原为 tree 中的 children
//       const treeNode = tree.find(node => node.id === targetId);
//       return treeNode ? { ...originalNode, children: treeNode.children } : originalNode;
//     } else if (originalNode.children && originalNode.children.length > 0) {
//       // 如果当前节点有 children，递归调用函数处理子节点
//       const treeNode = tree.find(node => node.id === originalNode.id);
//       return {
//         ...originalNode,
//         children: treeNode ?
//           restoreChildrenById(originalNode.children, treeNode.children, targetId) :
//           originalNode.children
//       };
//     } else {
//       // 其他情况直接返回节点，不需要修改
//       return originalNode;
//     }
//   });
// }

function restoreChildrenById(originalTree: TreeNode[], tree: TreeNode[], targetId: number): TreeNode[] {
  return tree.map(treeNode => {
    if (treeNode.id === targetId) {
      // 如果当前节点的 id 等于目标 id，将 children 还原为 originalTree 中的 children
      const originalNode = originalTree.find(node => node.id === targetId);
      return originalNode ? { ...treeNode, children: originalNode.children } : treeNode;
    } else if (treeNode.children && treeNode.children.length > 0) {
      // 如果当前节点有 children，递归调用函数处理子节点
      const originalNode = originalTree.find(node => node.id === treeNode.id);
      return {
        ...treeNode,
        children: originalNode ?
          restoreChildrenById(originalNode.children, treeNode.children, targetId) :
          treeNode.children
      };
    } else {
      // 其他情况直接返回节点，不需要修改
      return treeNode;
    }
  });
}

export default restoreChildrenById;
