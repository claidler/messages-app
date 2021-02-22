"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.redisClient = void 0;

require("reflect-metadata");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

var _redis = _interopRequireDefault(require("redis"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _connectRedis = _interopRequireDefault(require("connect-redis"));

require("./db");

var _userRouter = _interopRequireDefault(require("./routes/userRouter"));

var _messageRouter = _interopRequireDefault(require("./routes/messageRouter"));

var port = process.env.PORT;

_dotenv["default"].config();

var RedisStore = (0, _connectRedis["default"])(_expressSession["default"]);

var redisClient = _redis["default"].createClient({
  host: process.env.REDIS_URL,
  port: 6380
});

exports.redisClient = redisClient;
var app = (0, _express["default"])();
var corsOptions = {
  origin: process.env.CORS_ORIGIN,
  credentials: true
};
var hour = 3600000;
app.use((0, _expressSession["default"])({
  name: 'userSession',
  store: new RedisStore({
    client: redisClient
  }),
  secret: 'oxehealth-secret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 8 * hour,
    sameSite: 'none'
  }
}));
app.use((0, _cors["default"])(corsOptions));
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_userRouter["default"]);
app.use(_messageRouter["default"]);
app.get('/', function (_, res) {
  res.json({
    message: 'Oxehealth server is running'
  });
});
var server = app.listen(port, function () {
  console.log("Oxehealth server listening at ".concat(port));
});
module.exports = server;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJwb3J0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJkb3RlbnYiLCJjb25maWciLCJSZWRpc1N0b3JlIiwic2Vzc2lvbiIsInJlZGlzQ2xpZW50IiwicmVkaXMiLCJjcmVhdGVDbGllbnQiLCJob3N0IiwiUkVESVNfVVJMIiwiYXBwIiwiY29yc09wdGlvbnMiLCJvcmlnaW4iLCJDT1JTX09SSUdJTiIsImNyZWRlbnRpYWxzIiwiaG91ciIsInVzZSIsIm5hbWUiLCJzdG9yZSIsImNsaWVudCIsInNlY3JldCIsInJlc2F2ZSIsInNhdmVVbmluaXRpYWxpemVkIiwiY29va2llIiwibWF4QWdlIiwic2FtZVNpdGUiLCJib2R5UGFyc2VyIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsInVzZXJSb3V0ZXIiLCJtZXNzYWdlUm91dGVyIiwiZ2V0IiwiXyIsInJlcyIsIm1lc3NhZ2UiLCJzZXJ2ZXIiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBekI7O0FBRUFDLG1CQUFPQyxNQUFQOztBQUVBLElBQU1DLFVBQVUsR0FBRyw4QkFBYUMsMEJBQWIsQ0FBbkI7O0FBRU8sSUFBTUMsV0FBVyxHQUFHQyxrQkFBTUMsWUFBTixDQUFtQjtBQUM3Q0MsRUFBQUEsSUFBSSxFQUFFVixPQUFPLENBQUNDLEdBQVIsQ0FBWVUsU0FEMkI7QUFFN0NaLEVBQUFBLElBQUksRUFBRTtBQUZ1QyxDQUFuQixDQUFwQjs7O0FBS1AsSUFBTWEsR0FBRyxHQUFHLDBCQUFaO0FBRUEsSUFBTUMsV0FBVyxHQUFHO0FBQ25CQyxFQUFBQSxNQUFNLEVBQUVkLE9BQU8sQ0FBQ0MsR0FBUixDQUFZYyxXQUREO0FBRW5CQyxFQUFBQSxXQUFXLEVBQUU7QUFGTSxDQUFwQjtBQUtBLElBQU1DLElBQUksR0FBRyxPQUFiO0FBQ0FMLEdBQUcsQ0FBQ00sR0FBSixDQUNDLGdDQUFRO0FBQ1BDLEVBQUFBLElBQUksRUFBRSxhQURDO0FBRVBDLEVBQUFBLEtBQUssRUFBRSxJQUFJZixVQUFKLENBQWU7QUFBRWdCLElBQUFBLE1BQU0sRUFBRWQ7QUFBVixHQUFmLENBRkE7QUFHUGUsRUFBQUEsTUFBTSxFQUFFLGtCQUhEO0FBSVBDLEVBQUFBLE1BQU0sRUFBRSxLQUpEO0FBS1BDLEVBQUFBLGlCQUFpQixFQUFFLElBTFo7QUFNUEMsRUFBQUEsTUFBTSxFQUFFO0FBQUVDLElBQUFBLE1BQU0sRUFBRSxJQUFJVCxJQUFkO0FBQW9CVSxJQUFBQSxRQUFRLEVBQUU7QUFBOUI7QUFORCxDQUFSLENBREQ7QUFXQWYsR0FBRyxDQUFDTSxHQUFKLENBQVEsc0JBQUtMLFdBQUwsQ0FBUjtBQUNBRCxHQUFHLENBQUNNLEdBQUosQ0FBUVUsdUJBQVdDLElBQVgsRUFBUjtBQUNBakIsR0FBRyxDQUFDTSxHQUFKLENBQVFVLHVCQUFXRSxVQUFYLENBQXNCO0FBQUVDLEVBQUFBLFFBQVEsRUFBRTtBQUFaLENBQXRCLENBQVI7QUFFQW5CLEdBQUcsQ0FBQ00sR0FBSixDQUFRYyxzQkFBUjtBQUNBcEIsR0FBRyxDQUFDTSxHQUFKLENBQVFlLHlCQUFSO0FBRUFyQixHQUFHLENBQUNzQixHQUFKLENBQVEsR0FBUixFQUFhLFVBQUNDLENBQUQsRUFBYUMsR0FBYixFQUErQjtBQUMzQ0EsRUFBQUEsR0FBRyxDQUFDUCxJQUFKLENBQVM7QUFBRVEsSUFBQUEsT0FBTyxFQUFFO0FBQVgsR0FBVDtBQUNBLENBRkQ7QUFJQSxJQUFNQyxNQUFNLEdBQUcxQixHQUFHLENBQUMyQixNQUFKLENBQVd4QyxJQUFYLEVBQWlCLFlBQU07QUFDckN5QyxFQUFBQSxPQUFPLENBQUNDLEdBQVIseUNBQTZDMUMsSUFBN0M7QUFDQSxDQUZjLENBQWY7QUFJQTJDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkwsTUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xuaW1wb3J0IGV4cHJlc3MsIHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52JztcbmltcG9ydCBjb3JzIGZyb20gJ2NvcnMnO1xuaW1wb3J0IHJlZGlzIGZyb20gJ3JlZGlzJztcbmltcG9ydCBzZXNzaW9uIGZyb20gJ2V4cHJlc3Mtc2Vzc2lvbic7XG5pbXBvcnQgY29ubmVjdFJlZGlzIGZyb20gJ2Nvbm5lY3QtcmVkaXMnO1xuaW1wb3J0ICcuL2RiJztcblxuaW1wb3J0IHVzZXJSb3V0ZXIgZnJvbSAnLi9yb3V0ZXMvdXNlclJvdXRlcic7XG5pbXBvcnQgbWVzc2FnZVJvdXRlciBmcm9tICcuL3JvdXRlcy9tZXNzYWdlUm91dGVyJztcblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQ7XG5cbmRvdGVudi5jb25maWcoKTtcblxuY29uc3QgUmVkaXNTdG9yZSA9IGNvbm5lY3RSZWRpcyhzZXNzaW9uKTtcblxuZXhwb3J0IGNvbnN0IHJlZGlzQ2xpZW50ID0gcmVkaXMuY3JlYXRlQ2xpZW50KHtcblx0aG9zdDogcHJvY2Vzcy5lbnYuUkVESVNfVVJMLFxuXHRwb3J0OiA2MzgwLFxufSk7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuY29uc3QgY29yc09wdGlvbnMgPSB7XG5cdG9yaWdpbjogcHJvY2Vzcy5lbnYuQ09SU19PUklHSU4sXG5cdGNyZWRlbnRpYWxzOiB0cnVlLFxufTtcblxuY29uc3QgaG91ciA9IDM2MDAwMDA7XG5hcHAudXNlKFxuXHRzZXNzaW9uKHtcblx0XHRuYW1lOiAndXNlclNlc3Npb24nLFxuXHRcdHN0b3JlOiBuZXcgUmVkaXNTdG9yZSh7IGNsaWVudDogcmVkaXNDbGllbnQgfSksXG5cdFx0c2VjcmV0OiAnb3hlaGVhbHRoLXNlY3JldCcsXG5cdFx0cmVzYXZlOiBmYWxzZSxcblx0XHRzYXZlVW5pbml0aWFsaXplZDogdHJ1ZSxcblx0XHRjb29raWU6IHsgbWF4QWdlOiA4ICogaG91ciwgc2FtZVNpdGU6ICdub25lJyB9LFxuXHR9KVxuKTtcblxuYXBwLnVzZShjb3JzKGNvcnNPcHRpb25zKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuXG5hcHAudXNlKHVzZXJSb3V0ZXIpO1xuYXBwLnVzZShtZXNzYWdlUm91dGVyKTtcblxuYXBwLmdldCgnLycsIChfOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cdHJlcy5qc29uKHsgbWVzc2FnZTogJ094ZWhlYWx0aCBzZXJ2ZXIgaXMgcnVubmluZycgfSk7XG59KTtcblxuY29uc3Qgc2VydmVyID0gYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG5cdGNvbnNvbGUubG9nKGBPeGVoZWFsdGggc2VydmVyIGxpc3RlbmluZyBhdCAke3BvcnR9YCk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzZXJ2ZXI7XG4iXX0=