import { ReactNode } from "react";

const PermissionController = ({ requiredPermission, children } : { requiredPermission: string, children: ReactNode }) => {
  const userPermissions: any[] = [];
  // 检查用户是否具有所需权限
  const hasPermission = userPermissions.includes(requiredPermission);

  return hasPermission ? children : null;
};

export default PermissionController;
