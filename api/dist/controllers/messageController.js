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

var _Message = require("../entity/Message");

var MessageController = /*#__PURE__*/function () {
  function MessageController() {
    (0, _classCallCheck2["default"])(this, MessageController);
  }

  (0, _createClass2["default"])(MessageController, [{
    key: "getMessages",
    value: function () {
      var _getMessages = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var userId, messages;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                userId = req.session.userId;

                if (userId) {
                  _context.next = 5;
                  break;
                }

                res.status(401).send({
                  message: 'Unable to get messages. No user exists on this session'
                });
                return _context.abrupt("return");

              case 5:
                _context.next = 7;
                return (0, _typeorm.getRepository)(_Message.Message).find({
                  where: {
                    userId: userId
                  }
                });

              case 7:
                messages = _context.sent;
                res.send({
                  data: messages
                });
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);
                res.status(500).send({
                  message: 'Server error'
                });

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 11]]);
      }));

      function getMessages(_x, _x2) {
        return _getMessages.apply(this, arguments);
      }

      return getMessages;
    }()
  }, {
    key: "createMessage",
    value: function () {
      var _createMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var userId, message, newMessage, savedMessage;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                userId = req.session.userId;
                message = req.body.message;

                if (userId) {
                  _context2.next = 6;
                  break;
                }

                res.status(401).send({
                  message: 'Unable to create message. No user exists on this session'
                });
                return _context2.abrupt("return");

              case 6:
                newMessage = (0, _typeorm.getRepository)(_Message.Message).create({
                  userId: userId,
                  message: message
                });
                _context2.next = 9;
                return (0, _typeorm.getRepository)(_Message.Message).save(newMessage);

              case 9:
                savedMessage = _context2.sent;
                res.send({
                  data: savedMessage
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

      function createMessage(_x3, _x4) {
        return _createMessage.apply(this, arguments);
      }

      return createMessage;
    }()
  }, {
    key: "updateMessage",
    value: function () {
      var _updateMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var id, message, updatedMessage;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                id = req.params.id;
                message = req.body.message;
                _context3.next = 5;
                return (0, _typeorm.getRepository)(_Message.Message).update(id, {
                  message: message
                });

              case 5:
                updatedMessage = _context3.sent;
                res.send({
                  data: updatedMessage
                });
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                res.status(500).send({
                  message: 'Server error'
                });

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 9]]);
      }));

      function updateMessage(_x5, _x6) {
        return _updateMessage.apply(this, arguments);
      }

      return updateMessage;
    }()
  }, {
    key: "deleteMessage",
    value: function () {
      var _deleteMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var id, deletedMessage;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                id = req.params.id;
                _context4.next = 4;
                return (0, _typeorm.getRepository)(_Message.Message)["delete"](id);

              case 4:
                deletedMessage = _context4.sent;
                res.send({
                  data: deletedMessage
                });
                _context4.next = 11;
                break;

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);
                res.status(500).send({
                  message: 'Server error'
                });

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 8]]);
      }));

      function deleteMessage(_x7, _x8) {
        return _deleteMessage.apply(this, arguments);
      }

      return deleteMessage;
    }()
  }]);
  return MessageController;
}();

