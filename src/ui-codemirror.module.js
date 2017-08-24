import angular from 'angular';

import {UiCodemirrorDirective} from './ui-codemirror.directive';
import {UiCodemirrorMergeDirective} from "./ui-codemirror-merge.directive";

let ngModule = angular.module('ui.codemirror', []);

ngModule
  .constant('uiCodemirrorConfig', {})
  .directive('uiCodemirror', UiCodemirrorDirective)
  .directive('uiCodemirrorMerge', UiCodemirrorMergeDirective)

  .constant('uiCodemirrorMergeConfig', {});

let ngModuleName = ngModule.name;
export {ngModuleName as UiCodemirrorModule};