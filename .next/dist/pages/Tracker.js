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

var _emailjsCom = require('emailjs-com');

var emailjs = _interopRequireWildcard(_emailjsCom);

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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\Project8\\TrackPass\\pages\\Tracker.js?entry';
//import Select from 'react-select';ncncnncncnc


var Verify = function (_Component) {
  (0, _inherits3.default)(Verify, _Component);

  function Verify(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, Verify);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Verify.__proto__ || (0, _getPrototypeOf2.default)(Verify)).call(this, props));

    _this.handleSubmit = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var perm, accounts, res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                perm = void 0;
                _context.prev = 2;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;
                _context.next = 8;
                return _trackpass2.default.methods.gethistory(_this.state.id.toString()).call({
                  from: accounts[0]
                });

              case 8:
                perm = _context.sent;
                res = perm.split(" ");

                _this.setState({ hist: res });

                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](2);

                console.log(_context.t0);

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 13]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.handleChange = function (event, _ref2) {
      var name = _ref2.name,
          value = _ref2.value;

      if (_this.state.hasOwnProperty(name)) {
        _this.setState((0, _defineProperty3.default)({}, name, value));
      }
    };

    _this.state = {
      id: '',
      hist: []
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.sendemail = _this.sendemail.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Verify, [{
    key: 'sendemail',
    value: function sendemail(event) {
      event.preventDefault();
      var id = this.state.id;

      var templateParams = {
        from_name: "Airlines",
        to_name: id,
        subject: "Enquiry regarding Symptoms of COVID-19",
        message_html: "This is just to ask you whether you have any symptoms of COVID-19 like dry cough,sore throat,nausea,fatigue,cold etc.If its there, please don't panic we are there to help you so that we can come to your house and take you for test.If its not there,we strongly suggest you to be home quarantined for atleast 14 days."
      };
      emailjs.send('gmail', 'template_MWuommQC', templateParams, 'user_MzfXZ4xwzDu7AxOElDZID');
      this.resetForm();
    }
  }, {
    key: 'resetForm',
    value: function resetForm() {
      this.setState({
        id: '', hist: []
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, color: 'black', __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, ' ', _react2.default.createElement('font', { color: 'white', __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, 'Airline\'s Portal'), ' '), ' ', _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, color: 'grey', __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, _react2.default.createElement(_semanticUiReact.Message, { attached: true, header: 'Welcome!',
        content: 'Check the travel history of the passenger here.',
        icon: 'searchengin',
        color: 'black', __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }), _react2.default.createElement(_semanticUiReact.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { label: 'Aadhar Id',
        fluid: true, ref: function ref(input) {
          _this3.id = input;
        },
        value: this.state.id,
        onChange: function onChange(event) {
          return _this3.setState({
            id: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }), ' '), _react2.default.createElement(_semanticUiReact.Button, {
        disabled: this.state.id == '',
        primary: true, onClick: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, ' Check '), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }), _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, _react2.default.createElement('font', { color: 'black', __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, 'Passenger\'s Travel History')), _react2.default.createElement(_semanticUiReact.Item.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, this.state.hist.map(function (item) {
        return _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          }
        }, _react2.default.createElement(_semanticUiReact.Item, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          }
        }, _react2.default.createElement(_semanticUiReact.Item.Image, { size: 'tiny', src: '/static/download.jpg', __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          }
        }), _react2.default.createElement(_semanticUiReact.Item.Content, { verticalAlign: 'middle', __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          }
        }, _react2.default.createElement(_semanticUiReact.Item.Header, { as: 'a', __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          }
        }, _react2.default.createElement('h3', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          }
        }, _react2.default.createElement('font', { color: 'black', __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          }
        }, item))))), _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          }
        }), _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          }
        }));
      })), _react2.default.createElement(_semanticUiReact.Button, {
        disabled: this.state.id == '',
        primary: true, onClick: this.sendemail,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, ' Send Email to ask for symptoms')), ' '), ' '), ' ');
    }
  }]);

  return Verify;
}(_react.Component);