var _default = new MessageController();

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9tZXNzYWdlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJNZXNzYWdlQ29udHJvbGxlciIsInJlcSIsInJlcyIsInVzZXJJZCIsInNlc3Npb24iLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSIsIk1lc3NhZ2UiLCJmaW5kIiwid2hlcmUiLCJtZXNzYWdlcyIsImRhdGEiLCJjb25zb2xlIiwiZXJyb3IiLCJib2R5IiwibmV3TWVzc2FnZSIsImNyZWF0ZSIsInNhdmUiLCJzYXZlZE1lc3NhZ2UiLCJpZCIsInBhcmFtcyIsInVwZGF0ZSIsInVwZGF0ZWRNZXNzYWdlIiwiZGVsZXRlZE1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0lBRU1BLGlCOzs7Ozs7Ozt1R0FDTCxpQkFBa0JDLEdBQWxCLEVBQWdDQyxHQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVVQyxnQkFBQUEsTUFGVixHQUVxQkYsR0FBRyxDQUFDRyxPQUZ6QixDQUVVRCxNQUZWOztBQUFBLG9CQUdPQSxNQUhQO0FBQUE7QUFBQTtBQUFBOztBQUlHRCxnQkFBQUEsR0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDcEJDLGtCQUFBQSxPQUFPLEVBQUU7QUFEVyxpQkFBckI7QUFKSDs7QUFBQTtBQUFBO0FBQUEsdUJBU3lCLDRCQUFjQyxnQkFBZCxFQUF1QkMsSUFBdkIsQ0FBNEI7QUFDbERDLGtCQUFBQSxLQUFLLEVBQUU7QUFDTlAsb0JBQUFBLE1BQU0sRUFBRUE7QUFERjtBQUQyQyxpQkFBNUIsQ0FUekI7O0FBQUE7QUFTUVEsZ0JBQUFBLFFBVFI7QUFjRVQsZ0JBQUFBLEdBQUcsQ0FBQ0ksSUFBSixDQUFTO0FBQUVNLGtCQUFBQSxJQUFJLEVBQUVEO0FBQVIsaUJBQVQ7QUFkRjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWdCRUUsZ0JBQUFBLE9BQU8sQ0FB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QUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsa0JBQUFBLE9BQU8sRUFBRTtBQUFYLGlCQUFyQjs7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPOzs7Ozs7Ozs7Ozs7ZUFXYyxJQUFJUCxpQkFBSixFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IGdldFJlcG9zaXRvcnkgfSBmcm9tICd0eXBlb3JtJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9lbnRpdHkvTWVzc2FnZSc7XG5cbmNsYXNzIE1lc3NhZ2VDb250cm9sbGVyIHtcblx0YXN5bmMgZ2V0TWVzc2FnZXMocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHsgdXNlcklkIH0gPSByZXEuc2Vzc2lvbjtcblx0XHRcdGlmICghdXNlcklkKSB7XG5cdFx0XHRcdHJlcy5zdGF0dXMoNDAxKS5zZW5kKHtcblx0XHRcdFx0XHRtZXNzYWdlOiAnVW5hYmxlIHRvIGdldCBtZXNzYWdlcy4gTm8gdXNlciBleGlzdHMgb24gdGhpcyBzZXNzaW9uJyxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IG1lc3NhZ2VzID0gYXdhaXQgZ2V0UmVwb3NpdG9yeShNZXNzYWdlKS5maW5kKHtcblx0XHRcdFx0d2hlcmU6IHtcblx0XHRcdFx0XHR1c2VySWQ6IHVzZXJJZCxcblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXHRcdFx0cmVzLnNlbmQoeyBkYXRhOiBtZXNzYWdlcyB9KTtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcblx0XHRcdHJlcy5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZTogJ1NlcnZlciBlcnJvcicgfSk7XG5cdFx0fVxuXHR9XG5cblx0YXN5bmMgY3JlYXRlTWVzc2FnZShyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgeyB1c2VySWQgfSA9IHJlcS5zZXNzaW9uO1xuXHRcdFx0Y29uc3QgeyBtZXNzYWdlIH0gPSByZXEuYm9keTtcblx0XHRcdGlmICghdXNlcklkKSB7XG5cdFx0XHRcdHJlcy5zdGF0dXMoNDAxKS5zZW5kKHtcblx0XHRcdFx0XHRtZXNzYWdlOiAnVW5hYmxlIHRvIGNyZWF0ZSBtZXNzYWdlLiBObyB1c2VyIGV4aXN0cyBvbiB0aGlzIHNlc3Npb24nLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbmV3TWVzc2FnZSA9IGdldFJlcG9zaXRvcnkoTWVzc2FnZSkuY3JlYXRlKHtcblx0XHRcdFx0dXNlcklkOiB1c2VySWQsXG5cdFx0XHRcdG1lc3NhZ2U6IG1lc3NhZ2UsXG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IHNhdmVkTWVzc2FnZSA9IGF3YWl0IGdldFJlcG9zaXRvcnkoTWVzc2FnZSkuc2F2ZShuZXdNZXNzYWdlKTtcblx0XHRcdHJlcy5zZW5kKHsgZGF0YTogc2F2ZWRNZXNzYWdlIH0pO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihlcnIpO1xuXHRcdFx0cmVzLnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlOiAnU2VydmVyIGVycm9yJyB9KTtcblx0XHR9XG5cdH1cblxuXHRhc3luYyB1cGRhdGVNZXNzYWdlKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xuXHRcdFx0Y29uc3QgeyBtZXNzYWdlIH0gPSByZXEuYm9keTtcblx0XHRcdGNvbnN0IHVwZGF0ZWRNZXNzYWdlID0gYXdhaXQgZ2V0UmVwb3NpdG9yeShNZXNzYWdlKS51cGRhdGUoaWQsIHtcblx0XHRcdFx0bWVzc2FnZSxcblx0XHRcdH0pO1xuXHRcdFx0cmVzLnNlbmQoeyBkYXRhOiB1cGRhdGVkTWVzc2FnZSB9KTtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdHJlcy5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZTogJ1NlcnZlciBlcnJvcicgfSk7XG5cdFx0fVxuXHR9XG5cblx0YXN5bmMgZGVsZXRlTWVzc2FnZShyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcblx0XHRcdGNvbnN0IGRlbGV0ZWRNZXNzYWdlID0gYXdhaXQgZ2V0UmVwb3NpdG9yeShNZXNzYWdlKS5kZWxldGUoaWQpO1xuXHRcdFx0cmVzLnNlbmQoeyBkYXRhOiBkZWxldGVkTWVzc2FnZSB9KTtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdHJlcy5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZTogJ1NlcnZlciBlcnJvcicgfSk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBNZXNzYWdlQ29udHJvbGxlcigpO1xuIl19