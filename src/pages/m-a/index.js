import React from 'react';
import AppPage from '../../@crema/hoc/AppPage';
import asyncComponent from '../../@crema/utility/asyncComponent';

const MaProject = asyncComponent(() =>
  import('../../modules/maProject/index'),
);
export default AppPage(() => <MaProject />);