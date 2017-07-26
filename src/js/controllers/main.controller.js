angular
.module('ReedsyQueue')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['Doc'];
function MainCtrl(Doc) {
  const vm = this;

  vm.pdf = createPdf;
  function createPdf() {
    vm.doc =
    { doc:
    {
      type: 'PDF'
    }
    };

    Doc
    .save(vm.doc)
    .$promise
    .then(() => {
      console.log('pdf created');
    })
    .catch(err => {
      console.log(err);
    });
  }

  vm.html = createHtml;
  function createHtml() {
    vm.doc =
    { doc:
    {
      type: 'HTML'
    }
    };

    Doc
    .save(vm.doc)
    .$promise
    .then(() => {
      console.log('html created');
    })
    .catch(err => {
      console.log(err);
    });
  }



}
