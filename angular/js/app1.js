app.controller('ctrl1',['$scope','$http',function($scope,$http){
	$scope.add = function(){
		console.log('123');
		
		
	};
	$http.get('template/index.json').success(function(data){
		$scope.names = data;
	});
	
}])
