import React from 'react';
import AppPage from '../../@crema/hoc/AppPage';
import asyncComponent from '../../@crema/utility/asyncComponent';

const News = asyncComponent(() =>
  import('../../modules/news/index'),
);
export default AppPage(() => <News />);