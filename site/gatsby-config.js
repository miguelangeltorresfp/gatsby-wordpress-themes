require('dotenv').config();

module.exports = {
  plugins: [
    // Tell gatsby which theme you will be using.
    {
      resolve: 'gatsby-wordpress-theme-fb20',
      options: {
        wordPressUrl: `${process.env.SITE_URL}`,
      },
    },
  ],
};
