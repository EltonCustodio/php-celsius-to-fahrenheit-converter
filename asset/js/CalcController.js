var CalcController = {
	
	init: function() {
		CalcController.setForm();
	},
	
	setForm: function() {
		var form = document.querySelector('form');
		form.addEventListener('submit', function(event) {
			CalcController.calculate(form);
			//it is necessary to avoid form submition
			event.preventDefault();
		});
	},
	
	calculate: function(form) {
		var 
			celsius = parseFloat(form.celsius.value),
			result = 0;
		
		var callback = function(result) {
			CalcController.showResult(result);			
		};
		
		CalcController.showLoading(true);
		CalcService.getIndex(celsius, callback);
	},
	
	showResult: function(result) {
		var spanResult = document.querySelector('.result');
		spanResult.innerHTML = result.toFixed(2);
		CalcController.showLoading(false);
	},
	
	showLoading: function(isLoading) {
		document.querySelector('.label').innerHTML = isLoading ? 'loading...' : 'Convert Result'
	}

};

//initialization
CalcController.init();