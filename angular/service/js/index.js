app.controller('myctrl2',['$scope','serviceCtrl',function($scope,serviceCtrl){
	$scope.name = '尚亚昆';

	$scope.clic = function(){
		serviceCtrl.move('shangyakun');
	};
	console.log($scope)
}])
