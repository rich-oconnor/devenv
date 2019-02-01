// This file isn't transpiled, so must use commonJs and ES5

//Register babel to transpile before our tests run
require("@babel/register")();

// DIsable Webpack features that Mocha doesn't understand
require.extensions[".css"] = function() {};
