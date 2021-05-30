module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    domains: ['image.tmdb.org'],
  },
  env: {
    // # TMDB api key | https://www.themoviedb.org/
    API_KEY: process.env.API_KEY
  },
};
