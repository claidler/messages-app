"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _typeorm = require("typeorm");

var _password2 = require("../utils/password");

var _User = require("../entity/User");

var UserController = /*#__PURE__*/function () {
  function UserController() {
    (0, _classCallCheck2["default"])(this, UserController);
  }

  (0, _createClass2["default"])(UserController, [{
    key: "getUser",
    value: function () {
      var _getUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var id, user;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                id = req.session.userId;
                _context.next = 4;
                return (0, _typeorm.getRepository)(_User.User).findOne(id);

              case 4:
                user = _context.sent;
                res.send(user);
                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);
                res.status(500).send({
                  message: 'Server error'
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      function getUser(_x, _x2) {
        return _getUser.apply(this, arguments);
      }

      return getUser;
    }()
  }, {
    key: "createUser",
    value: function () {
      var _createUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var _req$body, username, _password, password, newUser, savedUser;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _req$body = req.body, username = _req$body.username, _password = _req$body.password;
                _context2.next = 4;
                return (0, _password2.createPassword)(_password);

              case 4:
                password = _context2.sent;
                newUser = (0, _typeorm.getRepository)(_User.User).create({
                  username: username,
                  password: password
                });
                _context2.next = 8;
                return (0, _typeorm.getRepository)(_User.User).save(newUser);

              case 8:
                savedUser = _context2.sent;
                req.session.userId = savedUser.id;
                res.send({
                  data: savedUser
                });
                _context2.next = 17;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](0);
                console.error(_context2.t0);
                res.status(500).send({
                  message: 'Server error'
                });

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 13]]);
      }));

      function createUser(_x3, _x4) {
        return _createUser.apply(this, arguments);
      }

      return createUser;
    }()
  }, {
    key: "loginUser",
    value: function () {
      var _loginUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var _req$body2, username, password, user, passwordIsValid;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _req$body2 = req.body, username = _req$body2.username, password = _req$body2.password;
                _context3.next = 4;
                return (0, _typeorm.getRepository)(_User.User).findOne({
                  username: username
                });

              case 4:
                user = _context3.sent;

                if (user) {
                  _context3.next = 8;
                  break;
                }

                res.status(401).send({
                  message: 'No user found with this username. Please try again.'
                });
                return _context3.abrupt("return");

              case 8:
                _context3.next = 10;
                return (0, _password2.comparePassword)(user.password, password);

              case 10:
                passwordIsValid = _context3.sent;

                if (passwordIsValid) {
                  _context3.next = 14;
                  break;
                }

                res.status(401).send({
                  message: 'Incorrect password. Please try again.'
                });
                return _context3.abrupt("return");

              case 14:
                req.session.userId = user.id;
                res.send({
                  data: user
                });
                _context3.next = 22;
                break;

              case 18:
                _context3.prev = 18;
                _context3.t0 = _context3["catch"](0);
                console.error(_context3.t0);
                res.status(500).send({
                  message: 'Server error'
                });

              case 22:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 18]]);
      }));

      function loginUser(_x5, _x6) {
        return _loginUser.apply(this, arguments);
      }

      return loginUser;
    }()
  }, {
    key: "logoutUser",
    value: function () {
      var _logoutUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                try {
                  req.session.destroy(function (err) {
                    return console.error(err);
                  });
                  res.send({
                    data: 'User logged out'
                  });
                } catch (err) {
                  console.error(err);
                  res.status(500).send({
                    message: 'Server error'
                  });
                }

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function logoutUser(_x7, _x8) {
        return _logoutUser.apply(this, arguments);
      }

      return logoutUser;
    }()
  }]);
  return UserController;
}();

