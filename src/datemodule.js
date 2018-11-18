// export default {
	function getNewDate(offset){
		let newDate = this.getDate();
		newDate.setDate(newDate.getDate() + offset);
		return newDate;
	}
	function getDate(){
		let date = new Date();
		return date;
	}
	function getDay(){
		return this.getDate().getDay();
	}
	function formatDate(){
		let dateStr = this.getDate().toLocaleDateString();

		dateStr = dateStr.split("/");

		// Loop Through and Prefix with 0
		for (var i = 0; i < dateStr.length; i++) {
			if (dateStr[i].length <= 1){
				dateStr[i] = "0"+dateStr[i];
			}
		}

		// console.log(dateStr);
		return dateStr[2]+"-"+dateStr[0]+"-"+dateStr[1];
	}
	function getDateRange(){
		let date = this.getDate(),
			day = this.getDay(),
			arr = [];

		switch (day){
			case 1:
			arr[0] = date;
			arr[1] = this.getNewDate(1);
			arr[2] = this.getNewDate(2);
			arr[3] = this.getNewDate(3);
			arr[4] = this.getNewDate(4);
			break;
			case 2:
			arr[0] = this.getNewDate(-1);
			arr[1] = date;
			arr[2] = this.getNewDate(1);
			arr[3] = this.getNewDate(2);
			arr[4] = this.getNewDate(3);
			break;
			case 3:
			arr[0] = this.getNewDate(-2);
			arr[1] = this.getNewDate(-1);
			arr[2] = date;
			arr[3] = this.getNewDate(1);
			arr[4] = this.getNewDate(2);
			break;
			case 4:
			arr[0] = this.getNewDate(-3);
			arr[1] = this.getNewDate(-2);
			arr[2] = this.getNewDate(-1);
			arr[3] = date;
			arr[4] = this.getNewDate(1);
			break;
			case 5:
			arr[0] = this.getNewDate(-4);
			arr[1] = this.getNewDate(-3);
			arr[2] = this.getNewDate(-2);
			arr[3] = this.getNewDate(-1);					
			arr[4] = date;
			break;
		}

		console.log(arr);
		return arr;
	}
	function getDayOfWeek(){
		switch (this.getDay()){
			case 0:
			return "Sunday"
			break
			case 1:
			return "Monday"
			break
			case 2:
			return "Tuesday"
			break
			case 3:
			return "Wednesday"
			break
			case 4:
			return "Thursday"
			break
			case 5:
			return "Friday"
			break
			case 6:
			return "Saturday"
			break
		}
	}
	function getDayOfWeek(date){
		let str = "";
		date = date === undefined ? this.getDate() : date; 
		switch(date.getDay()){
			case 0:
			str = "Sunday";
			str = "SUN";
			break;
			case 1:
			str = "Monday";
			str = "MON";
			break;
			case 2:
			str = "Tuesday";
			str = "TUE";
			break;
			case 3:
			str = "Wednesday";
			str = "WED";
			break;
			case 4:
			str = "Thursday";
			str = "THU";
			break;
			case 5:
			str = "Friday";
			str = "FRI";
			break;
			case 6:
			str = "Saturday";
			str = "SAT";
			break;
		}
		return str;
	}
	function getDaytoIndex(day){
		switch(day){
			case "SUN":
			return 0;
			case "MON":
			return 1;
			case "TUE":
			return 2;
			case "WED":
			return 3;
			case "THU":
			return 4;
			case "FRI":
			return 5;
			case "SAT":
			return 6;
		}
	}
	function getMonth(){
		let d = new Date(),
			m = d.getMonth(),
			arr = [];

		console.log(d.getMonth());

		switch(m){
			case 0:
			arr[1] = "January";
			break;
			case 1:
			arr[1] = "February";
			break;
			case 2:
			arr[1] = "March";
			break;
			case 3:
			arr[1] = "April";
			break;
			case 4:
			arr[1] = "May";
			break;
			case 5:
			arr[1] = "June";
			break;
			case 6:
			arr[1] = "July";
			break;
			case 7:
			arr[1] = "August";
			break;
			case 8:
			arr[0] = 8;
			arr[1] = "September";
			break;
			case 9:
			arr[1] = "October";
			break;
			case 10:
			arr[1] = "November";
			break;
			case 11:
			arr[1] = "December";
			break;
		}
		arr[0] = m;
		return arr;
	}
	function getDaysInMonth(month, year) {
		// let date = new Date(year, month, 1),
		let date = new Date(),
			days = [];
		while (date.getMonth() === month) {
			days.push(new Date(date));
			date.setDate(date.getDate() + 1);
		}
		return days;
	}
	function isCurrentDay(day){
		let boolean = this.currDate.toLocaleDateString() == day.toLocaleDateString() ? true : false;

		return boolean;
	}
	function isCurrentDate(index){
		let i = index - 1;
		return this.getDay() == i ? true : false
	}

export default { getNewDate, getDate, getDay, getMonth, getDaytoIndex, getDateRange, getDaysInMonth, isCurrentDate, isCurrentDay, formatDate }