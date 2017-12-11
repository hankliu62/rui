import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import App from '../containers/App/App';
import Container from '../containers/Container/Container';
import BundleWrappingRoute from '../components/BundleWrappingRoute/BundleWrappingRoute';

const loadHomepageAsync = () => import(/* webpackChunkName: 'containers/Homepage' */ '../containers/Homepage/Homepage');

const loadColorPageAsync = () => import(/* webpackChunkName: 'containers/Color' */ '../containers/Color/Color');
const loadIconPageAsync = () => import(/* webpackChunkName: 'containers/Icon' */ '../containers/Icon/Icon');
const loadButtonPageAsync = () => import(/* webpackChunkName: 'containers/Button' */ '../containers/Button/Button');

const loadBreadcrumbPageAsync = () => import(/* webpackChunkName: 'containers/Breadcrumb' */ '../containers/Breadcrumb/Breadcrumb');
const loadPaginationPageAsync = () => import(/* webpackChunkName: 'containers/Pagination' */ '../containers/Pagination/Pagination');
const loadStepsPageAsync = () => import(/* webpackChunkName: 'containers/Steps' */ '../containers/Steps/Steps');

const loadCascaderPageAsync = () => import(/* webpackChunkName: 'containers/Cascader' */ '../containers/Cascader/Cascader');
const loadRadioPageAsync = () => import(/* webpackChunkName: 'containers/Radio' */ '../containers/Radio/Radio');
const loadCheckboxPageAsync = () => import(/* webpackChunkName: 'containers/Checkbox' */ '../containers/Checkbox/Checkbox');
const loadSelectorPageAsync = () => import(/* webpackChunkName: 'containers/Selector' */ '../containers/Selector/Selector');
const loadSwitchPageAsync = () => import(/* webpackChunkName: 'containers/Switch' */ '../containers/Switch/Switch');
const loadInputPageAsync = () => import(/* webpackChunkName: 'containers/Input' */ '../containers/Input/Input');
const loadDropzonePageAsync = () => import(/* webpackChunkName: 'containers/Dropzone' */ '../containers/Dropzone/Dropzone');

const loadAvatarPageAsync = () => import(/* webpackChunkName: 'containers/Avatar' */ '../containers/Avatar/Avatar');
const loadBadgePageAsync = () => import(/* webpackChunkName: 'containers/Badge' */ '../containers/Badge/Badge');
const loadCardPageAsync = () => import(/* webpackChunkName: 'containers/Card' */ '../containers/Card/Card');
const loadRatePageAsync = () => import(/* webpackChunkName: 'containers/Rate' */ '../containers/Rate/Rate');
const loadTablePageAsync = () => import(/* webpackChunkName: 'containers/Table' */ '../containers/Table/Table');
const loadTooltipPageAsync = () => import(/* webpackChunkName: 'containers/Tooltip' */ '../containers/Tooltip/Tooltip');

const loadAlertPageAsync = () => import(/* webpackChunkName: 'containers/Alert' */ '../containers/Alert/Alert');
const loadModalPageAsync = () => import(/* webpackChunkName: 'containers/Modal' */ '../containers/Modal/Modal');
const loadProgressPageAsync = () => import(/* webpackChunkName: 'containers/Progress' */ '../containers/Progress/Progress');
const loadPopConfirmPageAsync = () => import(/* webpackChunkName: 'containers/PopConfirm' */ '../containers/PopConfirm/PopConfirm');
const loadLoadingPageAsync = () => import(/* webpackChunkName: 'containers/Loading' */ '../containers/Loading/Loading');

const loadDividerPageAsync = () => import(/* webpackChunkName: 'containers/Divider' */ '../containers/Divider/Divider');

const loadLoginPageAsync = () => import(/* webpackChunkName: 'containers/Login' */ '../containers/Login/Login');

const loadWithoutPermissionPageAsync = () => import(/* webpackChunkName: 'containers/WithoutPermission' */ '../containers/WithoutPermission/WithoutPermission');
const loadNotFoundPageAsync = () => import(/* webpackChunkName: 'containers/NotFound' */ '../containers/NotFound/NotFound');
const loadServerErrorPageAsync = () => import(/* webpackChunkName: 'containers/ServerError' */ '../containers/ServerError/ServerError');

