@ECHO OFF

ECHO "babel"
call babel -d tmp .\src\ui-codemirror.directive.js .\src\ui-codemirror.module.js

ECHO "ng-annotate"
call ng-annotate -ar tmp\src\ui-codemirror.directive.js -o dist\ui-codemirror.directive.js
call ng-annotate -ar tmp\src\ui-codemirror.module.js -o dist\ui-codemirror.module.js