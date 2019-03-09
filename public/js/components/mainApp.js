webpackJsonp([0],{

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(57);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = __webpack_require__(38);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(37);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(19);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(18);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(56);

var _axios = __webpack_require__(32);

var _axios2 = _interopRequireDefault(_axios);

var _ComposeSection = __webpack_require__(54);

var _ComposeSection2 = _interopRequireDefault(_ComposeSection);

var _Posts = __webpack_require__(55);

var _Posts2 = _interopRequireDefault(_Posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Baby = function (_Component) {
  (0, _inherits3.default)(Baby, _Component);

  function Baby() {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, Baby);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Baby.__proto__ || Object.getPrototypeOf(Baby)).call(this));

    _this.submitUserProfile = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var _this$props$routeProp, match, location, history, self;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props$routeProp = _this.props.routeProps, match = _this$props$routeProp.match, location = _this$props$routeProp.location, history = _this$props$routeProp.history;
              self = _this;


              _axios2.default.post('/api/profile/' + match.params.id, {
                baby_name: self.state.baby_name
                // gender: self.state.gender
              }).then(function (res) {
                console.log(res);
              });

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }));

    _this.handleChange = function (event) {
      var name = event.target.name;
      var value = event.target.type == 'checkbox' ? event.target.checked : event.target.value;

      _this.setState((0, _defineProperty3.default)({}, name, value), function () {
        console.log("Handlechange", _this.state);
      });
    };

    _this.state = {
      name: "Joe"

    };
    return _this;
  }

  (0, _createClass3.default)(Baby, [{
    key: 'componentWillMount',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var _props$routeProps, match, location, history, self, getUser;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _props$routeProps = this.props.routeProps, match = _props$routeProps.match, location = _props$routeProps.location, history = _props$routeProps.history;
                self = this;

                getUser = function () {
                  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                    var userProfile;
                    return _regenerator2.default.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.prev = 0;
                            _context2.next = 3;
                            return _axios2.default.get('/api/user/' + match.params.id);

                          case 3:
                            userProfile = _context2.sent;

                            console.log(userProfile);
                            self.setState({
                              initialData: self.props.initialData,
                              userProfile: userProfile.data.user[0],
                              following: userProfile.data.following
                            }, function () {
                              console.log("Profile");
                              console.log(self.state, "baby getUser");
                            });
                            _context2.next = 11;
                            break;

                          case 8:
                            _context2.prev = 8;
                            _context2.t0 = _context2['catch'](0);

                            console.log(_context2.t0);

                          case 11:
                          case 'end':
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this, [[0, 8]]);
                  }));

                  return function getUser() {
                    return _ref3.apply(this, arguments);
                  };
                }();

                getUser();

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function componentWillMount() {
        return _ref2.apply(this, arguments);
      }

      return componentWillMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      if (this.state.userProfile == undefined) {
        return _react2.default.createElement(
          'div',
          null,
          'Loading'
        );
      } else {
        var _state$userProfile = this.state.userProfile,
            baby_name = _state$userProfile.baby_name,
            baby_img = _state$userProfile.baby_img;

        console.log("baby render", this.state);
        return _react2.default.createElement(
          'div',
          { className: 'content-area profile-page' },
          _react2.default.createElement(
            'div',
            { className: 'info info-panel' },
            _react2.default.createElement(
              'label',
              null,
              'Baby\'s Name'
            ),
            _react2.default.createElement(
              'h1',
              null,
              '' + baby_name
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'form',
                null,
                _react2.default.createElement('input', { className: 'form_title', type: 'text', value: this.state.baby_name, name: 'baby_name', placeholder: 'Full Name Here', onChange: this.handleChange }),
                _react2.default.createElement('input', { className: 'form_title', type: 'text', name: 'gender', placeholder: 'Gender', onChange: this.handleChange }),
                _react2.default.createElement(
                  'button',
                  { type: 'button', onClick: this.submitUserProfile },
                  'Save'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'user-img' },
            _react2.default.createElement('img', { className: 'photo-reduce', src: baby_img })
          )
        );
      }
    }
  }]);
  return Baby;
}(_react.Component);

