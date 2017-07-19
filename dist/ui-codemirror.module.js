'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UiCodemirrorModule = undefined;

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _uiCodemirror = require('./ui-codemirror.directive');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ngModule = _angular2.default.module('ui.codemirror', []);

ngModule.constant('uiCodemirrorConfig', {}).directive('uiCodemirror', _uiCodemirror.UiCodemirrorDirective);

var ngModuleName = ngModule.name;
exports.UiCodemirrorModule = ngModuleName;