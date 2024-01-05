import React, { useEffect, useState } from 'react';
import SearchTree from '@/components/SearchTree';
import deptService from '@/services/deptService';

const User: React.FC = () => {
  const [deptList, setDeptList] = useState([]);
  const [selectedDeptKeys, setSelectedDeptKeys] = useState<React.Key[]>([]);
  const getDeptList = async () => {
    const deptData: any = await deptService.getDeptList();
    setDeptList(deptData);
  };

  const onSelect = (selectedKeys: React.Key[]) => {
    setSelectedDeptKeys(selectedKeys);
  };

  useEffect(() => {
    getDeptList();
  }, []);
  return (
    <div>
      <SearchTree treeData={deptList} onSelect={onSelect} selectedKeys={selectedDeptKeys} />
      <div onClick={() => setSelectedDeptKeys([])}>取消选中</div>
    </div>
  );
};

export default User;