exports.default = Baby;

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(57);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = __webpack_require__(38);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(37);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(19);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(18);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(56);

var _axios = __webpack_require__(32);

var _axios2 = _interopRequireDefault(_axios);

var _ComposeSection = __webpack_require__(54);

var _ComposeSection2 = _interopRequireDefault(_ComposeSection);

var _Posts = __webpack_require__(55);

var _Posts2 = _interopRequireDefault(_Posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home() {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, Home);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.refreshData = function (res) {
      _this.setState({
        BabyPost: res.data
      }, function () {
        console.log(_this.state, "refreshData has fired & stored, get back intialData of BabyPost");
      });
    };

    _this.refreshPost = function (res) {
      _this.setState({
        NewBabyPostCycle: res.data
      }, function () {
        console.log(_this.state, "refreshPost Fired off, getting back NewBabyPostCyle");
      });
    };

    _this.submitForm = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var self, url, fd, config, post;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // console.log(this.state, "THIS STATE ------")
              self = _this;

              if (_this.state.post_img) {
                _context.next = 6;
                break;
              }

              _context.next = 4;
              return _axios2.default.post('/api/post', {
                post_title: self.state.post_title,
                content: self.state.post_content,
                user_id: self.props.initialData.userInfo.id,
                type: 'text'

              }).then(_this.refreshPost).then(function () {
                console.log("______________");
                console.log(self.props.initialData, "AFTER POST");
              });

            case 4:
              _context.next = 14;
              break;

            case 6:
              // Where the POST Request will be sent to for AXIOS
              url = 'https://api.cloudinary.com/v1_1/kevpro/image/upload';

              // Getting the file ready to be sent to be uploaded to Cloundinary with AXIOS 

              fd = new FormData();

              fd.append("upload_preset", "xkuuysjv");
              fd.append("file", _this.state.post_img);

              // Allows us to send files & text
              config = {
                headers: { "content-type": "multipart/form-data" }

                // Send files cloundinary
              };
              _context.next = 13;
              return _axios2.default.post(url, fd, config)
              // Once the url comes back start another AXIOS Post request to PostController to save the data and the url to the database 
              .then(function (res) {
                var answer = res.data;
                var url = answer.secure_url;
                console.log(url);
                _axios2.default.post('/api/post', {
                  post_title: self.state.post_title,
                  content: self.state.post_content,
                  user_id: self.props.initialData.userInfo.id,
                  type: "image",
                  image_url: url
                });
              }).then(_this.refreshPost).then(function () {
                console.log("______________");
                console.log(self.props.initialData, "AFTER POST with IMG");
              });

            case 13:
              post = _context.sent;

            case 14:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }));

    _this.handleChange = function (event) {
      var name = event.target.name;
      var value = event.target.type == 'checkbox' ? event.target.checked : event.target.value;

      _this.setState((0, _defineProperty3.default)({}, name, value), function () {
        console.log("Handlechange", _this.state);
      });
    };

    _this.handleFile = function (event) {
      var picName = event.target.name;
      var file = event.target.files[0];
      _this.setState((0, _defineProperty3.default)({}, picName, file));
    };

    _this.state = {
      name: "Kevin",
      NewBabyPostCycle: ""

    };
    return _this;
  }

  (0, _createClass3.default)(Home, [{
    key: 'componentWillMount',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var self, GotGetData;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                self = this;
                _context2.next = 3;
                return _axios2.default.get('/api/initialApp').then(self.refreshData);

              case 3:
                GotGetData = _context2.sent;

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentWillMount() {
        return _ref2.apply(this, arguments);
      }

      return componentWillMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      console.log(this.state, "Compose & Post Section");
      console.log("________________");
      if (this.state.BabyPost == undefined) {
        return _react2.default.createElement(
          'div',
          null,
          'Loading'
        );
      } else {
        var user_img = this.state.BabyPost.userInfo.profile_img;
        return _react2.default.createElement(
          'div',
          { className: 'content-area' },
          _react2.default.createElement(
            'section',
            { className: 'compose-section' },
            _react2.default.createElement('input', { className: 'post_title', type: 'text', name: 'post_title', onChange: this.handleChange, placeholder: 'Title' }),
            _react2.default.createElement('textarea', { name: 'post_content', id: true, cols: 80, rows: 8, defaultValue: "", onChange: this.handleChange, placeholder: 'Whats happenning' }),
            _react2.default.createElement('input', { type: 'file', name: 'post_img', style: { display: 'none' }, ref: function ref(fileInput) {
                return _this3.fileInput = fileInput;
              }, onChange: this.handleFile }),
            _react2.default.createElement('div', { className: 'user-img', style: { background: 'url(\'' + user_img + '\')', backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover" } }),
            _react2.default.createElement(
              'div',
              { className: 'buttons' },
              _react2.default.createElement(
                'div',
                { className: 'button photo-btn' },
                _react2.default.createElement('i', { className: 'fas fa-camera-retro', name: 'post_img', onClick: function onClick() {
                    return _this3.fileInput.click();
                  }, onChange: this.handleFile })
              ),
              _react2.default.createElement(
                'div',
                { className: 'button send-btn', onClick: this.submitForm },
                _react2.default.createElement('i', { className: 'fas fa-paper-plane' })
              )
            )
          ),
          _react2.default.createElement(_Posts2.default, { BabyData: this.state.BabyPost == undefined ? 'loading' : this.state.BabyPost, refreshPost: this.state.NewBabyPostCycle })
        );
      }
    }
  }]);
  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(19);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(18);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(32);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LeftMenu = function (_Component) {
  (0, _inherits3.default)(LeftMenu, _Component);

  function LeftMenu() {
    (0, _classCallCheck3.default)(this, LeftMenu);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LeftMenu.__proto__ || Object.getPrototypeOf(LeftMenu)).call(this));

    _this.clickedDropdown = function () {
      _this.setState({
        dropdown: !_this.state.dropdown
      });
    };

    _this.state = {
      dropdown: false
    };
    return _this;
  }

  (0, _createClass3.default)(LeftMenu, [{
    key: "render",
    value: function render() {

      if (this.props.initialData.userInfo == undefined) {
        return _react2.default.createElement(
          "div",
          null,
          "Loading"
        );
      } else {
        var name = this.props.initialData.userInfo.name;

        var user_id = this.props.initialData.userInfo.id;
        console.log(this.props, "LEftMenu Will Mount");
        console.log("________________");

        return _react2.default.createElement(
          "section",
          { id: "left-menu" },
          _react2.default.createElement(
            "div",
            { className: "account-dropdown" },
            _react2.default.createElement(
              "div",
              { className: "logo" },
              _react2.default.createElement(
                "a",
                { href: "/" },
                _react2.default.createElement("i", { className: "fab fa-typo3" })
              ),
              " "
            ),
            _react2.default.createElement(
              "div",
              { className: "name" },
              _react2.default.createElement(
                "a",
                { href: "/" },
                "" + name
              ),
              " "
            ),
            _react2.default.createElement(
              "div",
              { className: "dropdown " + (this.state.dropdown ? 'active' : '') + " " },
              _react2.default.createElement(
                "nav",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "/account" },
                  "account"
                ),
                _react2.default.createElement(
                  "a",
                  { href: "/logout" },
                  "logout"
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "groups" },
            _react2.default.createElement(
              "div",
              { className: "group" },
              _react2.default.createElement(
                "div",
                { className: "title" },
                "My Account"
              ),
              _react2.default.createElement(
                "ul",
                null,
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "/logout" },
                    "Logout"
                  ),
                  " "
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "/profile/" + user_id },
                    "Profile"
                  ),
                  " "
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "/mybaby/" + user_id },
                    "My Baby"
                  ),
                  " "
                )
              )
            )
          )
        );
      }
    }
  }]);
  return LeftMenu;
}(_react.Component);