// 根路由
const AppRouter = () => {
  return (
    <App>
      <Switch>
        <Redirect exact from="/" to="/homepage" />
        <BundleWrappingRoute exact path="/homepage" component={Container} load={loadHomepageAsync} />

        <BundleWrappingRoute exact path="/base/color" component={Container} load={loadColorPageAsync} />
        <BundleWrappingRoute exact path="/base/icon" component={Container} load={loadIconPageAsync} />
        <BundleWrappingRoute exact path="/base/button" component={Container} load={loadButtonPageAsync} />

        <BundleWrappingRoute exact path="/navigation/breadcrumb" component={Container} load={loadBreadcrumbPageAsync} />
        <BundleWrappingRoute exact path="/navigation/pagination" component={Container} load={loadPaginationPageAsync} />
        <BundleWrappingRoute exact path="/navigation/steps" component={Container} load={loadStepsPageAsync} />

        <BundleWrappingRoute exact path="/form/cascader" component={Container} load={loadCascaderPageAsync} />
        <BundleWrappingRoute exact path="/form/radio" component={Container} load={loadRadioPageAsync} />
        <BundleWrappingRoute exact path="/form/checkbox" component={Container} load={loadCheckboxPageAsync} />
        <BundleWrappingRoute exact path="/form/select" component={Container} load={loadSelectorPageAsync} />
        <BundleWrappingRoute exact path="/form/switch" component={Container} load={loadSwitchPageAsync} />
        <BundleWrappingRoute exact path="/form/input" component={Container} load={loadInputPageAsync} />
        <BundleWrappingRoute exact path="/form/dropzone" component={Container} load={loadDropzonePageAsync} />

        <BundleWrappingRoute exact path="/data/avatar" component={Container} load={loadAvatarPageAsync} />
        <BundleWrappingRoute exact path="/data/badge" component={Container} load={loadBadgePageAsync} />
        <BundleWrappingRoute exact path="/data/card" component={Container} load={loadCardPageAsync} />
        <BundleWrappingRoute exact path="/data/rate" component={Container} load={loadRatePageAsync} />
        <BundleWrappingRoute exact path="/data/table" component={Container} load={loadTablePageAsync} />
        <BundleWrappingRoute exact path="/data/tooltip" component={Container} load={loadTooltipPageAsync} />

        <BundleWrappingRoute exact path="/feedback/alert" component={Container} load={loadAlertPageAsync} />
        <BundleWrappingRoute exact path="/feedback/modal" component={Container} load={loadModalPageAsync} />
        <BundleWrappingRoute exact path="/feedback/progress" component={Container} load={loadProgressPageAsync} />
        <BundleWrappingRoute exact path="/feedback/popconfirm" component={Container} load={loadPopConfirmPageAsync} />
        <BundleWrappingRoute exact path="/feedback/loading" component={Container} load={loadLoadingPageAsync} />

        <BundleWrappingRoute exact path="/other/divider" component={Container} load={loadDividerPageAsync} />

        <BundleWrappingRoute exact path="/exception/403" component={Container} load={loadWithoutPermissionPageAsync} />
        <BundleWrappingRoute exact path="/exception/404" component={Container} load={loadNotFoundPageAsync} />
        <BundleWrappingRoute exact path="/exception/500" component={Container} load={loadServerErrorPageAsync} />

        <BundleWrappingRoute exact path="/account/login" load={loadLoginPageAsync} />

        {/* <BundleWrappingRoute path="/wechat" load={loadWechatAsync} /> // 注：不能使用这种coding split的方式加载子模块，除非子模块只是一个单页面，否则路由改变是页面不会渲染 */}
        {/* <Route path="/wechat" render={nextProps => (<WechatContainer {...nextProps} />)} /> */}
        <BundleWrappingRoute load={loadNotFoundPageAsync} />
      </Switch>
    </App>
  );
};

// const checkIsLogin = (props, pathname = '/homepage') => {
//   const isLogin = true;
//   return isLogin ? <Redirect to={pathname} /> : <Redirect to="/login" />;
// };

export default AppRouter;
