<template>
	<div id="DailySchedule" class="innerPage">
		<div id="daySelected">
			<h3>{{ day }}</h3>
			<md-input type="date" name="date" :value="daySelected"></md-input>
		</div>
		<ScheduleNav></ScheduleNav>
		<md-table>
			<md-table-toolbar>
				<h2>Morning - {{ morningDogs.length }} Dogs</h2>
			</md-table-toolbar>
			<md-table-row>
				<md-table-head>Name</md-table-head>
				<md-table-head>Picked Up</md-table-head>
				<md-table-head>Dropped Off</md-table-head>
				<md-table-head>Address</md-table-head>
			</md-table-row>
			<md-table-row v-for="(dog, index) in morningDogs" :index="index" :class="{ picked_up: morningDogs[index]['picked_up'], dropped_off: morningDogs[index]['dropped_off'] }">
				<md-table-cell>{{ dog.name }}</md-table-cell>
				<md-table-cell>
					<input v-if="morningDogs[index]['dropped_off'] == false" type="checkbox" v-model="morningDogs[index]['picked_up']"></input>
				</md-table-cell>
				<md-table-cell>
					<input v-if="morningDogs[index]['picked_up'] == true"  type="checkbox" v-model="morningDogs[index]['dropped_off']"></input>
				</md-table-cell>
				<md-table-cell class="pin_icon">{{ dog.address }}</md-table-cell>
			</md-table-row>
		</md-table>
		<!-- <br><br> -->
		<md-table>
			<md-table-toolbar>
				<h2>Afternoon - {{ afternoonDogs.length }} Dogs</h2>
			</md-table-toolbar>
			<md-table-row>
				<md-table-head>Dog Name</md-table-head>
				<md-table-head>Dog Pickup</md-table-head>
				<md-table-head>Dog Dropoff</md-table-head>
				<md-table-head>Dog Address</md-table-head>
			</md-table-row>
			<md-table-row v-for="(dog, index) in afternoonDogs" :index="index" :class="{ picked_up: afternoonDogs[index]['picked_up'], dropped_off: afternoonDogs[index]['dropped_off'] }">
				<md-table-cell>{{ dog.name }}</md-table-cell>
				<md-table-cell>
					<input v-if="afternoonDogs[index]['dropped_off'] == false" type="checkbox" v-model="afternoonDogs[index]['picked_up']"></input>
				</md-table-cell>
				<md-table-cell>
					<input v-if="afternoonDogs[index]['picked_up'] == true" type="checkbox" v-model="afternoonDogs[index]['dropped_off']"></input>
				</md-table-cell>
				<md-table-cell class="pin_icon">{{ dog.address }}</md-table-cell>
			</md-table-row>
		</md-table>
		<Nav menu='schedule'></Nav>
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
			this.morningDogs = this.$store.getters.getMorningDogs,
			this.afternoonDogs = this.$store.getters.getAfternoonDogs
		},
		methods: {
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
			},
			getDate(){
				let date = new Date();
				return date;
			},
			getDay(){
				return this.getDate().getDay();
			},
			getDayOfWeek(){
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
			}
		},
		data() {
			return {
				date: new Date(),
				day: this.getDayOfWeek(this.date).substring(0, 3).toUpperCase(),
				daySelected: this.formatDate(),
				morningDogs: [],
				afternoonDogs: [],
				dogs: this.$store.getters.getAllDogs
			}
		}
	}
</script>

<style scoped>
	#pageTitle {
		text-align: center;
	}
	.md-toolbar h2 {
		text-align: center;
		margin: auto;
	}
	#daySelected {
		text-align: center;
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
	#DailySchedule table .md-table-row {
		height: 60px;
	}
	#DailySchedule .md-toolbar {
		background-color: #FFCC00 !important;
	}
	.picked_up {
		background-color: #FFCC00 !important;
	}
	.dropped_off {
		background-color: #00a0ff !important;
		color: white;
	}
</style>