exports.default = LeftMenu;

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(19);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(18);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadingComp = function (_Component) {
  (0, _inherits3.default)(LoadingComp, _Component);

  function LoadingComp() {
    (0, _classCallCheck3.default)(this, LoadingComp);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LoadingComp.__proto__ || Object.getPrototypeOf(LoadingComp)).call(this));

    _this.state = {
      dropdown: false
    };
    return _this;
  }

  (0, _createClass3.default)(LoadingComp, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "loading-comp", className: this.props.initialData == 'loading' ? 'active' : '' },
        _react2.default.createElement(
          "div",
          { className: "loading-icon" },
          _react2.default.createElement(
            "div",
            { className: "lds-css ng-scope", style: { width: '200px', height: '200px' } },
            _react2.default.createElement(
              "div",
              { style: { width: '100%', height: '100%' }, className: "lds-rolling" },
              _react2.default.createElement("div", null)
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "loading-text" },
          "Loading!"
        )
      );
    }
  }]);
  return LoadingComp;
}(_react.Component);

exports.default = LoadingComp;

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(19);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(18);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Messenger = function (_Component) {
  (0, _inherits3.default)(Messenger, _Component);

  function Messenger() {
    (0, _classCallCheck3.default)(this, Messenger);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Messenger.__proto__ || Object.getPrototypeOf(Messenger)).call(this));

    _this.clickedBtn = function () {
      console.log("swag");
    };

    _this.state = {
      name: "Joe"
    };
    return _this;
  }

  (0, _createClass3.default)(Messenger, [{
    key: "render",
    value: function render() {

      if (this.props.initialData.userInfo == undefined) {
        return _react2.default.createElement(
          "div",
          null,
          "Loading"
        );
      } else {
        var baby_name = this.props.initialData.userInfo.baby_name;
        var relationship = this.props.initialData.userInfo.relationship;
        var baby_img = this.props.initialData.userInfo.baby_img;

        console.log(this.props, "Right baby Rendering");
        console.log("________________");

        return _react2.default.createElement(
          "div",
          { className: "content-area baby-panel" },
          _react2.default.createElement(
            "div",
            { className: "info" },
            _react2.default.createElement(
              "label",
              null,
              "Baby Name"
            ),
            _react2.default.createElement(
              "h1",
              null,
              "" + baby_name
            ),
            _react2.default.createElement(
              "label",
              null,
              "Realationship with baby"
            ),
            _react2.default.createElement(
              "h1",
              null,
              "" + relationship
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "user-img" },
            _react2.default.createElement("img", { src: baby_img })
          )
        );
      }
    }
  }]);
  return Messenger;
}(_react.Component);

