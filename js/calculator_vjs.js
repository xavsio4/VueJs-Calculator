/*
 * date: 21/11/2017
 * author: x.Villamuera
*/
var app = new Vue({

	el:'#calculator',

	data: {
		numberList : ['0','1','2','3','4','5','6','7','8','9','+','*','/','-','.'],
		current:''
	},
	//lets listen to any key pressed on keyboard using the created step in view lifecycle
	created: function () {
            window.addEventListener('keypress', this.kpress)
    },
	
	methods: {
		
		kpress: function(event)
		{
			
			let key='';
			//console.log((event.type));
			if (event.type === 'keypress')
				{ key = String.fromCharCode(event.keyCode); }
			else //then click
				{ key = event.target.innerText; }

			//console.log((key)); 

			if(this.numberList.indexOf(key) > -1)
			{
		        app.current += key;
		    } 
		    else if (key==='c' || key==='C')
		    		{ this.clear();}
		      else if (key==='=')
		    		{this.equal();}
			    else if (key===',')
			    	{ app.current += '.';} //accept comma			

		}, //kpress
		clear: function(e) {this.current='';}, //clear
		equal: function(e) {app.current = eval(app.current);}, //eval
	} //methods

});// calculator