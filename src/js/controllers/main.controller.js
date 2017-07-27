angular
.module('ReedsyQueue')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['Doc'];
function MainCtrl(Doc) {
  const vm = this;

  vm.pdf = createPdf;

  function createPdf() {

    vm.doc =
    {
      type: 'PDF'
    };

    vm.createDoc();
    // Doc
    // .save(vm.pdfdoc)
    // .$promise
    // .then((doc) => {
    //   console.log(doc, 'pdf created');
    // })
    // .catch(err => {
    //   console.log(err);
    // });
    console.log('Creating PDF...');
  }

  vm.html = createHtml;

  function createHtml() {
    vm.doc =
    {
      type: 'HTML'
    };

    vm.createDoc();

    // Doc
    // .save(vm.htmldoc)
    // .$promise
    // .then((doc) => {
    //   console.log(doc, 'html created');
    // })
    // .catch(err => {
    //   console.log(err);
    // });
    console.log('Creating HTML...');
  }

  vm.createDoc = createDoc;
  function createDoc() {
    Doc
    .save(vm.doc)
    .$promise
    .then((doc) => {
      console.log(doc, 'html created');
    })
    .catch(err => {
      console.log(err);
    });
  }

}
