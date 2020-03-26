'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactSelectCountryList = require('react-select-country-list');

var _reactSelectCountryList2 = _interopRequireDefault(_reactSelectCountryList);

var _reactCountryRegionSelector = require('react-country-region-selector');

var _cryptoJs = require('crypto-js');

var _cryptoJs2 = _interopRequireDefault(_cryptoJs);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _semanticUiCalendarReact = require('semantic-ui-calendar-react');

var _trackpass = require('../ethereum/trackpass');

var _trackpass2 = _interopRequireDefault(_trackpass);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\Project8\\TrackPass\\pages\\Departure.js?entry';
//import Select from 'react-select';


var GoldSafe = function (_Component) {
  (0, _inherits3.default)(GoldSafe, _Component);

  function GoldSafe(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, GoldSafe);

    var _this = (0, _possibleConstructorReturn3.default)(this, (GoldSafe.__proto__ || (0, _getPrototypeOf2.default)(GoldSafe)).call(this, props));

    _this.handleSubmit = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                if (_this.state.id.length != 12 || isNaN(_this.state.id) === true) {
                  //this.setState({anoerror:true,loading:false});
                  alert("Aadhar no. should be of valid length");
                  _this.id.focus();
                } else if (!_this.state.emailid.match(/^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
                  //this.setState({mnameerror:true,loading:false});
                  alert("Enter proper email id");
                  _this.emailid.focus();
                } else {
                  _this.setState({ open: true, loading: true });
                }
                console.log(_this.state.id + _this.state.toc + _this.state.fromc + _this.state.fno + _this.state.tno + _this.state.date + _this.state.defcheck + _this.state.emailid);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.handleCancel = function () {
      return _this.setState({
        open: false,
        loading: false
      });
    };

    _this.handleconf = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        var travel, accounts;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                _this.setState({
                  open: false
                });
                //console.log(parseInt(this.state.quant)+10);
                console.log(_this.state.id + _this.state.toc + _this.state.fromc + _this.state.fno + _this.state.tno + _this.state.date + _this.state.defcheck + _this.state.emailid);
                _context2.prev = 3;

                //let reacth;
                travel = void 0;
                //test = (this.state.id + this.state.toc + this.state.fromc + this.state.expl+this.state.quant).toString();
                //test = test.toLowerCase();
                //console.log(test);
                //reacth = crypt.SHA256(test).toString();
                //console.log(reacth);

                _context2.next = 7;
                return _web2.default.eth.getAccounts();

              case 7:
                accounts = _context2.sent;

                console.log(accounts[0]);
                //await trackpass.methods.storegold(reacth,(this.state.id).toString(),(this.state.quant).toString(),(this.state.toc).toString(),(this.state.fromc).toString(),(this.state.expl).toString(),parseInt(this.state.billamt)).send({
                //from: accounts[0]
                //});
                _context2.next = 11;
                return _trackpass2.default.methods.gethistory(_this.state.id.toString()).call({
                  from: accounts[0]
                });

              case 11:
                travel = _context2.sent;

                if (travel.toString() == "") {
                  travel = _this.state.fromc.toString() + "-" + _this.state.toc.toString() + "(" + _this.state.date.toString() + ")";
                } else {
                  travel = travel + " " + _this.state.fromc.toString() + "-" + _this.state.toc.toString() + "(" + _this.state.date.toString() + ")";
                }
                console.log(travel);
                _context2.next = 16;
                return _trackpass2.default.methods.departure(_this.state.id.toString(), _this.state.fno.toString(), _this.state.toc.toString(), _this.state.fromc.toString(), _this.state.date.toString(), _this.state.tno.toString(), _this.state.emailid.toString(), travel.toString()).send({
                  from: accounts[0]
                });

              case 16:

                _this.setState({
                  loading: false,
                  id: '',
                  fno: '',
                  toc: '',
                  fromc: '',
                  tno: '',
                  date: '',
                  emailid: '',
                  defcheck: false
                });
                _context2.next = 23;
                break;

              case 19:
                _context2.prev = 19;
                _context2.t0 = _context2['catch'](3);

                console.log(_context2.t0);
                _this.setState({
                  loading: false,
                  open: false
                });

              case 23:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[3, 19]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.handleChange = function (event, _ref3) {
      var name = _ref3.name,
          value = _ref3.value;

      if (_this.state.hasOwnProperty(name)) {
        _this.setState((0, _defineProperty3.default)({}, name, value));
      }
    };

    _this.selectCountry = function (val) {
      _this.setState({ toc: val });
    };

    _this.selectCountry2 = function (val) {
      _this.setState({ fromc: val });
    };

    _this.options = (0, _reactSelectCountryList2.default)().getData();
    _this.state = {
      id: '',
      fno: '',
      toc: '',
      fromc: '',
      tno: '',
      date: '',
      emailid: '',
      options: _this.options,
      value: null,
      defcheck: false,
      open: false,
      modalOpen: false
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }
  //handleClose = () => this.setState({ modalOpen: false })


  (0, _createClass3.default)(GoldSafe, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, color: 'black', __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, ' ', _react2.default.createElement('font', { color: 'white', __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, 'Departure\'s Portal'), ' '), ' ', _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, color: 'grey', __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, _react2.default.createElement(_semanticUiReact.Message, { attached: true, header: 'Welcome to Departure Side!',
        content: 'Fill out the form below to fill details of passenger departed!',
        icon: 'searchengin',
        color: 'black', __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }), _react2.default.createElement(_semanticUiReact.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 'equal', __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { label: 'AAdhar No.',
        fluid: true, ref: function ref(input) {
          _this3.id = input;
        }
        //  labelPosition=""
        , value: this.state.id,
        onChange: function onChange(event) {
          return _this3.setState({
            id: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }), ' '), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { label: 'Flight No.',

        fluid: true, ref: function ref(input) {
          _this3.fno = input;
        }
        //labelPosition=""
        , value: this.state.fno,
        onChange: function onChange(event) {
          return _this3.setState({
            fno: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }))), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }, _react2.default.createElement('font', { color: 'black', __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }, 'From:')), _react2.default.createElement(_reactCountryRegionSelector.CountryDropdown, {
        value: this.state.fromc,
        onChange: function onChange(val) {
          return _this3.selectCountry2(val);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      }), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }, _react2.default.createElement('font', { color: 'black', __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }, 'To:')), _react2.default.createElement(_reactCountryRegionSelector.CountryDropdown, {

        value: this.state.toc,
        onChange: function onChange(val) {
          return _this3.selectCountry(val);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, _react2.default.createElement('label', { color: 'black', style: { fontSize: '20px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }, ' Date of Journey ')), _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }, _react2.default.createElement(_semanticUiCalendarReact.DateInput, {
        name: 'date',
        placeholder: 'Date of Journey',
        value: this.state.date,
        iconPosition: 'left',
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      })), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 'equal', __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { label: 'PNR No.',
        fluid: true, ref: function ref(input) {
          _this3.tno = input;
        }
        //  labelPosition=""
        , value: this.state.tno,
        onChange: function onChange(event) {
          return _this3.setState({
            tno: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        }
      }), ' '), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { label: 'E-mail ID',
        fluid: true, ref: function ref(input) {
          _this3.emailid = input;
        }
        //  labelPosition=""
        , value: this.state.emailid,
        onChange: function onChange(event) {
          return _this3.setState({
            emailid: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      }), ' ')), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: 'I agree that all the information is correct and properly verified.',
        onChange: function onChange(event) {
          return _this3.setState({
            defcheck: true
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        }
      }), ' '), ' ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading,
        disabled: this.state.id == '' || this.state.fno == '' || this.state.toc == '' || this.state.fromc == '' || this.state.tno == '' || this.state.date == '' || this.state.emailid == '' || this.state.defcheck == false,
        primary: true, onClick: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        }
      }, ' Submit '), _react2.default.createElement(_semanticUiReact.Confirm, { open: this.state.open,
        cancelButton: 'Go Back',
        confirmButton: 'Confirm',
        onCancel: this.handleCancel,
        onConfirm: this.handleconf,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        }
      })), ' '), ' '), ' ');
    }
  }]);

  return GoldSafe;
}(_react.Component);