exports.default = Messenger;

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(57);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = __webpack_require__(38);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(37);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(19);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(18);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(56);

var _axios = __webpack_require__(32);

var _axios2 = _interopRequireDefault(_axios);

var _ComposeSection = __webpack_require__(54);

var _ComposeSection2 = _interopRequireDefault(_ComposeSection);

var _Posts = __webpack_require__(55);

var _Posts2 = _interopRequireDefault(_Posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Profile = function (_Component) {
  (0, _inherits3.default)(Profile, _Component);

  function Profile() {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, Profile);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this));

    _this.submitUserProfile = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var _this$props$routeProp, match, location, history, self;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props$routeProp = _this.props.routeProps, match = _this$props$routeProp.match, location = _this$props$routeProp.location, history = _this$props$routeProp.history;
              self = _this;


              _axios2.default.post('/api/profile/' + match.params.id, {
                name: _this.state.name,
                relationship: _this.state.relationship
                // relationship: this.state.relationship_title

              });
              // .then(function (res) {
              //   console.log(res);
              // })

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }));

    _this.handleChange = function (event) {
      var name = event.target.name;
      var value = event.target.type == 'checkbox' ? event.target.checked : event.target.value;

      _this.setState((0, _defineProperty3.default)({}, name, value));
      //  () => {
      //   console.log("Handlechange", this.state)
      // })
    };

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(Profile, [{
    key: 'componentWillMount',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var _props$routeProps, match, location, history, self, getUser;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _props$routeProps = this.props.routeProps, match = _props$routeProps.match, location = _props$routeProps.location, history = _props$routeProps.history;
                self = this;


                console.log(this.props, "profile will mount");

                getUser = function () {
                  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                    var userProfile;
                    return _regenerator2.default.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.prev = 0;
                            _context2.next = 3;
                            return _axios2.default.get('/api/user/' + match.params.id);

                          case 3:
                            userProfile = _context2.sent;

                            console.log(userProfile);
                            self.setState({
                              initialData: self.props.initialData,
                              userProfile: userProfile.data.user[0],
                              following: userProfile.data.following
                            }, function () {
                              console.log("Profile");
                              console.log(self.state);
                            });
                            _context2.next = 11;
                            break;

                          case 8:
                            _context2.prev = 8;
                            _context2.t0 = _context2['catch'](0);

                            console.log(_context2.t0);

                          case 11:
                          case 'end':
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this, [[0, 8]]);
                  }));

                  return function getUser() {
                    return _ref3.apply(this, arguments);
                  };
                }();

                getUser();

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function componentWillMount() {
        return _ref2.apply(this, arguments);
      }

      return componentWillMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      if (this.state.userProfile == undefined) {
        return _react2.default.createElement(
          'div',
          null,
          'Loading'
        );
      } else {
        var _state$userProfile = this.state.userProfile,
            name = _state$userProfile.name,
            profile_img = _state$userProfile.profile_img,
            relationship = _state$userProfile.relationship;

        return _react2.default.createElement(
          'div',
          { className: 'content-area profile-page' },
          _react2.default.createElement(
            'div',
            { className: 'info info-panel' },
            _react2.default.createElement(
              'label',
              null,
              'Full Name'
            ),
            _react2.default.createElement(
              'h1',
              null,
              '' + name
            ),
            _react2.default.createElement(
              'label',
              null,
              'Realationship with baby'
            ),
            _react2.default.createElement(
              'h1',
              null,
              '' + relationship
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'form',
                null,
                _react2.default.createElement('input', { className: 'form_title', type: 'text', value: this.state.name, name: 'name', placeholder: 'Full Name Here', onChange: this.handleChange }),
                _react2.default.createElement('input', { className: 'form_title', type: 'text', value: this.state.relationship, name: 'relationship', placeholder: 'Relationship with the baby', onChange: this.handleChange }),
                _react2.default.createElement('input', { className: 'form_title', type: 'email', name: 'email_title', placeholder: 'Email' }),
                _react2.default.createElement('input', { className: 'form_title', type: 'password', name: 'password_title', placeholder: 'Password' }),
                _react2.default.createElement(
                  'button',
                  { type: 'button', onClick: this.submitUserProfile },
                  'Update'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'user-img' },
            _react2.default.createElement('img', { src: profile_img })
          )
        );
      }
    }
  }]);
  return Profile;
}(_react.Component);