exports.default = Verify;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxUcmFja2VyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZW1haWxqcyIsIlJlYWN0RE9NIiwiY291bnRyeUxpc3QiLCJDb3VudHJ5RHJvcGRvd24iLCJSZWdpb25Ecm9wZG93biIsIkNvdW50cnlSZWdpb25EYXRhIiwiY3J5cHQiLCJMYXlvdXQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJEcm9wZG93biIsIk1vZGFsIiwiSWNvbiIsIkhlYWRlciIsIk1lbnUiLCJSYWRpbyIsIk1lc3NhZ2UiLCJJdGVtIiwiU2VnbWVudCIsIkNoZWNrYm94IiwiQ29uZmlybSIsIkRhdGVJbnB1dCIsInRyYWNrcGFzcyIsIndlYjMiLCJWZXJpZnkiLCJwcm9wcyIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwZXJtIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJnZXRoaXN0b3J5Iiwic3RhdGUiLCJpZCIsInRvU3RyaW5nIiwiY2FsbCIsImZyb20iLCJyZXMiLCJzcGxpdCIsInNldFN0YXRlIiwiaGlzdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwidmFsdWUiLCJoYXNPd25Qcm9wZXJ0eSIsImJpbmQiLCJzZW5kZW1haWwiLCJ0ZW1wbGF0ZVBhcmFtcyIsImZyb21fbmFtZSIsInRvX25hbWUiLCJzdWJqZWN0IiwibWVzc2FnZV9odG1sIiwic2VuZCIsInJlc2V0Rm9ybSIsImlucHV0IiwidGFyZ2V0IiwibWFwIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQ0w7Ozs7QUFFRixBQUFPOztJQUFQLEFBQVk7O0FBQ1osQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTLEFBQWlCLEFBQWdCOztBQUMxQyxBQUFPOzs7O0FBRVAsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQ0UsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQTs7QUFFRixBQUNFOztBQUVGLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQVU7Ozs7Ozs7OztBQXRCakI7OztJQXVCcUIsQTtrQ0FDbkI7O2tCQUFBLEFBQVksT0FBTztpQkFBQTs7d0NBQUE7O3NJQUFBLEFBQ1g7O1VBRFcsQUFnQ25CLDJCQWhDbUI7MEZBZ0NKLGlCQUFBLEFBQU8sT0FBUDs0QkFBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFDYjtzQkFBQSxBQUFNLEFBQ0Y7QUFGUyw0QkFBQTtnQ0FBQTtnQ0FBQTt1QkFPZ0IsY0FBQSxBQUFLLElBUHJCLEFBT2dCLEFBQVM7O21CQUExQjtBQVBDLG9DQUFBO2dDQUFBOzJDQVFNLEFBQVUsUUFBVixBQUFrQixXQUFZLE1BQUEsQUFBSyxNQUFOLEFBQVksR0FBekMsQUFBNkIsQUFBZ0IsWUFBN0MsQUFBeUQ7d0JBQzlELFNBVEQsQUFRTSxBQUE4RCxBQUNuRSxBQUFTO0FBRDBELEFBQ3pFLGlCQURXOzttQkFBYjtBQVJPLGdDQVdIO0FBWEcsc0JBV0csS0FBQSxBQUFLLE1BWFIsQUFXRyxBQUFXLEFBQ3JCOztzQkFBQSxBQUFLLFNBQVMsRUFBQyxNQVpSLEFBWVAsQUFBYyxBQUFNOztnQ0FaYjtBQUFBOzttQkFBQTtnQ0FBQTtnREFlTDs7d0JBQUEsQUFBUSxhQWZIOzttQkFBQTttQkFBQTtnQ0FBQTs7QUFBQTtpQ0FBQTtBQWhDSTs7MkJBQUE7Z0NBQUE7QUFBQTtBQUFBOztVQUFBLEFBeURuQixlQUFlLFVBQUEsQUFBQyxjQUdWO1VBRkosQUFFSSxhQUZKLEFBRUk7VUFESixBQUNJLGNBREosQUFDSSxBQUNKOztVQUFJLE1BQUEsQUFBSyxNQUFMLEFBQVcsZUFBZixBQUFJLEFBQTBCLE9BQU8sQUFDbkM7Y0FBQSxBQUFLLDJDQUFMLEFBQ0csTUFESCxBQUNVLEFBRVg7QUFDRjtBQWxFa0IsQUFFakI7O1VBQUEsQUFBSztVQUFRLEFBQ1IsQUFDSDtZQUZGLEFBQWEsQUFFTixBQUVQO0FBSmEsQUFDWDtVQUdGLEFBQUssZUFBZSxNQUFBLEFBQUssYUFBTCxBQUFrQixLQUF0QyxBQUNBO1VBQUEsQUFBSyxZQUFZLE1BQUEsQUFBSyxVQUFMLEFBQWUsS0FQZixBQU9qQjtXQUNEOzs7Ozs4QkFFVSxBLE9BQVEsQUFDakI7WUFEaUIsQUFDakIsQUFBTTtVQURXLEFBRVYsS0FBTSxLQUZJLEFBRUMsTUFGRCxBQUVWLEFBQ1A7O1VBQUk7bUJBQWlCLEFBQ1IsQUFDWDtpQkFGbUIsQUFFVixBQUNUO2lCQUhtQixBQUdWLEFBQ1Q7c0JBSkYsQUFBcUIsQUFJTCxBQUVmO0FBTm9CLEFBQ25CO2NBS0QsQUFBUSxLQUFSLEFBQ0MsU0FERCxBQUVDLHFCQUZELEFBR0UsZ0JBSEYsQUFJQyxBQUVEO1dBQUEsQUFBSyxBQUNQOzs7O2dDQUNXLEFBQ1Y7V0FBQSxBQUFLO1lBQVMsQUFDVCxJQUFHLE1BRFIsQUFBYyxBQUNELEFBRWQ7QUFIZSxBQUNaOzs7OzZCQXlDSzttQkFDUDs7NkJBQVMsQUFDUCwwQ0FBUSxVQURELE1BQ1UsT0FEVixBQUNrQjtvQkFEbEI7c0JBQUEsQUFFUDtBQUZPO09BQUEsa0JBRVAsQUFDQTs7b0JBREE7c0JBQUEsQUFFQTtBQUZBO0FBQUEseUJBRUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQ0sscUJBQUEsY0FBQSxVQUFNLE9BQU4sQUFBWTtvQkFBWjtzQkFBQTtBQUFBO1NBREwsQUFDSyxzQkFITCxBQUVBLE1BQ3dELHFCQUFBLEFBQ3hELDBDQUFRLFVBRGdELE1BQ3ZDLE9BRHVDLEFBQy9CO29CQUQrQjtzQkFBQSxBQUV4RDtBQUZ3RDt5QkFFeEQsQUFDQSwwQ0FBUSxVQURSLE1BQ2lCLFFBRGpCLEFBQzBCLEFBQzFCO2lCQUZBLEFBRVUsQUFDVjtjQUhBLEFBR08sQUFDUDtlQUpBLEFBSVE7b0JBSlI7c0JBRndELEFBRXhELEFBT0E7QUFQQTswQkFPQSxBQUNBOztvQkFEQTtzQkFBQSxBQUlBO0FBSkE7QUFBQTs7b0JBSUE7c0JBSkEsQUFJQSxBQUNBO0FBREE7QUFBQSwwQkFFQSxjQURBLHNCQUFBLEFBQ0s7O29CQURMO3NCQUFBLEFBRUE7QUFGQTtBQUFBLHlCQUVBLEFBQ0Esd0NBQU0sT0FETixBQUNjLEFBQ2Q7ZUFGQSxNQUVNLEtBQ0osYUFBQSxBQUFDLE9BQVUsQUFDVDtpQkFBQSxBQUFLLEtBQUwsQUFBVSxBQUNYO0FBTEgsQUFPQTtlQUNFLEtBQUEsQUFBSyxNQVJQLEFBUWEsQUFFYjtrQkFDRSx5QkFBQTt3QkFBUyxBQUFLO2dCQUNSLE1BQUEsQUFBTSxPQURaLEFBQVMsQUFBYyxBQUNKO0FBREksQUFDckIsV0FETztBQVhYOztvQkFBQTtzQkFGQSxBQUVBO0FBQUE7VUFQQSxBQUtBLEFBb0JBLHNCQUFBLEFBQ0U7a0JBRUUsS0FBQSxBQUFLLE1BQUwsQUFBVyxNQUhmLEFBR21CLEFBRWpCO2lCQUxGLE1BS1UsU0FDTixLQU5KLEFBTVM7O29CQU5UO3NCQUFBO0FBQUE7QUFFRSxTQTNCRixBQXlCQSxBQVNHOztvQkFBQTtzQkFsQ0gsQUFrQ0csQUFDQTtBQURBO0FBQUEsMEJBQ0EsY0FBQTs7b0JBQUE7c0JBQUEsQUFBSTtBQUFKO0FBQUEseUJBQUksY0FBQSxVQUFNLE9BQU4sQUFBWTtvQkFBWjtzQkFBQTtBQUFBO1NBbkNQLEFBbUNHLEFBQUksQUFDSixpREFBQyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBR0Y7QUFIRTtBQUFBLGNBR0YsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixJQUFJLGdCQUFBOytCQUFTLGNBQUE7O3NCQUFBO3dCQUFBLEFBQUs7QUFBTDtBQUFBLFNBQUEsa0JBQUssQUFBQzs7c0JBQUQ7d0JBQUEsQUFBTTtBQUFOO0FBQUEseUNBQU0sQUFBQyxzQkFBRCxBQUFNLFNBQU0sTUFBWixBQUFpQixRQUFPLEtBQXhCLEFBQTRCO3NCQUE1Qjt3QkFBTixBQUFNLEFBQXFEO0FBQXJEOzRCQUFzRCxjQUFELHNCQUFBLEFBQU0sV0FBUSxlQUFkLEFBQTRCO3NCQUE1Qjt3QkFBQSxBQUM1RjtBQUQ0RjsyQkFDM0YsY0FBRCxzQkFBQSxBQUFNLFVBQU8sSUFBYixBQUFnQjtzQkFBaEI7d0JBQUEsQUFBb0I7QUFBcEI7MkJBQW9CLGNBQUE7O3NCQUFBO3dCQUFBLEFBQUk7QUFBSjtBQUFBLDJCQUFJLGNBQUEsVUFBTSxPQUFOLEFBQVk7c0JBQVo7d0JBQUEsQUFBcUI7QUFBckI7V0FESSxBQUFLLEFBQTJELEFBQzVGLEFBQW9CLEFBQUksQUFDRjs7c0JBQUE7d0JBRk0sQUFFTixBQUFLO0FBQUw7QUFBQTs7c0JBQUs7d0JBRlIsQUFBUyxBQUVEO0FBQUE7QUFBQTtBQXpDN0IsQUFvQ0csQUFHRixBQVNILDJCQUFBLEFBQ0E7a0JBRUUsS0FBQSxBQUFLLE1BQUwsQUFBVyxNQUhiLEFBR2lCLEFBRWpCO2lCQUxBLE1BS1EsU0FDTixLQU5GLEFBTU87O29CQU5QO3NCQUFBO0FBQUE7QUFFQSxTQTNEMEQsQUFTeEQsQUFnREYscUNBNURFLEFBR3dELE1BTGpELEFBRVAsTUFGRixBQUFTLEFBK0VWOzs7OztBQXZKaUMsQTs7a0JBQWYsQSIsImZpbGUiOiJUcmFja2VyLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkY6L1Byb2plY3Q4L1RyYWNrUGFzcyJ9