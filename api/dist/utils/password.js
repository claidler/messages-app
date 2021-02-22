"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.comparePassword = exports.createPassword = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var createPassword = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(password) {
    var saltRounds, salt, hashedPassword;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            saltRounds = 10;
            _context.next = 4;
            return _bcryptjs["default"].genSalt(saltRounds);

          case 4:
            salt = _context.sent;
            _context.next = 7;
            return _bcryptjs["default"].hash(password, salt);

          case 7:
            hashedPassword = _context.sent;
            return _context.abrupt("return", hashedPassword);

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);
            return _context.abrupt("return", _context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function createPassword(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.createPassword = createPassword;

var comparePassword = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(password, otherPassword) {
    var isValid;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _bcryptjs["default"].compare(otherPassword, password);

          case 3:
            isValid = _context2.sent;
            return _context2.abrupt("return", isValid);

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", _context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function comparePassword(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.comparePassword = comparePassword;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9wYXNzd29yZC50cyJdLCJuYW1lcyI6WyJjcmVhdGVQYXNzd29yZCIsInBhc3N3b3JkIiwic2FsdFJvdW5kcyIsImJjcnlwdCIsImdlblNhbHQiLCJzYWx0IiwiaGFzaCIsImhhc2hlZFBhc3N3b3JkIiwiY29uc29sZSIsImVycm9yIiwiY29tcGFyZVBhc3N3b3JkIiwib3RoZXJQYXNzd29yZCIsImNvbXBhcmUiLCJpc1ZhbGlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRU8sSUFBTUEsY0FBYztBQUFBLDJGQUFHLGlCQUFPQyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXRCQyxZQUFBQSxVQUZzQixHQUVULEVBRlM7QUFBQTtBQUFBLG1CQUdUQyxxQkFBT0MsT0FBUCxDQUFlRixVQUFmLENBSFM7O0FBQUE7QUFHdEJHLFlBQUFBLElBSHNCO0FBQUE7QUFBQSxtQkFJQ0YscUJBQU9HLElBQVAsQ0FBWUwsUUFBWixFQUFzQkksSUFBdEIsQ0FKRDs7QUFBQTtBQUl0QkUsWUFBQUEsY0FKc0I7QUFBQSw2Q0FLckJBLGNBTHFCOztBQUFBO0FBQUE7QUFBQTtBQU81QkMsWUFBQUEsT0FBTyxDQUFDQyxLQUFSO0FBUDRCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWRULGNBQWM7QUFBQTtBQUFBO0FBQUEsR0FBcEI7Ozs7QUFZQSxJQUFNVSxlQUFlO0FBQUEsNEZBQUcsa0JBQzlCVCxRQUQ4QixFQUU5QlUsYUFGOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUtQUixxQkFBT1MsT0FBUCxDQUFlRCxhQUFmLEVBQThCVixRQUE5QixDQUxPOztBQUFBO0FBS3ZCWSxZQUFBQSxPQUx1QjtBQUFBLDhDQU10QkEsT0FOc0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBZkgsZUFBZTtBQUFBO0FBQUE7QUFBQSxHQUFyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUGFzc3dvcmQgPSBhc3luYyAocGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3Qgc2FsdFJvdW5kcyA9IDEwO1xuXHRcdGNvbnN0IHNhbHQgPSBhd2FpdCBiY3J5cHQuZ2VuU2FsdChzYWx0Um91bmRzKTtcblx0XHRjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCBzYWx0KTtcblx0XHRyZXR1cm4gaGFzaGVkUGFzc3dvcmQ7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcblx0XHRyZXR1cm4gZXJyO1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgY29tcGFyZVBhc3N3b3JkID0gYXN5bmMgKFxuXHRwYXNzd29yZDogc3RyaW5nLFxuXHRvdGhlclBhc3N3b3JkOiBzdHJpbmdcbik6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IGlzVmFsaWQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShvdGhlclBhc3N3b3JkLCBwYXNzd29yZCk7XG5cdFx0cmV0dXJuIGlzVmFsaWQ7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdHJldHVybiBlcnI7XG5cdH1cbn07XG4iXX0=