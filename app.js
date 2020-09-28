(function(){
'use strict';
angular.module('Aapp',[]).controller('Acont',checkApp);

function checkApp($scope,$filter){
$scope.msg="";
$scope.name="";

$scope.check=function(){
if($scope.name=="")
$scope.msg="Please enter data first!"
else{
var va=check2($scope.name);
$scope.msg=va;
}
}
function check2(n){
var x=n.split(",");
if(x.length<=3)
return "Enjoy!";
else if(x.length>3)
return "Too much!";
}
}


})();