exports.default = Profile;

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(19);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(18);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchHeader = function (_Component) {
  (0, _inherits3.default)(SearchHeader, _Component);

  function SearchHeader() {
    (0, _classCallCheck3.default)(this, SearchHeader);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SearchHeader.__proto__ || Object.getPrototypeOf(SearchHeader)).call(this));

    _this.clickedBtn = function () {
      console.log("swag");
    };

    _this.state = {
      name: "Joe"
    };
    return _this;
  }

  (0, _createClass3.default)(SearchHeader, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "search-header" },
        _react2.default.createElement(
          "div",
          { className: "search-box" },
          _react2.default.createElement("input", { type: "text", name: true, id: true }),
          _react2.default.createElement(
            "div",
            { className: "icon-section" },
            _react2.default.createElement(
              "div",
              { className: "noti" },
              _react2.default.createElement("i", { className: "fas fa-bell" }),
              _react2.default.createElement(
                "div",
                { className: "noti-number active  " },
                "3"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "comments" },
              _react2.default.createElement("i", { className: "fas fa-comment" }),
              _react2.default.createElement(
                "div",
                { className: "noti-number active" },
                "3"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "user" },
              _react2.default.createElement("i", { className: "fas fa-user" }),
              _react2.default.createElement(
                "div",
                { className: "noti-number active" },
                "3"
              )
            )
          )
        )
      );
    }
  }]);
  return SearchHeader;
}(_react.Component);

