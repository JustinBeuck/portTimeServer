const userRoutes = (app, fs) => {
    // variables
    const dataPath = './data/payperiods.json';
  
    // READ
    app.get('/payperiods', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
        res.set('Access-Control-Allow-Origin', '*');
        res.set('Access-Control-Allow-Methods', 'GET');
        res.send(JSON.parse(data));
      });
    });
  };
  
  module.exports = userRoutes;