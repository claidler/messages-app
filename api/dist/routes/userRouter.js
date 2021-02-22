"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.userRouter = void 0;

var _express = require("express");

var _multer = _interopRequireDefault(require("multer"));

var _sessionCheck = require("../middleware/sessionCheck");

var _userController = _interopRequireDefault(require("../controllers/userController"));

var userRouter = (0, _express.Router)();
exports.userRouter = userRouter;
var upload = (0, _multer["default"])();
userRouter.get('/user', [_sessionCheck.sessionCheck], _userController["default"].getUser);
userRouter.post('/login', [upload.none()], _userController["default"].loginUser);
userRouter.get('/logout', _userController["default"].logoutUser);
userRouter.post('/user', [upload.none()], _userController["default"].createUser);
var _default = userRouter;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvdXNlclJvdXRlci50cyJdLCJuYW1lcyI6WyJ1c2VyUm91dGVyIiwidXBsb2FkIiwiZ2V0Iiwic2Vzc2lvbkNoZWNrIiwiVXNlckNvbnRyb2xsZXIiLCJnZXRVc2VyIiwicG9zdCIsIm5vbmUiLCJsb2dpblVzZXIiLCJsb2dvdXRVc2VyIiwiY3JlYXRlVXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRU8sSUFBTUEsVUFBVSxHQUFHLHNCQUFuQjs7QUFDUCxJQUFNQyxNQUFNLEdBQUcseUJBQWY7QUFFQUQsVUFBVSxDQUFDRSxHQUFYLENBQWUsT0FBZixFQUF3QixDQUFDQywwQkFBRCxDQUF4QixFQUF3Q0MsMkJBQWVDLE9BQXZEO0FBQ0FMLFVBQVUsQ0FBQ00sSUFBWCxDQUFnQixRQUFoQixFQUEwQixDQUFDTCxNQUFNLENBQUNNLElBQVAsRUFBRCxDQUExQixFQUEyQ0gsMkJBQWVJLFNBQTFEO0FBQ0FSLFVBQVUsQ0FBQ0UsR0FBWCxDQUFlLFNBQWYsRUFBMEJFLDJCQUFlSyxVQUF6QztBQUNBVCxVQUFVLENBQUNNLElBQVgsQ0FBZ0IsT0FBaEIsRUFBeUIsQ0FBQ0wsTUFBTSxDQUFDTSxJQUFQLEVBQUQsQ0FBekIsRUFBMENILDJCQUFlTSxVQUF6RDtlQUVlVixVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgbXVsdGVyIGZyb20gJ211bHRlcic7XG5pbXBvcnQgeyBzZXNzaW9uQ2hlY2sgfSBmcm9tICcuLi9taWRkbGV3YXJlL3Nlc3Npb25DaGVjayc7XG5pbXBvcnQgVXNlckNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvdXNlckNvbnRyb2xsZXInO1xuXG5leHBvcnQgY29uc3QgdXNlclJvdXRlciA9IFJvdXRlcigpO1xuY29uc3QgdXBsb2FkID0gbXVsdGVyKCk7XG5cbnVzZXJSb3V0ZXIuZ2V0KCcvdXNlcicsIFtzZXNzaW9uQ2hlY2tdLCBVc2VyQ29udHJvbGxlci5nZXRVc2VyKTtcbnVzZXJSb3V0ZXIucG9zdCgnL2xvZ2luJywgW3VwbG9hZC5ub25lKCldLCBVc2VyQ29udHJvbGxlci5sb2dpblVzZXIpO1xudXNlclJvdXRlci5nZXQoJy9sb2dvdXQnLCBVc2VyQ29udHJvbGxlci5sb2dvdXRVc2VyKTtcbnVzZXJSb3V0ZXIucG9zdCgnL3VzZXInLCBbdXBsb2FkLm5vbmUoKV0sIFVzZXJDb250cm9sbGVyLmNyZWF0ZVVzZXIpO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VyUm91dGVyO1xuIl19