exports.default = SearchHeader;

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(38);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(37);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(19);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(18);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(56);

var _axios = __webpack_require__(32);

var _axios2 = _interopRequireDefault(_axios);

var _Home = __webpack_require__(185);

var _Home2 = _interopRequireDefault(_Home);

var _Profile = __webpack_require__(189);

var _Profile2 = _interopRequireDefault(_Profile);

var _Baby = __webpack_require__(184);

var _Baby2 = _interopRequireDefault(_Baby);

var _LeftMenu = __webpack_require__(186);

var _LeftMenu2 = _interopRequireDefault(_LeftMenu);

var _Messenger = __webpack_require__(188);

var _Messenger2 = _interopRequireDefault(_Messenger);

var _SearchHeader = __webpack_require__(190);

var _SearchHeader2 = _interopRequireDefault(_SearchHeader);

var _ComposeSection = __webpack_require__(54);

var _ComposeSection2 = _interopRequireDefault(_ComposeSection);

var _Posts = __webpack_require__(55);

var _Posts2 = _interopRequireDefault(_Posts);

var _LoadingComp = __webpack_require__(187);

var _LoadingComp2 = _interopRequireDefault(_LoadingComp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout() {
    (0, _classCallCheck3.default)(this, Layout);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.GrabData = function (initialData) {
      _this.setState({
        initialData: initialData.data
      }, function () {
        console.log(_this.state, "index InitialData console state");
      });
    };

    _this.state = {
      name: "Joe"

    };
    return _this;
  }

  (0, _createClass3.default)(Layout, [{
    key: 'componentWillMount',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var self, getInitialData;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                self = this;

                getInitialData = function () {
                  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                    var initialData;
                    return _regenerator2.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return _axios2.default.get('/api/initialApp').then(self.GrabData);

                          case 3:
                            initialData = _context.sent;
                            _context.next = 9;
                            break;

                          case 6:
                            _context.prev = 6;
                            _context.t0 = _context['catch'](0);

                            console.log(_context.t0);

                          case 9:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee, this, [[0, 6]]);
                  }));

                  return function getInitialData() {
                    return _ref2.apply(this, arguments);
                  };
                }();

                getInitialData();

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentWillMount() {
        return _ref.apply(this, arguments);
      }

      return componentWillMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      console.log(this.state.initialData, "render index");
      console.log("________________");
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          { className: 'app-container home-page' },
          _react2.default.createElement(_LoadingComp2.default, { initialData: this.state.initialData == undefined ? 'loading' : this.state.initialData }),
          _react2.default.createElement(_LeftMenu2.default, { initialData: this.state.initialData == undefined ? 'loading' : this.state.initialData }),
          _react2.default.createElement(
            'section',
            { id: 'content-container' },
            _react2.default.createElement(_SearchHeader2.default, null),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: function component(props) {
                return _react2.default.createElement(_Home2.default, { routeProps: props, initialData: _this2.state.initialData == undefined ? 'loading' : _this2.state.initialData });
              } }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/profile/:id', component: function component(props) {
                return _react2.default.createElement(_Profile2.default, { routeProps: props, initialData: _this2.state.initialData == undefined ? 'loading' : _this2.state.initialData });
              } }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/mybaby/:id', component: function component(props) {
                return _react2.default.createElement(_Baby2.default, { routeProps: props, initialData: _this2.state.initialData == undefined ? 'loading' : _this2.state.initialData });
              } })
          ),
          _react2.default.createElement(_Messenger2.default, { initialData: this.state.initialData == undefined ? 'loading' : this.state.initialData })
        )
      );
    }
  }]);
  return Layout;
}(_react.Component);

