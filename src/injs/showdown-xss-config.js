// from: https://github.com/Jackymancs4/showdown-xss-config

(function(myext) {

  if (typeof showdown !== 'undefined') {
    // global (browser or nodejs global)
    myext(showdown)

  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['showdown-xss-config'], myext);
  } else if (typeof exports === 'object') {
    // Node, CommonJS-like
    module.exports = myext(require('showdown'));
  } else {
    // showdown was not found so we throw
    throw Error('Could not find showdown library');
  }
}(function(showdown) {

  if (typeof module !== 'undefined') {
    filterXSS = require('xss');
  }

  return xssfilter = (config) => {
    return () => {
      return [{
        type: "output",
        filter: function(text) {
          return filterXSS(text, config);
        }
      }]
    }
  }

}));
