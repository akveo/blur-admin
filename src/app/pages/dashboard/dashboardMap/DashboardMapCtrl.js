/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardMapCtrl', DashboardMapCtrl);

  /** @ngInject */
  function DashboardMapCtrl() {
    var map = AmCharts.makeChart('amChartMap', {
      type: 'map',
      theme: 'blur',
      zoomControl: { zoomControlEnabled: false, panControlEnabled: false },

      dataProvider: {
        map: 'worldLow',
        zoomLevel: 3.5,
        zoomLongitude: 10,
        zoomLatitude: 52,
        areas: [
          { title: 'Austria', id: 'AT', color: colorPrimary, customData: '1 244', groupId: '1'},
          { title: 'Ireland', id: 'IE', color: colorPrimary, customData: '1 342', groupId: '1'},
          { title: 'Denmark', id: 'DK', color: colorPrimary, customData: '1 973', groupId: '1'},
          { title: 'Finland', id: 'FI', color: colorPrimary, customData: '1 573', groupId: '1'},
          { title: 'Sweden', id: 'SE', color: colorPrimary, customData: '1 084', groupId: '1'},
          { title: 'Great Britain', id: 'GB', color: colorPrimary, customData: '1 452', groupId: '1'},
          { title: 'Italy', id: 'IT', color: colorPrimary, customData: '1 321', groupId: '1'},
          { title: 'France', id: 'FR', color: colorPrimary, customData: '1 112', groupId: '1'},
          { title: 'Spain', id: 'ES', color: colorPrimary, customData: '1 865', groupId: '1'},
          { title: 'Greece', id: 'GR', color: colorPrimary, customData: '1 453', groupId: '1'},
          { title: 'Germany', id: 'DE', color: colorPrimary, customData: '1 957', groupId: '1'},
          { title: 'Belgium', id: 'BE', color: colorPrimary, customData: '1 011', groupId: '1'},
          { title: 'Luxembourg', id: 'LU', color: colorPrimary, customData: '1 011', groupId: '1'},
          { title: 'Netherlands', id: 'NL', color: colorPrimary, customData: '1 213', groupId: '1'},
          { title: 'Portugal', id: 'PT', color: colorPrimary, customData: '1 291', groupId: '1'},
          { title: 'Lithuania', id: 'LT', color: colorSuccessLight, customData: '567', groupId: '2'},
          { title: 'Latvia', id: 'LV', color: colorSuccessLight, customData: '589', groupId: '2'},
          { title: 'Czech Republic ', id: 'CZ', color: colorSuccessLight, customData: '785', groupId: '2'},
          { title: 'Slovakia', id: 'SK', color: colorSuccessLight, customData: '965', groupId: '2'},
          { title: 'Estonia', id: 'EE', color: colorSuccessLight, customData: '685', groupId: '2'},
          { title: 'Hungary', id: 'HU', color: colorSuccessLight, customData: '854', groupId: '2'},
          { title: 'Cyprus', id: 'CY', color: colorSuccessLight, customData: '754', groupId: '2'},
          { title: 'Malta', id: 'MT', color: colorSuccessLight, customData: '867', groupId: '2'},
          { title: 'Poland', id: 'PL', color: colorSuccessLight, customData: '759', groupId: '2'},
          { title: 'Romania', id: 'RO', color: colorSuccess, customData: '302', groupId: '3'},
          { title: 'Bulgaria', id: 'BG', color: colorSuccess, customData: '102', groupId: '3'},
          { title: 'Slovenia', id: 'SI', color: colorDanger, customData: '23', groupId: '4'},
          { title: 'Croatia', id: 'HR', color: colorDanger, customData: '96', groupId: '4'}
        ]
      },

      areasSettings: {
        rollOverOutlineColor: '#FFFFFF',
        rollOverColor: colorPrimaryDark,
        alpha: 0.8,
        unlistedAreasAlpha: 0.1,
        balloonText: '[[title]]: [[customData]] users'
      },


      legend: {
        width: '100%',
        marginRight: 27,
        marginLeft: 27,
        equalWidths: false,
        backgroundAlpha: 0.5,
        backgroundColor: '#FFFFFF',
        borderColor: '#ffffff',
        borderAlpha: 1,
        top: 362,
        left: 0,
        horizontalGap: 10,
        data: [
          {
            title: 'over 1 000 users',
            color: colorPrimary
          },
          {
            title: '500 - 1 000 users',
            color: colorSuccessLight
          },
          {
            title: '100 - 500 users',
            color: colorSuccess
          },
          {
            title: '0 - 100 users',
            color: colorDanger
          }
        ]
      },
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-right',
      pathToImages: 'img/'
    });
  }
})();