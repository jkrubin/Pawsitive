<template>
	<div class="innerPage">
		<div id="daySelected">
			<h3>{{ getDayOfWeek(currDate) }}</h3>
			<md-input type="date" name="date" :value="daySelected"></md-input>
		</div>
		<ScheduleNav></ScheduleNav>
		<div id="monthSelected">
			<select v-model="monthSelected[0]" :value="monthSelected[1]">
				<option value="0">January</option>
				<option value="1">February</option>
				<option value="2">March</option>
				<option value="3">April</option>
				<option value="4">May</option>
				<option value="5">June</option>
				<option value="6">July</option>
				<option value="7">August</option>
				<option value="8">September</option>
				<option value="9">October</option>
				<option value="10">November</option>
				<option value="11">December</option>
			</select>
		</div>
		<div id="dayContainer">
			<div v-for="(day, index) in getDaysInMonth(currMonth)" class="dayInnerContainer">
				<div class="dogCountContainer" :class="{ currentDay: isCurrentDay(day) }">
					<div class="dayTxt">{{ getDayOfWeek(day) }}</div>
					<div class="dogCount" :class="{ hasDogs: getDogCountPerDay(day) }">{{ getDogCountPerDay(day) }}</div>

					<div class="dayNum">{{ (currMonth+1)+"/"+getDaysInMonth(currMonth)[index].getDate() }}</div>
				</div>
			</div>
		</div>
		<Nav menu='schedule'></Nav>
	</div>
</template>

<script>
	import ScheduleNav from "../components/ScheduleNav"
	import Nav from "../components/Nav"
	export default {
		name: "MonthlySchedule",
		components: {
			"ScheduleNav": ScheduleNav,
			"Nav": Nav
		},
		data(){
			return {
				monthSelected: this.getMonth(),
				currMonth: new Date().getMonth(),
				currYear: new Date().getYear(),
				currDate: new Date()
			}
		},
		methods: {
			getDaytoIndex(day){
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
			},
			getDogCountPerDay(day){
				return this.getDogCountByDay(this.$store.getters.getMorningDogs, this.getDaytoIndex(this.getDayOfWeek(day)));
			},
			getDogCountByDay(dogArr, dayInt){
				let count = 0;
				for (var i = 0; i < dogArr.length; i++) {
					dogArr[i].repeating_schedule.includes(dayInt) ? count++ : false;
				}
				return count;
			},
			getDayOfWeek(date){
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
			},
			getMonth(){
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
			},
			getDaysInMonth(month, year) {
				// let date = new Date(year, month, 1),
				let y = new Date().getFullYear(),
					m = new Date().getMonth(),
					date = new Date(y, m, 1),
					days = [];

				while (date.getMonth() === m) {
					days.push(new Date(date));
					date.setDate(date.getDate() + 1);
				}

				return days;
				console.log("days");
				console.log(days);
			},
			isCurrentDay(day){
				let boolean = this.currDate.toLocaleDateString() == day.toLocaleDateString() ? true : false;

				return boolean;
			}
		}
	}
</script>

<style>
	* {
		box-sizing: border-box;
	}
	.dogCount {
		border-radius: 50%;
		text-align: center;
		margin: auto;
		width: 20px;
	}
	.dogCount.hasDogs {
		background-color: #FFCC00;
	}
	.currentDay {
		background-color: #00a0ff;
	}
	#dayContainer {
		display: block;
		position: relative;
	}
	.dayInnerContainer {
		background-color: rgba(50,205,50,0.6);
		display: inline-block;
		width: 20%;
		text-align: center;
	}
	.dayInnerContainer:nth-of-type(even),
	.dayInnerContainer:nth-of-type(even) .dayTxt,
	.dayInnerContainer:nth-of-type(even) .dayNum  {
		background-color: white;
	}
	.dayInnerContainer:nth-of-type(odd),
	.dayInnerContainer:nth-of-type(odd) .dayTxt,
	.dayInnerContainer:nth-of-type(odd) .dayNum {
		background-color: #f6f6f6;
	}

	#monthSelected select {
		display: block;
		margin: auto;
		width: 100%;
		text-align: center;
	}
	#monthSelected select option {
		text-align: center;
	}
</style>