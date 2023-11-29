import React, { ReactNode } from 'react';

interface Props {
  requiredPermission: string;
  children: ReactNode;
}

const PermissionController: React.FC<Props> = ({ requiredPermission, children }) => {
  const userPermissions: any[] = [];
  // 检查用户是否具有所需权限
  const hasPermission = userPermissions.includes(requiredPermission);

  return (
    <>
      {hasPermission ? children : null}
    </>
  );
};

export default PermissionController;
