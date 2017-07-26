angular
.module('ReedsyQueue')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['Doc'];
function MainCtrl(Doc) {
  const vm = this;

  vm.pdf = createPdf;
  vm.pdfdoc =
  {
    doc:
    {
      type: 'PDF'
    }
  };

  function createPdf() {
    // Doc
    // .save(vm.pdfdoc)
    // .$promise
    // .then(() => {
    //   console.log('pdf created');
    // })
    // .catch(err => {
    //   console.log(err);
    // });
    console.log('Creating PDF...');
  }

  vm.html = createHtml;
  vm.htmldoc =
  {
    doc:
    {
      type: 'HTML'
    }
  };

  function createHtml() {
    // Doc
    // .save(vm.htmldoc)
    // .$promise
    // .then(() => {
    //   console.log('html created');
    // })
    // .catch(err => {
    //   console.log(err);
    // });
    console.log('Creating HTML...');
  }

}
