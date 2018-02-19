module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push({ test: /\.css$/, include: /node_modules/,  loader:  'style!css' });
    return config;
  }
}
