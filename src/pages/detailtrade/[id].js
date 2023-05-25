import React from 'react';
import AppPage from '../../@crema/hoc/AppPage';
import asyncComponent from '../../@crema/utility/asyncComponent';

const DetailProject = asyncComponent(() =>
    import('../../modules/detailtrade/[id]'),
);
export default AppPage(() => <DetailProject />);