const userRoutes = require('./payperiods');

const appRouter = (app, fs) => {

  app.get('/', (req, res) => {
    res.send('Welcome to the Port Time App Server');
  });

  userRoutes(app, fs);
};

module.exports = appRouter;