var app = document.getElementById("app");

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(57);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = __webpack_require__(38);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(37);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(19);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(18);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(32);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComposeSection = function (_Component) {
  (0, _inherits3.default)(ComposeSection, _Component);

  function ComposeSection() {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, ComposeSection);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ComposeSection.__proto__ || Object.getPrototypeOf(ComposeSection)).call(this));

    _this.submitForm = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var self, url, fd, config, post;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // console.log(this.state, "THIS STATE ------")
              self = _this;

              if (_this.state.post_img) {
                _context.next = 5;
                break;
              }

              _axios2.default.post('/api/post', {
                post_title: self.state.post_title,
                content: self.state.post_content,
                user_id: self.props.initialData.userInfo.id,
                type: 'text'

              }).then(function () {
                console.log("______________");
                console.log(self.props.initialData, "AFTER POST");
              });
              _context.next = 13;
              break;

            case 5:
              // Where the POST Request will be sent to for AXIOS
              url = 'https://api.cloudinary.com/v1_1/kevpro/image/upload';

              // Getting the file ready to be sent to be uploaded to Cloundinary with AXIOS 

              fd = new FormData();

              fd.append("upload_preset", "xkuuysjv");
              fd.append("file", _this.state.post_img);

              // Allows us to send files & text
              config = {
                headers: { "content-type": "multipart/form-data" }

                // Send files cloundinary
              };
              _context.next = 12;
              return _axios2.default.post(url, fd, config)
              // Once the url comes back start another AXIOS Post request to PostController to save the data and the url to the database 
              .then(function (res) {
                var answer = res.data;
                var url = answer.secure_url;
                console.log(url);
                _axios2.default.post('/api/post', {
                  post_title: self.state.post_title,
                  content: self.state.post_content,
                  user_id: self.props.initialData.userInfo.id,
                  type: "image",
                  image_url: url
                });
              });

            case 12:
              post = _context.sent;

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }));

    _this.handleChange = function (event) {
      var name = event.target.name;
      var value = event.target.type == 'checkbox' ? event.target.checked : event.target.value;

      _this.setState((0, _defineProperty3.default)({}, name, value), function () {
        console.log("Handlechange", _this.state);
      });
    };

    _this.handleFile = function (event) {
      var picName = event.target.name;
      var file = event.target.files[0];
      _this.setState((0, _defineProperty3.default)({}, picName, file));
    };

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(ComposeSection, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      console.log(this.props, "compose rendering");
      console.log("________________");
      if (this.props.initialData.userInfo == undefined) {
        return _react2.default.createElement(
          "div",
          null,
          "Loading"
        );
      } else {
        var user_img = this.props.initialData.userInfo.profile_img;
        return _react2.default.createElement(
          "section",
          { className: "compose-section" },
          _react2.default.createElement("input", { className: "post_title", type: "text", name: "post_title", onChange: this.handleChange, placeholder: "Title" }),
          _react2.default.createElement("textarea", { name: "post_content", id: true, cols: 80, rows: 8, defaultValue: "", onChange: this.handleChange, placeholder: "Whats happenning" }),
          _react2.default.createElement("input", { type: "file", name: "post_img", style: { display: 'none' }, ref: function ref(fileInput) {
              return _this3.fileInput = fileInput;
            }, onChange: this.handleFile }),
          _react2.default.createElement("div", { className: "user-img", style: { background: "url('" + user_img + "')", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover" } }),
          _react2.default.createElement(
            "div",
            { className: "buttons" },
            _react2.default.createElement(
              "div",
              { className: "button photo-btn" },
              _react2.default.createElement("i", { className: "fas fa-camera-retro", name: "post_img", onClick: function onClick() {
                  return _this3.fileInput.click();
                }, onChange: this.handleFile })
            ),
            _react2.default.createElement(
              "div",
              { className: "button send-btn", onClick: this.submitForm },
              _react2.default.createElement("i", { className: "fas fa-paper-plane" })
            )
          )
        );
      }
    }
  }]);
  return ComposeSection;
}(_react.Component);

