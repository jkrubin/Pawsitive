<template>
	<div class="innerPage">
		<!-- <h1 id="pageTitle">Schedule Page</h1> -->
		<div id="daySelected">
			<h3>{{ returnDayOfWeek() }}</h3>
			<md-input type="date" name="date" :value="daySelected"></md-input>
		</div>
		<ScheduleNav></ScheduleNav>
		<md-table>
			<md-table-toolbar>
				<h2>Morning - {{ morningDogs[0].length }} Dogs</h2>
			</md-table-toolbar>
			<md-table-row>
				<md-table-head>Dog Name</md-table-head>
				<md-table-head>Dog Pickup</md-table-head>
				<md-table-head>Dog Dropoff</md-table-head>
				<md-table-head>Dog Address</md-table-head>
				<md-table-head>Dog Info</md-table-head>
			</md-table-row>
			<md-table-row v-for="(dog, index) in morningDogs[0]" :index="index" :class="{ picked_up: morningDogs[0][index]['picked_up'], dropped_off: morningDogs[0][index]['dropped_off'] }">
				<md-table-cell>{{ dog.name }}</md-table-cell>
				<md-table-cell>
					<input v-if="morningDogs[0][index]['dropped_off'] == false" type="checkbox" v-model="morningDogs[0][index]['picked_up']"></input>
				</md-table-cell>
				<md-table-cell>
					<input v-if="morningDogs[0][index]['picked_up'] == true"  type="checkbox" v-model="morningDogs[0][index]['dropped_off']"></input>
				</md-table-cell>
				<md-table-cell class="pin_icon">{{ dog.address }}</md-table-cell>
				<md-table-cell class="about_icon"></md-table-cell>
			</md-table-row>
		</md-table>
		<!-- <br><br> -->
		<md-table>
			<md-table-toolbar>
				<h2>Afternoon - {{ afternoonDogs[0].length }} Dogs</h2>
			</md-table-toolbar>
			<md-table-row>
				<md-table-head>Dog Name</md-table-head>
				<md-table-head>Dog Pickup</md-table-head>
				<md-table-head>Dog Dropoff</md-table-head>
				<md-table-head>Dog Address</md-table-head>
				<md-table-head>Dog Info</md-table-head>
			</md-table-row>
			<md-table-row v-for="(dog, index) in afternoonDogs[0]" :index="index" :class="{ picked_up: afternoonDogs[0][index]['picked_up'], dropped_off: afternoonDogs[0][index]['dropped_off'] }">
				<md-table-cell>{{ dog.name }}</md-table-cell>
				<md-table-cell>
					<input v-if="afternoonDogs[0][index]['dropped_off'] == false" type="checkbox" v-model="afternoonDogs[0][index]['picked_up']"></input>
				</md-table-cell>
				<md-table-cell>
					<input v-if="afternoonDogs[0][index]['picked_up'] == true" type="checkbox" v-model="afternoonDogs[0][index]['dropped_off']"></input>
				</md-table-cell>
				<md-table-cell class="pin_icon">{{ dog.address }}</md-table-cell>
				<md-table-cell class="about_icon"></md-table-cell>
			</md-table-row>
		</md-table>
		<Nav></Nav>
	</div>
</template>