exports.default = GoldSafe;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxEZXBhcnR1cmUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsImNvdW50cnlMaXN0IiwiQ291bnRyeURyb3Bkb3duIiwiUmVnaW9uRHJvcGRvd24iLCJDb3VudHJ5UmVnaW9uRGF0YSIsImNyeXB0IiwiTGF5b3V0IiwiRm9ybSIsIk1vZGFsIiwiSGVhZGVyIiwiSWNvbiIsIkJ1dHRvbiIsIklucHV0IiwiRHJvcGRvd24iLCJNZW51IiwiUmFkaW8iLCJNZXNzYWdlIiwiU2VnbWVudCIsIkNoZWNrYm94IiwiQ29uZmlybSIsIkRhdGVJbnB1dCIsInRyYWNrcGFzcyIsIndlYjMiLCJHb2xkU2FmZSIsInByb3BzIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0YXRlIiwiaWQiLCJsZW5ndGgiLCJpc05hTiIsImFsZXJ0IiwiZm9jdXMiLCJlbWFpbGlkIiwibWF0Y2giLCJzZXRTdGF0ZSIsIm9wZW4iLCJsb2FkaW5nIiwiY29uc29sZSIsImxvZyIsInRvYyIsImZyb21jIiwiZm5vIiwidG5vIiwiZGF0ZSIsImRlZmNoZWNrIiwiaGFuZGxlQ2FuY2VsIiwiaGFuZGxlY29uZiIsInRyYXZlbCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiZ2V0aGlzdG9yeSIsInRvU3RyaW5nIiwiY2FsbCIsImZyb20iLCJkZXBhcnR1cmUiLCJzZW5kIiwiaGFuZGxlQ2hhbmdlIiwibmFtZSIsInZhbHVlIiwiaGFzT3duUHJvcGVydHkiLCJzZWxlY3RDb3VudHJ5IiwidmFsIiwic2VsZWN0Q291bnRyeTIiLCJvcHRpb25zIiwiZ2V0RGF0YSIsIm1vZGFsT3BlbiIsImJpbmQiLCJpbnB1dCIsInRhcmdldCIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFDTDs7OztBQUVGLEFBQU87Ozs7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LEFBQUssTUFUUCxBQVNhLEFBRWI7a0JBQ0UseUJBQUE7d0JBQVMsQUFBSztxQkFDSCxNQUFBLEFBQU0sT0FEakIsQUFBUyxBQUFjLEFBQ0M7QUFERCxBQUNyQixXQURPO0FBWlg7O29CQUFBO3NCQUZBLEFBRUE7QUFBQTtVQXJHQSxBQThFSSxBQXFCSixBQXNCQTs7b0JBQUE7c0JBekhBLEFBeUhBLEFBRUE7QUFGQTtBQUFBLDBCQUVDLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDQTtBQURBO0FBQUEseUJBQ0EsQUFDQSwyQ0FBUyxPQURULEFBQ2lCLEFBQ2pCO2tCQUNFLHlCQUFBO3dCQUFTLEFBQUs7c0JBQWQsQUFBUyxBQUFjLEFBQ1g7QUFEVyxBQUNyQixXQURPO0FBSFg7O29CQUFBO3NCQURBLEFBQ0E7QUFBQTtVQTVIQSxBQTJIQSxNQVNhOztvQkFBQTtzQkFwSWIsQUFvSWEsQUFFYjtBQUZhO0FBQUEsMEJBRWIsQUFDQSx5Q0FBTyxTQUNMLEtBQUEsQUFBSyxNQUZQLEFBRWEsQUFFYjtrQkFDRSxLQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBZSxNQUFNLEtBQUEsQUFBSyxNQUFMLEFBQVcsT0FBaEMsQUFBcUMsTUFBTSxLQUFBLEFBQUssTUFBTCxBQUFXLE9BQXRELEFBQTJELE1BQU0sS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUE1RSxBQUFtRixNQUFNLEtBQUEsQUFBSyxNQUFMLEFBQVcsT0FBcEcsQUFBeUcsTUFBSSxLQUFBLEFBQUssTUFBTCxBQUFXLFFBQXhILEFBQThILE1BQU0sS0FBQSxBQUFLLE1BQUwsQUFBVyxXQUEvSSxBQUF3SixNQUFLLEtBQUEsQUFBSyxNQUFMLEFBQVcsWUFMMUssQUFLb0wsQUFFcEw7aUJBUEEsTUFPUSxTQUNOLEtBUkYsQUFRTzs7b0JBUlA7c0JBQUE7QUFBQTtTQXRJQSxBQXNJQSxBQVdDLDZCQUFBLEFBQ0QsMENBQVEsTUFDTixLQUFBLEFBQUssTUFGTixBQUVZLEFBRWI7c0JBSkMsQUFJYyxBQUNmO3VCQUxDLEFBS2UsQUFDaEI7a0JBQ0UsS0FQRCxBQU9NLEFBRVA7bUJBQ0UsS0FWRCxBQVVNOztvQkFWTjtzQkF6SnlELEFBUTFELEFBaUpDO0FBQUE7V0E1SkQsQUFHMEQsTUFMbkQsQUFFUCxNQUZGLEFBQVMsQUFrTFY7Ozs7O0FBMVNtQyxBOztrQkFBakIsQSIsImZpbGUiOiJEZXBhcnR1cmUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRjovUHJvamVjdDgvVHJhY2tQYXNzIn0=