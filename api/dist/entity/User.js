"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _typeorm = require("typeorm");

var _Message = require("./Message");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

var User = (_dec = (0, _typeorm.Entity)(), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)(), _dec3 = (0, _typeorm.Column)('text'), _dec4 = (0, _typeorm.Column)('varchar'), _dec5 = (0, _typeorm.OneToMany)(function () {
  return _Message.Message;
}, function (message) {
  return message.user;
}), _dec6 = (0, _typeorm.JoinColumn)(), _dec(_class = (_class2 = (_temp = function User() {
  (0, _classCallCheck2["default"])(this, User);
  (0, _initializerDefineProperty2["default"])(this, "id", _descriptor, this);
  (0, _initializerDefineProperty2["default"])(this, "username", _descriptor2, this);
  (0, _initializerDefineProperty2["default"])(this, "password", _descriptor3, this);
  (0, _initializerDefineProperty2["default"])(this, "message", _descriptor4, this);
}, _temp), (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "id", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "username", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "password", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "message", [_dec5, _dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.User = User;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdHkvVXNlci50cyJdLCJuYW1lcyI6WyJVc2VyIiwiTWVzc2FnZSIsIm1lc3NhZ2UiLCJ1c2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBT0E7Ozs7SUFHYUEsSSxXQURaLHNCLFVBRUMsc0MsVUFHQSxxQkFBTyxNQUFQLEMsVUFHQSxxQkFBTyxTQUFQLEMsVUFHQSx3QkFBVTtBQUFBLFNBQU1DLGdCQUFOO0FBQUEsQ0FBVixFQUF5QixVQUFDQyxPQUFEO0FBQUEsU0FBYUEsT0FBTyxDQUFDQyxJQUFyQjtBQUFBLENBQXpCLEMsVUFDQSwwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEVudGl0eSxcblx0Q29sdW1uLFxuXHRQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLFxuXHRKb2luQ29sdW1uLFxuXHRPbmVUb01hbnksXG59IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vTWVzc2FnZSc7XG5cbkBFbnRpdHkoKVxuZXhwb3J0IGNsYXNzIFVzZXIge1xuXHRAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG5cdGlkITogbnVtYmVyO1xuXG5cdEBDb2x1bW4oJ3RleHQnKVxuXHR1c2VybmFtZSE6IHN0cmluZztcblxuXHRAQ29sdW1uKCd2YXJjaGFyJylcblx0cGFzc3dvcmQhOiBzdHJpbmc7XG5cblx0QE9uZVRvTWFueSgoKSA9PiBNZXNzYWdlLCAobWVzc2FnZSkgPT4gbWVzc2FnZS51c2VyKVxuXHRASm9pbkNvbHVtbigpXG5cdG1lc3NhZ2U6IE1lc3NhZ2UgfCB1bmRlZmluZWQ7XG59XG4iXX0=