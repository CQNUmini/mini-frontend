"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/posts/createpost/createpost"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/posts/createpost/createpost.tsx":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/posts/createpost/createpost.tsx ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createpost; }
/* harmony export */ });
/* harmony import */ var E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/store */ "./src/store/store.ts");
/* harmony import */ var _store_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/request */ "./src/store/request.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);













function createpost() {
  var statusBarHeight = (0,_store_store__WEBPACK_IMPORTED_MODULE_3__["default"])(function (state) {
    return state.statusBarHeight;
  });
  var _useRequest = (0,_store_request__WEBPACK_IMPORTED_MODULE_4__["default"])(function (state) {
      return [state.requestUrl, state.setRequestUrl];
    }),
    _useRequest2 = (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useRequest, 2),
    requestUrl = _useRequest2[0],
    setRequestUrl = _useRequest2[1];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(['校园日常', '新生', '求助', '交友', '考研', '实习兼职']),
    _useState2 = (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
    tags = _useState2[0],
    setTags = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState4 = (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState3, 2),
    selectedTag = _useState4[0],
    setSelectedTag = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState5, 2),
    selectedImages = _useState6[0],
    setSelectedImages = _useState6[1];
  var titleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var contentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  // 处理话题选择逻辑
  function handleTagSelect(tag) {
    setSelectedTag(tag);
    // if (selectedTags.includes(tag)) {
    //   setSelectedTags(selectedTags.filter(t => t !== tag))
    // } else if (selectedTags.length < 2) {
    //   setSelectedTags([...selectedTags, tag])
    // } else {
    //   Taro.showToast({
    //     title: '最多选择两项',
    //     icon: 'none'
    //   })
    // }
  }

  // 处理图片上传
  function handleUploadClick() {
    return _handleUploadClick.apply(this, arguments);
  } // 处理图片删除
  function _handleUploadClick() {
    _handleUploadClick = (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/(0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().mark(function _callee() {
      var res;
      return (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            // 选择图片
            res = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().chooseImage({
              count: 9 - selectedImages.length,
              // 最多可以选择9张图片
              sourceType: ['album', 'camera'],
              sizeType: ['compressed'],
              success: function success(res) {
                var tempFilePaths = res.tempFilePaths;
                setSelectedImages([].concat((0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(selectedImages), (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(tempFilePaths)));
              }
            });
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _handleUploadClick.apply(this, arguments);
  }
  function handleDeleteClick(index) {
    var newImages = (0,E_dev_CQNU_Mini_Program_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(selectedImages);
    newImages.splice(index, 1);
    setSelectedImages(newImages);
  }

  // 发布帖子
  function handleSubmit() {
    if (titleRef.current && contentRef.current) {
      if (titleRef.current.value.length < 1 || contentRef.current.value.length < 5) {
        titleRef.current.placeholder = '请填写标题';
        contentRef.current.placeholder = '请填写正文，不少于5个字';
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
          title: '检查标题或正文',
          icon: 'error'
        });
        return;
      } else if (selectedTag === '' || selectedTag === undefined) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
          title: '请选择话题',
          icon: 'error'
        });
        return;
      }
      var title = titleRef.current.value;
      var content = contentRef.current.value;
      var tag = selectedTag;
      var images = selectedImages;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().request({
        url: requestUrl + '/v1/posts/',
        method: 'POST',
        data: {
          title: title,
          content: content,
          tag: tag
        },
        header: {
          authorization: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('token')
        },
        success: function success(res) {
          if (res.statusCode === 201) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '发布成功',
              icon: 'success'
            });
            // 1.5秒后返回，刷新首页
            setTimeout(function () {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateBack();
              pubsub_js__WEBPACK_IMPORTED_MODULE_2___default().publish('refreshPage');
            }, 1500);
          } else {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '发布失败',
              icon: 'none'
            });
          }
          ;
        }
      });
    }
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
    className: "createpost-wrapper",
    style: {
      paddingTop: statusBarHeight + 'px'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
      className: "createpost-header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: "createpost-header-back",
        onClick: function onClick() {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateBack();
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
        className: "createpost-header-title",
        children: "\u53D1\u5E03"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form", {
      className: "createpost-form",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Input, {
        ref: titleRef,
        className: "createpost-title",
        type: "text",
        name: "title",
        placeholder: "\u586B\u5199\u6807\u9898\u4F1A\u66F4\u53D7\u6B22\u8FCE\u54E6\uFF01"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("textarea", {
        ref: contentRef,
        className: "createpost-content",
        name: "content",
        placeholder: "\u6DFB\u52A0\u6B63\u6587\uFF0C\u4E0D\u5C11\u4E8E5\u4E2A\u5B57"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: "createpost-uploadPic-area",
        children: [selectedImages.map(function (image, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
            className: "createpost-selectedImage-wrapper",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              className: "createpost-selectedImage",
              src: image,
              alt: "Selected-".concat(index)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
              className: "createpost-delete-btn",
              onClick: function onClick() {
                return handleDeleteClick(index);
              },
              children: "\xD7"
            })]
          }, index);
        }), selectedImages.length < 9 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: "createpost-uploadPic-btn",
          onClick: handleUploadClick
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: "createpost-postTags",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
          children: "\u9009\u62E9\u8BDD\u9898*"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
          children: "\u8BDD\u9898\u51B3\u5B9A\u4E86\u4F60\u53D1\u5E03\u7684\u5185\u5BB9\u662F\u5426\u4F1A\u4F60\u6240\u671F\u671B\u7684\u540C\u5B66\u770B\u5230"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: "createpost-tags",
          children: tags.map(function (item, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
              className: "createpost-tag",
              onClick: function onClick() {
                return handleTagSelect(item);
              },
              style: {
                backgroundColor: selectedTag === item ? '#4E6AFF' : '#efefef',
                color: selectedTag === item ? '#fff' : '#8b8b8b'
              },
              children: item
            }, index);
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Button, {
        className: "createpost-submit",
        formType: "submit",
        onClick: handleSubmit,
        children: "\u53D1\u5E03"
      })]
    })]
  });
}

/***/ }),

/***/ "./src/pages/posts/createpost/createpost.tsx":
/*!***************************************************!*\
  !*** ./src/pages/posts/createpost/createpost.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_createpost_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./createpost.tsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/posts/createpost/createpost.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_createpost_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/posts/createpost/createpost', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_createpost_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/posts/createpost/createpost.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=createpost.js.map