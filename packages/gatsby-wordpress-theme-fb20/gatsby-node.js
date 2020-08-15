const createAllPages = require('./create-pages/pages');
const createFrontPage = require('./create-pages/front-page.js');

exports.createPages = async ({ actions, graphql }) => {
  await createAllPages({ actions, graphql });
  await createFrontPage({ actions, graphql });
};

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig();
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    };
  }
};
