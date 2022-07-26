"use strict"
// CONST
  const {} = require('./admin/admin');
  const app = require('./app');
  const port = 4100;

// DATA BASE

// RUN SERVER
  app.listen(port,()=>{
      console.log('Puerto: ',port);
  });
