/**
 * Created by tomgrant on 24/11/2015.
 */
var calc = {
	status: 'Awesome',
	plus: function (a,b){
		return (
			console.log(this),
				console.log (a+b),
				console.log (arguments),
				console.log (this.status)

		)
	}
}

calc.plus(2,3);

