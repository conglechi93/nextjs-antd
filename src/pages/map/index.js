import React from 'react';
import AppPage from '../../@crema/hoc/AppPage';
import asyncComponent from '../../@crema/utility/asyncComponent';

const Map = asyncComponent(() => import('../../modules/map/index'));
export default AppPage(() => <Map />);