<script>
	import Nav from "../components/Nav.vue"
	import ScheduleNav from "../components/ScheduleNav.vue"
	export default {
		name: "DailySchedule",
		components: {
			"Nav": Nav,
			"ScheduleNav": ScheduleNav
		},
		beforeMount(){
			this.morningDogs = []
			this.afternoonDogs = []
			this.morningDogs.push( this.filterDogs(1) )
			this.afternoonDogs.push( this.filterDogs(2) )
		},
		methods: {
			getDate(){
				let date = new Date();
				return date;
			},
			getDay(){
				return this.getDate().getDay();
			},
			formatDate(){
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
			},
			returnDayOfWeek(){
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
			},
			filterDogs(am_pm){
				let arr = [],
					dogs = this.dogs;

				console.log("dogs "+am_pm+" :"+dogs)

				for (var i = 0; i < dogs.length; i++) {
					if (dogs[i]["am_pm"] === am_pm || dogs[i]["am_pm"] === 0){
						let cloneObj = JSON.parse(JSON.stringify(dogs[i]))
						arr.push(cloneObj);
					}
				}

				return arr;
			}
			// checkStatus(am_pm, index, pickup_dropoff){
			// 	switch (am_pm){
			// 		case "morning":
			// 		pickup_dropoff == pickup 
			// 	}
			// }
		},
		data() {
			return {
				daySelected: this.formatDate(),
				morningDogs: [],
				afternoonDogs: [],
				dogs: [
					{
						name: "Vasco",
						img: "",
						owner: ["Janet", "name 2"],
						email: ["email 1", "email 2"],
						phone: [4157305793],
						address: "949 Sanchez St.",
						zip: 94114,
						door_code: ["1991"],
						repeating_schedule: [1,2,3,4,5],
						am_pm: 0,
						skip_days: [],
						add_days: [],
						picked_up: false,
						dropped_off: false
					},
					{
						name: "Rochi",
						img: "",
						owner: ["Claire", "name 2"],
						email: ["email 1", "email 2"],
						phone: [6144036822],
						address: "152 Day St.",
						zip: 94131,
						door_code: [],
						repeating_schedule: [1,2,3,4,5],
						am_pm: 2,
						skip_days: [],
						add_days: [],
						picked_up: false,
						dropped_off: false
					},
					{
						name: "Han",
						img: "",
						owner: ["Melanie", "name 2"],
						email: ["email 1", "email 2"],
						address: "142 Swiss Ave.",
						phone: [9253210510],
						zip: 94131,
						door_code: ["1991"],
						repeating_schedule: [1,2,3,4],
						am_pm: 1,
						skip_days: [],
						add_days: [],
						picked_up: false,
						dropped_off: false
					},
					{
						name: "Leia",
						img: "",
						owner: ["Melanie", "name 2"],
						email: ["email 1", "email 2"],
						address: "142 Swiss Ave.",
						phone: [9253210510],
						zip: 94131,
						door_code: ["1991"],
						repeating_schedule: [1,2,3,4],
						am_pm: 1,
						skip_days: [],
						add_days: [],
						picked_up: false,
						dropped_off: false
					},
					{
						name: "Miski",
						img: "",
						owner: ["Karina", "name 2"],
						email: ["email 1", "email 2"],
						address: "2022 15th St.",
						phone: [4153145399],
						zip: 94131,
						door_code: ["1991"],
						repeating_schedule: [1,2,3,4,5],
						am_pm: 0,
						skip_days: [],
						add_days: [],
						picked_up: false,
						dropped_off: false
					},
					{
						name: "Tango",
						img: "",
						owner: ["Liz"],
						email: [""],
						address: "538 Valley St.",
						phone: [9253233550],
						zip: 94131,
						door_code: ["0615"],
						repeating_schedule: [2,4],
						am_pm: 1,
						skip_days: [],
						add_days: [],
						picked_up: false,
						dropped_off: false
					},
					{
						name: "Dylan",
						img: "",
						owner: ["Becky"],
						email: [""],
						address: "? Richland St.",
						phone: [2069926267],
						zip: 94131,
						door_code: [],
						repeating_schedule: [2,3,4],
						am_pm: 2,
						skip_days: [],
						add_days: [],
						picked_up: false,
						dropped_off: false
					},
					{
						name: "Francois",
						img: "",
						owner: ["Bridget"],
						email: [""],
						address: "120 Ellsworth St.",
						phone: [4157136492],
						zip: 94131,
						door_code: ["618"],
						repeating_schedule: [1,2,3,4,5],
						am_pm: 2,
						skip_days: [],
						add_days: [],
						picked_up: false,
						dropped_off: false
					},
					{
						name: "Florence",
						img: "",
						owner: ["Bridget"],
						email: [""],
						address: "120 Ellsworth St.",
						phone: [4157136492],
						zip: 94131,
						door_code: ["618"],
						repeating_schedule: [1,2,3,4,5],
						am_pm: 2,
						skip_days: [],
						add_days: [],
						picked_up: false,
						dropped_off: false
					},	
					{
						name: "Bowie",
						img: "",
						owner: ["Aaron"],
						email: [""],
						address: "1214 Bowdoin St.",
						phone: [8083580355],
						zip: 94134,
						door_code: ["1967", "6567"],
						repeating_schedule: [1,2,3,4,5],
						am_pm: 2,
						skip_days: [],
						add_days: [],
						picked_up: false,
						dropped_off: false
					}													
				]
			}
		}
	}
</script>

<style>
	#pageTitle {
		text-align: center;
	}
	.md-toolbar h2 {
		text-align: center;
		margin: auto;
	}
	#daySelected {
		text-align: center;
		margin-top: 50px;
		margin-bottom: 25px;
	}
	#daySelected input {
		margin: auto;
		display: block;
		text-align: center;
	}
	.md-table-cell {
		text-align: center;
	}
	.md-table {
		background-color: white;
	}
	.picked_up {
		background-color: #FFCC00 !important;
	}
	.dropped_off {
		background-color: #00a0ff !important;
	}
</style>