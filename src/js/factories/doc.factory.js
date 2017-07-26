angular
.module('ReedsyQueue')
.factory('Doc', Doc);

Doc.$inject = ['API', '$resource'];
function Doc(API, $resource) {
  return $resource(`${API}/docs`,
    { id: '@_id' }
  );
}
