@ECHO OFF

ECHO "babel"
call babel -d tmp .\src\ui-codemirror.directive.js .\src\ui-codemirror.module.js

ECHO "ng-annotate"
call ng-annotate -ar tmp\src\ui-codemirror.directive.js -o tmp\ui-codemirror.directive.js
call ng-annotate -ar tmp\src\ui-codemirror.module.js -o tmp\ui-codemirror.module.js

ECHO "bundle"
call browserify .\tmp\ui-codemirror.module.js -o .\dist\ui-codemirror.js -x angular

ECHO "minify"
call uglifyjs dist\ui-codemirror.js -o dist\ui-codemirror.min.js -c -m