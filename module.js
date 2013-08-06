'use strict';
if (typeof define !== 'function') {
  /* jshint latedef:false */
  var define = require('amdefine')(module);
}

define({
  comp: function() { // stolen from underscorejs
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  },

  flip: function(f) {
    return function() {
      var args = Array.prototype.slice.apply(arguments), tmp = args[0];
      if(args.length > 1) {
        args[0] = args[1];
        args[1] = tmp;
      }
      return f.apply(this, args);
    };
  }
});
