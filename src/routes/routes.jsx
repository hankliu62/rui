import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import App from '../containers/App/App';
import Container from '../containers/Container/Container';
import BundleWrappingRoute from '../components/BundleWrappingRoute/BundleWrappingRoute';

const loadHomepageAsync = () => import(/* webpackChunkName: 'containers/Homepage' */ '../containers/Homepage/Homepage');
const loadNotFountAsync = () => import(/* webpackChunkName: 'containers/Error/NotFount' */ '../containers/Error/NotFount');
const loadIconPageAsync = () => import(/* webpackChunkName: 'containers/Icon' */ '../containers/Icon/Icon');

const loadBreadcrumbPageAsync = () => import(/* webpackChunkName: 'containers/Breadcrumb' */ '../containers/Breadcrumb/Breadcrumb');
const loadPaginationPageAsync = () => import(/* webpackChunkName: 'containers/Pagination' */ '../containers/Pagination/Pagination');
const loadStepsPageAsync = () => import(/* webpackChunkName: 'containers/Steps' */ '../containers/Steps/Steps');

const loadRadioPageAsync = () => import(/* webpackChunkName: 'containers/Radio' */ '../containers/Radio/Radio');
const loadCheckboxPageAsync = () => import(/* webpackChunkName: 'containers/Checkbox' */ '../containers/Checkbox/Checkbox');
const loadDropzonePageAsync = () => import(/* webpackChunkName: 'containers/Dropzone' */ '../containers/Dropzone/Dropzone');
const loadSelectorPageAsync = () => import(/* webpackChunkName: 'containers/Selector' */ '../containers/Selector/Selector');

const loadCascaderPageAsync = () => import(/* webpackChunkName: 'containers/Cascader' */ '../containers/Cascader/Cascader');
const loadRatePageAsync = () => import(/* webpackChunkName: 'containers/Rate' */ '../containers/Rate/Rate');

const loadAlertPageAsync = () => import(/* webpackChunkName: 'containers/Alert' */ '../containers/Alert/Alert');
const loadModalPageAsync = () => import(/* webpackChunkName: 'containers/Modal' */ '../containers/Modal/Modal');
const loadProgressPageAsync = () => import(/* webpackChunkName: 'containers/Progress' */ '../containers/Progress/Progress');
const loadLoadingPageAsync = () => import(/* webpackChunkName: 'containers/Loading' */ '../containers/Loading/Loading');

// 根路由
const AppRouter = () => {
  return (
    <Container>
      <Switch>
        <Redirect exact from="/" to="/homepage" />
        <BundleWrappingRoute exact path="/homepage" component={App} load={loadHomepageAsync} />
        <BundleWrappingRoute exact path="/base/icon" component={App} load={loadIconPageAsync} />

        <BundleWrappingRoute exact path="/navigation/breadcrumb" component={App} load={loadBreadcrumbPageAsync} />
        <BundleWrappingRoute exact path="/navigation/pagination" component={App} load={loadPaginationPageAsync} />
        <BundleWrappingRoute exact path="/navigation/steps" component={App} load={loadStepsPageAsync} />

        <BundleWrappingRoute exact path="/form/radio" component={App} load={loadRadioPageAsync} />
        <BundleWrappingRoute exact path="/form/checkbox" component={App} load={loadCheckboxPageAsync} />
        <BundleWrappingRoute exact path="/form/dropzone" component={App} load={loadDropzonePageAsync} />
        <BundleWrappingRoute exact path="/form/select" component={App} load={loadSelectorPageAsync} />

        <BundleWrappingRoute exact path="/data/cascader" component={App} load={loadCascaderPageAsync} />
        <BundleWrappingRoute exact path="/data/rate" component={App} load={loadRatePageAsync} />

        <BundleWrappingRoute exact path="/feedback/alert" component={App} load={loadAlertPageAsync} />
        <BundleWrappingRoute exact path="/feedback/modal" component={App} load={loadModalPageAsync} />
        <BundleWrappingRoute exact path="/feedback/progress" component={App} load={loadProgressPageAsync} />
        <BundleWrappingRoute exact path="/feedback/loading" component={App} load={loadLoadingPageAsync} />

        {/* <BundleWrappingRoute path="/wechat" load={loadWechatAsync} /> // 注：不能使用这种coding split的方式加载子模块，除非子模块只是一个单页面，否则路由改变是页面不会渲染 */}
        {/* <Route path="/wechat" render={nextProps => (<WechatContainer {...nextProps} />)} /> */}
        <BundleWrappingRoute load={loadNotFountAsync} />
      </Switch>
    </Container>
  );
};

// const checkIsLogin = (props, pathname = '/homepage') => {
//   const isLogin = true;
//   return isLogin ? <Redirect to={pathname} /> : <Redirect to="/login" />;
// };

export default AppRouter;
