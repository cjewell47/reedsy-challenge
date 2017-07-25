angular
.module('ReedsyQueue')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['Doc'];
function MainCtrl(Doc) {
  const vm = this;
  vm.create= docCreate;
  function docCreate(){
    Doc
    .save(vm.doc)
    .$promise
    .then(() => {
      console.log('Created');
    })
    .catch(err => {
      console.log(err);
    });
  }
}
