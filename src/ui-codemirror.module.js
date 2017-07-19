import angular from 'angular';

import {UiCodemirrorDirective} from './ui-codemirror.directive';

let ngModule = angular.module('ui.codemirror', []);

ngModule
  .constant('uiCodemirrorConfig', {})
  .directive('uiCodemirror', UiCodemirrorDirective);

let ngModuleName = ngModule.name;
module.exports.UiCodemirrorModule = ngModuleName;