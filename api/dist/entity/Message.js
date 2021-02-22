"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _typeorm = require("typeorm");

var _User = require("./User");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

var Message = (_dec = (0, _typeorm.Entity)(), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)(), _dec3 = (0, _typeorm.Column)('text'), _dec4 = (0, _typeorm.Column)('int'), _dec5 = (0, _typeorm.ManyToOne)(function () {
  return _User.User;
}, function (user) {
  return user.message;
}), _dec6 = (0, _typeorm.JoinColumn)({
  name: 'userId'
}), _dec(_class = (_class2 = (_temp = function Message() {
  (0, _classCallCheck2["default"])(this, Message);
  (0, _initializerDefineProperty2["default"])(this, "id", _descriptor, this);
  (0, _initializerDefineProperty2["default"])(this, "message", _descriptor2, this);
  (0, _initializerDefineProperty2["default"])(this, "userId", _descriptor3, this);
  (0, _initializerDefineProperty2["default"])(this, "user", _descriptor4, this);
}, _temp), (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "id", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "message", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "userId", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "user", [_dec5, _dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.Message = Message;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdHkvTWVzc2FnZS50cyJdLCJuYW1lcyI6WyJNZXNzYWdlIiwiVXNlciIsInVzZXIiLCJtZXNzYWdlIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQU9BOzs7O0lBR2FBLE8sV0FEWixzQixVQUVDLHNDLFVBR0EscUJBQU8sTUFBUCxDLFVBR0EscUJBQU8sS0FBUCxDLFVBR0Esd0JBQVU7QUFBQSxTQUFNQyxVQUFOO0FBQUEsQ0FBVixFQUFzQixVQUFDQyxJQUFEO0FBQUEsU0FBVUEsSUFBSSxDQUFDQyxPQUFmO0FBQUEsQ0FBdEIsQyxVQUNBLHlCQUFXO0FBQUVDLEVBQUFBLElBQUksRUFBRTtBQUFSLENBQVgsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEVudGl0eSxcblx0Q29sdW1uLFxuXHRQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLFxuXHRNYW55VG9PbmUsXG5cdEpvaW5Db2x1bW4sXG59IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vVXNlcic7XG5cbkBFbnRpdHkoKVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2Uge1xuXHRAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG5cdGlkITogbnVtYmVyO1xuXG5cdEBDb2x1bW4oJ3RleHQnKVxuXHRtZXNzYWdlITogc3RyaW5nO1xuXG5cdEBDb2x1bW4oJ2ludCcpXG5cdHVzZXJJZCE6IG51bWJlcjtcblxuXHRATWFueVRvT25lKCgpID0+IFVzZXIsICh1c2VyKSA9PiB1c2VyLm1lc3NhZ2UpXG5cdEBKb2luQ29sdW1uKHsgbmFtZTogJ3VzZXJJZCcgfSlcblx0dXNlcjogVXNlciB8IHVuZGVmaW5lZDtcbn1cbiJdfQ==