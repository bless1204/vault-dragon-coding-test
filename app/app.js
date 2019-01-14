"use strict";

const customConfig = require('./config/custom.json');
const bootstrap = require('./bootstrap');
const express = require("express");
"use strict";

const app = express();

const v1Router = require("./route/v1");

app.use("/v1", v1Router);
app.use("/", v1Router);
// create and use custom error handler

const serverStart = function(error) {
    // do not start server if error was encountered during bootstrap
    if(error) {
        console.log('Unable to start. Encountered an error.');
        console.log(error);
        return ;
    }

    // start server
    app.listen(customConfig.port, function(){
        console.log("Application started on port " + customConfig.port);
        console.log("Deprecated versions enabled: " + customConfig.enableDeprecated); 
    });
}

bootstrap.start(serverStart);
