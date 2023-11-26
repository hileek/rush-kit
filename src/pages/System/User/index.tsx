import axios from 'axios';
import React, { useEffect } from 'react';

const User = () => {
  console.log('user');
  useEffect(() => {
    console.log('用户');
  }, []);
  return (
    <>user</>
  );
};

export default User;
