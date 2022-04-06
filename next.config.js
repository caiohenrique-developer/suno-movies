module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    domains: ['image.tmdb.org'],
  },
  env: {
    // # TMDB api key environment variable | https://www.themoviedb.org/
    API_KEY: process.env.API_KEY
  },
};