exports.default = ComposeSection;

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(38);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(37);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(19);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(18);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(32);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Posts = function (_Component) {
  (0, _inherits3.default)(Posts, _Component);

  function Posts() {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, Posts);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Posts.__proto__ || Object.getPrototypeOf(Posts)).call(this));

    _this.getPost = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var GotGetData;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _axios2.default.get('/api/initialApp').then(_this.setPost);

            case 2:
              GotGetData = _context.sent;

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }));

    _this.setPost = function (res) {
      _this.setState({
        BabyPost: res.data
      }, function () {
        console.log(_this.state, "setPost has fired & stored");
      });
    };

    _this.showLatestPosts = function () {

      var fire = console.log("Wait after SetPost");
      console.log(_this.state);

      if (_this.state.BabyPost == undefined) {
        return _react2.default.createElement(
          "div",
          null,
          "Loading"
        );
      } else {
        return _this.state.BabyPost.latestPosts.reverse().map(function (item, index) {
          var post = item.posts;
          var user = item.users;
          var postImg = item.posts.image_url;
          console.log("Post to html");

          return _react2.default.createElement(
            "div",
            { className: "update-container", key: index },
            _react2.default.createElement(
              "div",
              { className: "media" },
              _react2.default.createElement(
                "div",
                { className: "media__grey-container" },
                _react2.default.createElement(
                  "div",
                  { className: "author-info" },
                  _react2.default.createElement("a", { href: "#", className: "user-img", style: {
                      backgroundImage: "url('" + user.profile_img + "')"
                    } }),
                  _react2.default.createElement(
                    "div",
                    { className: "info" },
                    _react2.default.createElement(
                      "a",
                      { href: "/profile" },
                      "" + user.name
                    ),
                    " shared a ",
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      post.type == 'text' ? 'story' : 'image'
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "update-info" },
                  _react2.default.createElement(
                    "h3",
                    null,
                    post.title
                  ),
                  _react2.default.createElement(
                    "p",
                    null,
                    post.content
                  )
                )
              ),
              _react2.default.createElement("div", { className: "" + (post.type === 'text' ? 'story' : 'image'), style: { background: "url('" + postImg + "')", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover" } })
            ),
            _react2.default.createElement(
              "div",
              { className: "padding-container" },
              _react2.default.createElement(
                "div",
                { className: "grey-container" },
                _react2.default.createElement(
                  "div",
                  { className: "update-stats" },
                  _react2.default.createElement(
                    "div",
                    { className: "icon-section" },
                    _react2.default.createElement(
                      "div",
                      { className: "like-circle" },
                      _react2.default.createElement("i", { className: "fas fa-thumbs-up" })
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "other-users" },
                    "Chine Russell and 23 others liked update"
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "comments-stats" },
                    "4 comments"
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "compose-comments" },
                  _react2.default.createElement("textarea", { name: "name", id: true, cols: 80, rows: 8, defaultValue: "" }),
                  _react2.default.createElement(
                    "div",
                    { className: "buttons" },
                    _react2.default.createElement(
                      "div",
                      { className: "repost-button" },
                      _react2.default.createElement("i", { className: "fas fa-redo" })
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "like-button" },
                      _react2.default.createElement("i", { className: "fas fa-thumbs-up" })
                    )
                  )
                )
              )
            )
          );
        });
      }
    };

    _this.state = {
      name: "Post Componet"
    };
    return _this;
  }

  (0, _createClass3.default)(Posts, [{
    key: "componentWillMount",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var self, GotGetData;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                self = this;


                console.log("ComponetwillMount from Post.js");
                _context2.next = 4;
                return _axios2.default.get('/api/initialApp').then(self.setPost);

              case 4:
                GotGetData = _context2.sent;

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentWillMount() {
        return _ref2.apply(this, arguments);
      }

      return componentWillMount;
    }()
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      console.log("componentWillReceiveProps in Post.js");
      var refreshPost = this.props.refreshPost;

      if (props.refreshPost !== refreshPost) {
        this.getPost();
        console.log("they are not equal");
      } else {
        console.log("They are the same");
      }
    }
  }, {
    key: "render",
    value: function render() {
      console.log("Post Start");
      return _react2.default.createElement(
        "section",
        { id: "posts" },
        this.showLatestPosts()
      );
    }
  }]);
  return Posts;
}(_react.Component);

exports.default = Posts;

/***/ })

},[209]);