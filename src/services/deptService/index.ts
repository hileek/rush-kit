import api from '../api';

const getDeptList = async () => {
  return new Promise((resolve) => {
    const deptTree = [
      {
        title: '1',
        key: '1',
        children: [
          {
            title: '1-1',
            key: '1-1',
            children: [],
          },
        ],
      },
      {
        title: '2',
        key: '2',
        children: [],
      },
      {
        title: '3',
        key: '3',
        children: [],
      },
      {
        title: '4',
        key: '4',
        children: [],
      },
    ];
    resolve(deptTree);
  });
};

export default {
  getDeptList,
};
