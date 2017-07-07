app.service('serviceCtrl',function($q){
	var service = {};
	service.move = function(name){
		console.log(name);
		console.log($q)
	};
	return service;
})