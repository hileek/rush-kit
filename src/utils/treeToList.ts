/**
 * 将树形结构转换成扁平的数组
 * @param tree 树形结构
 * @param parentId 元素所属父元素的id
 * @param targetId 元素唯一标识
 * @returns flatList
 */
export default function treeToList(tree: TreeNode[], parentId: string | number = 'parentId', targetId: string | number = 'id'): Omit<TreeNode, 'children'>[] {
  const flatList: TreeNode[] = [];

  const traverse = (node: TreeNode, parent: TreeNode | null = null) => {
    const flatNode: TreeNode = { ...node };
    delete flatNode.children; // 移除子节点信息

    if (parent) {
      flatNode[parentId] = parent[targetId];
    }

    flatList.push(flatNode);

    if (node.children && node.children.length > 0) {
      node.children.forEach(child => traverse(child, node));
    }
  };

  tree.forEach(root => traverse(root));

  return flatList;
}
