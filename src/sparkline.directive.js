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

            opts.type = attrs.type || 'line';

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
