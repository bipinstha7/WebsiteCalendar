window.onload = function(){
	var d = new Date();
	var month_name = ['January', 'February', 'March', 'April', 'May',
						'June', 'July', 'August', 'September', 'October',
						'November', 'December']
	var month = d.getMonth(); //0-11
	var year = d.getFullYear();
	var first_date = month_name[month] + " " + 1 +" " + year;
	var tmp = new Date(first_date).toDateString(); // mon dec 01 2016...
	var first_day = tmp.substring(0,3); // mon
	var day_name = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	var day_no = day_name.indexOf(first_date); // 1 coz monday is in 1 after 0(sun);
	var days = new Date(year, month+1, 0).getDate();// tue dec 20 2016 ...// 30
	var calender = get_calender(day_no, days);
	document.getElementById("calender-month-year").innerHTML
		 = month_name[month] + " " + year;
	document.getElementById("calender-dates").appendChild(calender);
}

function get_calender(day_no, days){
	var table = document.createElement('table');
	var tr = document.createElement('tr');

	//row for the day letter
	for(var c=0; c<7; c++){
		var td = document.createElement('td');
		td.innerHTML = "SMTWTFS"[c];
		tr.appendChild(td);
	}
	table.appendChild(tr);

	// create second row
	tr= document.createElement('tr');
	var c;
	for (c=0; c<7; c++){
		if(c== day_no){
			break;
		}
		var td = document.createElement('td');
		tr.innerHTML = "";
		tr.appendChild(td);
	}
	var count = 1;
	for(c=0; c<7;c++){
		var td = document.createElement('td');
		td.innerHTML = count;
		count++;
		tr.appendChild(td);
	}
	table.appendChild(tr);
	
	//rest of the rows
	for(var r=3; r<7;r++){
		tr = document.createElement('tr');
		for(var c=0; c<7;c++){
			if(count >days){
				table.appendChild(tr);
				return table;
			}
			var td = document.createElement('td');
			td.innerHTML = count;
			count++;
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
}