var _default = new UserController();

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy91c2VyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJVc2VyQ29udHJvbGxlciIsInJlcSIsInJlcyIsImlkIiwic2Vzc2lvbiIsInVzZXJJZCIsIlVzZXIiLCJmaW5kT25lIiwidXNlciIsInNlbmQiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGF0dXMiLCJtZXNzYWdlIiwiYm9keSIsInVzZXJuYW1lIiwiX3Bhc3N3b3JkIiwicGFzc3dvcmQiLCJuZXdVc2VyIiwiY3JlYXRlIiwic2F2ZSIsInNhdmVkVXNlciIsImRhdGEiLCJwYXNzd29yZElzVmFsaWQiLCJkZXN0cm95IiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztJQUVNQSxjOzs7Ozs7OzttR0FDTCxpQkFBY0MsR0FBZCxFQUE0QkMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFUUMsZ0JBQUFBLEVBRlIsR0FFYUYsR0FBRyxDQUFDRyxPQUFKLENBQVlDLE1BRnpCO0FBQUE7QUFBQSx1QkFHcUIsNEJBQWNDLFVBQWQsRUFBb0JDLE9BQXBCLENBQTRCSixFQUE1QixDQUhyQjs7QUFBQTtBQUdRSyxnQkFBQUEsSUFIUjtBQUlFTixnQkFBQUEsR0FBRyxDQUFDTyxJQUFKLENBQVNELElBQVQ7QUFKRjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU1FRSxnQkFBQUEsT0FBTyxDQUFDQyxLQUFSO0FBQ0FULGdCQUFBQSxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCSCxJQUFoQixDQUFxQjtBQUFFSSxrQkFBQUEsT0FBTyxFQUFFO0FBQVgsaUJBQXJCOztBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE87Ozs7Ozs7Ozs7O3NHQVdBLGtCQUFpQlosR0FBakIsRUFBK0JDLEdBQS9CO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUU0Q0QsR0FBRyxDQUFD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QkFBQUEsR0FBRyxDQUFDTyxJQUFKLENBQVM7QUFBRWEsb0JBQUFBLElBQUksRUFBRTtBQUFSLG1CQUFUO0FBQ0EsaUJBSEQsQ0FHRSxPQUFPRyxHQUFQLEVBQVk7QUFDYmYsa0JBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjYyxHQUFkO0FBQ0F2QixrQkFBQUEsR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkgsSUFBaEIsQ0FBcUI7QUFBRUksb0JBQUFBLE9BQU8sRUFBRTtBQUFYLG1CQUFyQjtBQUNBOztBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE87Ozs7Ozs7Ozs7OztlQVdjLElBQUliLGNBQUosRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBnZXRSZXBvc2l0b3J5IH0gZnJvbSAndHlwZW9ybSc7XG5pbXBvcnQgeyBjcmVhdGVQYXNzd29yZCwgY29tcGFyZVBhc3N3b3JkIH0gZnJvbSAnLi4vdXRpbHMvcGFzc3dvcmQnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL2VudGl0eS9Vc2VyJztcblxuY2xhc3MgVXNlckNvbnRyb2xsZXIge1xuXHRhc3luYyBnZXRVc2VyKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBpZCA9IHJlcS5zZXNzaW9uLnVzZXJJZDtcblx0XHRcdGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRSZXBvc2l0b3J5KFVzZXIpLmZpbmRPbmUoaWQpO1xuXHRcdFx0cmVzLnNlbmQodXNlcik7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGVycik7XG5cdFx0XHRyZXMuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2U6ICdTZXJ2ZXIgZXJyb3InIH0pO1xuXHRcdH1cblx0fVxuXG5cdGFzeW5jIGNyZWF0ZVVzZXIocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkOiBfcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xuXHRcdFx0Y29uc3QgcGFzc3dvcmQgPSBhd2FpdCBjcmVhdGVQYXNzd29yZChfcGFzc3dvcmQpO1xuXHRcdFx0Y29uc3QgbmV3VXNlciA9IGdldFJlcG9zaXRvcnkoVXNlcikuY3JlYXRlKHtcblx0XHRcdFx0dXNlcm5hbWUsXG5cdFx0XHRcdHBhc3N3b3JkLFxuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCBzYXZlZFVzZXIgPSBhd2FpdCBnZXRSZXBvc2l0b3J5KFVzZXIpLnNhdmUobmV3VXNlcik7XG5cdFx0XHRyZXEuc2Vzc2lvbi51c2VySWQgPSBzYXZlZFVzZXIuaWQ7XG5cdFx0XHRyZXMuc2VuZCh7IGRhdGE6IHNhdmVkVXNlciB9KTtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcblx0XHRcdHJlcy5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZTogJ1NlcnZlciBlcnJvcicgfSk7XG5cdFx0fVxuXHR9XG5cblx0YXN5bmMgbG9naW5Vc2VyKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XG5cdFx0XHRjb25zdCB1c2VyID0gYXdhaXQgZ2V0UmVwb3NpdG9yeShVc2VyKS5maW5kT25lKHtcblx0XHRcdFx0dXNlcm5hbWU6IHVzZXJuYW1lLFxuXHRcdFx0fSk7XG5cdFx0XHRpZiAoIXVzZXIpIHtcblx0XHRcdFx0cmVzLnN0YXR1cyg0MDEpLnNlbmQoe1xuXHRcdFx0XHRcdG1lc3NhZ2U6ICdObyB1c2VyIGZvdW5kIHdpdGggdGhpcyB1c2VybmFtZS4gUGxlYXNlIHRyeSBhZ2Fpbi4nLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcGFzc3dvcmRJc1ZhbGlkID0gYXdhaXQgY29tcGFyZVBhc3N3b3JkKHVzZXIucGFzc3dvcmQsIHBhc3N3b3JkKTtcblx0XHRcdGlmICghcGFzc3dvcmRJc1ZhbGlkKSB7XG5cdFx0XHRcdHJlc1xuXHRcdFx0XHRcdC5zdGF0dXMoNDAxKVxuXHRcdFx0XHRcdC5zZW5kKHsgbWVzc2FnZTogJ0luY29ycmVjdCBwYXNzd29yZC4gUGxlYXNlIHRyeSBhZ2Fpbi4nIH0pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRyZXEuc2Vzc2lvbi51c2VySWQgPSB1c2VyLmlkO1xuXHRcdFx0cmVzLnNlbmQoeyBkYXRhOiB1c2VyIH0pO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihlcnIpO1xuXHRcdFx0cmVzLnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlOiAnU2VydmVyIGVycm9yJyB9KTtcblx0XHR9XG5cdH1cblxuXHRhc3luYyBsb2dvdXRVc2VyKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHRyeSB7XG5cdFx0XHRyZXEuc2Vzc2lvbi5kZXN0cm95KChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG5cdFx0XHRyZXMuc2VuZCh7IGRhdGE6ICdVc2VyIGxvZ2dlZCBvdXQnIH0pO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihlcnIpO1xuXHRcdFx0cmVzLnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlOiAnU2VydmVyIGVycm9yJyB9KTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJDb250cm9sbGVyKCk7XG4iXX0=