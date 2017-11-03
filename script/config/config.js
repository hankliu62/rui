const path = require('path');
const debug = require('debug')('app:config');
const pkg = require('../../package.json');
const libs = require('./lib.dependencies');

const config = {
  env: process.env.NODE_ENV || 'dev',

  // path options
  path_base: path.resolve(__dirname, '../../'),
  dir_html: 'src',
  dir_client: 'src',
  dir_server: 'script/server',
  dir_dist: 'dist',

  compiler_devtool: 'source-map',
  compiler_hash_type: 'hash',
  compiler_fail_on_warning: false,
  compiler_quiet: false,
  compiler_public_path: '/',
  compiler_vendors: libs,
  compiler_vendor_key: 'vendor',

  // Proxy Configuration -> path: host
  proxyTable: {},

  dev: {
    dll: {
      basePath: path.resolve(__dirname, '../../dist/dll/dev'), // __dirname相当于当前config.js的路径
      fileName: path.resolve(__dirname, '../../dist/dll/dev', 'lib.dll.js'),
      manifest: path.resolve(__dirname, '../../dist/dll/dev', 'manifest.json'),
      outputPath: '/static/dll/dev', // 生成目录
      publicPath: '/static/dll/dev' // 注入地址
    },
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    staticPath: '../../dist'
  },
  build: {
    dll: {
      basePath: path.resolve(__dirname, '../../dist/dll/prod'),
      fileName: path.resolve(__dirname, '../../dist/dll/prod', 'lib.dll.js'),
      manifest: path.resolve(__dirname, '../../dist/dll/prod', 'manifest.json'),
      outputPath: '/static/dll/prod', // 生成目录
      publicPath: '/static/dll/prod' // 注入地址
    },
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionGzipExtensions: ['js', 'css']
  }
};

// ------------------------------------
// Validate Vendor Dependencies
// ------------------------------------
config.compiler_vendors = config.compiler_vendors.filter((dep) => {
  if (pkg.dependencies[dep] || pkg.devDependencies[dep]) {
    return true;
  }

  debug(`Package "${dep}" was not found as an npm dependency in package.json; ` +
      `it won't be included in the webpack vendor bundle.
       Consider removing it from compiler_vendors in ~/config/config.js`);
  return false;
});

// ------------------------------------
// Utilities
// ------------------------------------
function base(...restArgs) {
  const args = [config.path_base].concat(([]).slice.apply(restArgs));
  return path.resolve(...args);
}

config.utils_paths = {
  base,
  client: base.bind(null, config.dir_client),
  html: base.bind(null, config.dir_html),
  dist: base.bind(null, config.dir_dist)
};

module.exports = config;
