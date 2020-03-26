'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _TrackPassenger = require('./build/TrackPassenger.json');

var _TrackPassenger2 = _interopRequireDefault(_TrackPassenger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_TrackPassenger2.default.interface), '0xA166B87C7F32dE26768Be8D2525ce8648EA032Ed');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx0cmFja3Bhc3MuanMiXSwibmFtZXMiOlsid2ViMyIsInRyYWNrcGFzcyIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUFzQixBQUF0Qjs7Ozs7O0FBRUEsSUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNmLEtBQUssQUFBTCxNQUFXLHlCQUFVLEFBQXJCLEFBRGUsWUFDa0IsQUFEbEIsQUFBakIsQUFHQTs7a0JBQWUsQUFBZiIsImZpbGUiOiJ0cmFja3Bhc3MuanMiLCJzb3VyY2VSb290IjoiRjovUHJvamVjdDgvVHJhY2tQYXNzIn0=