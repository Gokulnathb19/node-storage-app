try{
    //imports
  var express = require('express');
  var path = require('path');
  var cors = require('cors');
  var bodyParser = require('body-parser');
  
  
  var controller = require('./controller');

  
  var app = express();
  
  const port = 3001;
  
  app.use('/', controller);//The basic path which indicates what file to be executed.

  app.use('/public',express.static('./public'));// static is used to serve static files in our repository.
  
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json()); //used to parse the data.

    var corsOptions = {
    origin: '*',
    methods: 'POST, GET, OPTIONS, PUT, DELETE',
    headers: 'Content-Type, X-Auth-Token, Origin',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
    }
    app.use(cors(corsOptions));
  app.listen(port, '0.0.0.0', () => console.log(`Express server running on port ${port}`));
  }catch(e){
    console.log(e);
  }
  