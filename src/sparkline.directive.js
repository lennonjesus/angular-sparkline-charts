(function () {
  'use strict';

  angular.module('angular-sparkline-charts')
  .directive('sparkline', function () {

    return {
      restrict: 'E',
      scope: {
        data: "=",
        options: "="
      },
      link: function (scope, elem, attrs, ngModel) {
        
        var opts={};

        opts.type = attrs.type || 'pie';
        opts.width = attrs.width || 24;
        opts.height = attrs.height || 24;

        scope.$watch(scope.data, function () {
          render();
        });

        scope.$watch(attrs.opts, function(){
          render();
        });

        var render = function () {
          $(elem).sparkline(scope.data, opts);
        };
      }
    };

  });

})();
