module.exports = function override(config) {
    if (config.devServer) {
      config.devServer.setupMiddlewares = (middlewares, devServer) => {
        devServer.app.get('/api', (req, res) => {
          res.json({ message: 'Hello from API!' });
        });
        return middlewares;
      };
    }
    return config;
  };
  