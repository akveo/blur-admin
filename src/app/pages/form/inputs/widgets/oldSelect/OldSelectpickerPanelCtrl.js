/**
 * @author v.lugovsky
 * created on 22.04.2016
 * @deprecated
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form')
      .controller('OldSelectpickerPanelCtrl', OldSelectpickerPanelCtrl);

  /** @ngInject */
  function OldSelectpickerPanelCtrl() {
    var vm = this;

    vm.standardSelectItems = [
      { label: 'Option 1', value: 1 },
      { label: 'Option 2', value: 2 },
      { label: 'Option 3', value: 3 },
      { label: 'Option 4', value: 4 },
    ];

    vm.selectWithSearchItems = [
      { label: 'Hot Dog, Fries and a Soda', value: 1 },
      { label: 'Burger, Shake and a Smile', value: 2 },
      { label: 'Sugar, Spice and all things nice', value: 3 },
      { label: 'Baby Back Ribs', value: 4 },
    ];

    vm.groupedSelectItems = [
      { label: 'Group 1 - Option 1', value: 1, group: 'Group 1' },
      { label: 'Group 2 - Option 2', value: 2, group: 'Group 2' },
      { label: 'Group 1 - Option 3', value: 3, group: 'Group 1' },
      { label: 'Group 2 - Option 4', value: 4, group: 'Group 2' },
    ];

  }

})();
