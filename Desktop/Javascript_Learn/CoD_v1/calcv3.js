/*function to get value type*/

function valueType() {

	if (redcos.checked){
		var manpower = prompt("Please enter how many people are involved in the current process", "10");
		var timespent = prompt("Please enter how many hours a week the process takes", "10");

			if (manpower != 0){
				var redcostotal = manpower*timespent
				document.write(redcostotal)
				}
		}

	else if (avocos.checked){
		var totalcostavoided = prompt("Please enter how much cost in total will be avoided", "10");
		var totalcosttime = prompt("Please enter when the cost will occur", "10.10.18");
			
			if (totalcostavoided != 0){
				var avocostotal = totalcostavoided
				document.write(avocostotal)
				}
		}
	else if (increv.checked){
		var totalrevenueincrease = prompt("Please enter how much revenue will increase per sales", "10");
		var howmanysalesperweek = prompt("Please enter how much you can sell per week", "10");

			if (totalrevenueincrease != 0){
				var increvtotal = totalrevenueincrease*howmanysalesperweek
				document.write(increvtotal)
				}
		}
		
	else if (prorev.checked){
		var totalrevenueprotected = prompt("Please enter how much revenue will be protected per week", "10");

			if (totalrevenueprotected != 0){
				var prorevtotal = totalrevenueprotected
				document.write(prorevtotal)
				}
		}

	else {
		console.log("Error");
		}
}

function showValue() {
	if (redcostotal!=0) {

	}

}