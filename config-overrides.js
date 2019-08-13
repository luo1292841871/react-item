const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  // 这个是按需加载
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  // 这个是定义主题色
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }),
);