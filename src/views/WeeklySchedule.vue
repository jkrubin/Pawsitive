<template>
	<div class="innerPage">
		<div id="daySelected">
			<h3>{{ getDayOfWeek() }}</h3>
			<md-input type="date" name="date" :value="daySelected"></md-input>
		</div>
		<ScheduleNav></ScheduleNav>
		<div id="timeBoxContainer">
			<div v-for="(date, index) in getDateRange()" class="timeBoxInnerContainer">
				<div class="timeBox" :class="{ currentDate: isCurrentDate(index) }">
					<h3>{{ formatDate(date).substring(5) }}</h3>
					<hr>
					<h3>{{ getDayOfWeek(date) }}</h3>
				</div>
			</div>
		</div>
		<div id="dogContainer">
			<div v-for="index in 5" :key="index" class="dogInnerContainer">
				<h3>Mrn</h3>
				<div id="morningDogs" class="dogBoxContainer" :class="{ currentDate: isCurrentDate(index-1) }">
					<div class="dogBox">
						<h3>{{ getDogCountByDay($store.getters.getMorningDogs, index) }}</h3>
						<hr>
						<div v-for="dog in $store.getters.getMorningDogs">
							<h4>{{ filterDogsByDay(dog, index) }}</h4>
						</div>
					</div>
				</div>
				<h3>Aft</h3>
				<div id="afternoonDogs" class="dogBoxContainer" :class="{ currentDate: isCurrentDate(index-1) }">
					<div class="dogBox">
						<h3>{{ getDogCountByDay($store.getters.getAfternoonDogs, index) }}</h3>
						<hr>
						<div v-for="dog in $store.getters.getAfternoonDogs">
							<h4>{{ filterDogsByDay(dog, index) }}</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Nav menu='schedule'></Nav>
	</div>
</template>

<script>
	name: "WeeklySchedule"
	import ScheduleNav from "../components/ScheduleNav"
	import Nav from "../components/Nav"
	export default {
		components: {
			"ScheduleNav": ScheduleNav,
			"Nav": Nav
		},
		data(){
			return {
				daySelected: this.formatDate(this.getDate())
			}
		},
		methods: {
			getNewDate(offset){
				let newDate = this.getDate();
				console.log("newDate1: "+newDate);
				newDate.setDate(newDate.getDate() + offset);
				console.log("newDate2: "+newDate);
				return newDate;
			},
			getDate(){
				let date = new Date();
				return date;
			},
			getDay(){
				return this.getDate().getDay();
			},
			formatDate(date){
				console.log(date);
				let dateStr = date.toLocaleDateString();

				dateStr = dateStr.split("/");

				// Loop Through and Prefix with 0
				for (var i = 0; i < dateStr.length; i++) {
					if (dateStr[i].length <= 1){
						dateStr[i] = "0"+dateStr[i];
					}
				}

				// console.log(dateStr);
				return dateStr[2]+"-"+dateStr[0]+"-"+dateStr[1];
			},
			getDateRange(){
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
			filterDogsByDay(dog, dayInt){
				if (dog.repeating_schedule.includes(dayInt)) {
					return dog.name
				}
			},
			getDogCountByDay(dogArr, dayInt){
				let count = 0;
				for (var i = 0; i < dogArr.length; i++) {
					dogArr[i].repeating_schedule.includes(dayInt) ? count++ : false;
				}
				return count;
			},
			isCurrentDate(index){
				let i = index - 1;
				return this.getDay() == i ? true : false
			}
		}
	}
</script>

<style>
	#timeBoxContainer,
	#dogBoxContainer,
	#dogContainer {
		display: flex;
	}
	#dogContainer {
		background-color: white;
	}
	.dogBoxContainer {
		min-height: 280px;
	}
	.timeBox,
	.dogBox,
	.dogInnerContainer,
	.timeBoxInnerContainer {
		justify-content: space-between;
		margin: auto;
		text-align: center;
		margin-top: 0px;
	}
	.dogBox {
		flex-flow: column;
		flex-grow: 1;
	}
	.dogInnerContainer:nth-of-type(odd) .dogBox {
		background-color: #Fafafa;
	}
	.timebox hr {
		color: white;
		background-color: white;
	}
	#daySelected {
		display: flex;
		padding: 0 25%;
	}
	#daySelected input {
		justify-content: space-between;
		margin: auto;
		text-align: center;
	}
	.currentDate {
		background-color: #FFCC00 !important;
	}
</style>