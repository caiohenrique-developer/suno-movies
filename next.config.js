module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
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
