<template>
	<div id="scheduleButtons">
		<button :class="{ selected: $route.name == 'DailySchedule' }" @click="$router.push({name: 'DailySchedule'})">Daily</button>
		<button :class="{ selected: $route.name == 'WeeklySchedule' }" @click="$router.push({name: 'WeeklySchedule'})">Weekly</button>
		<button :class="{ selected: $route.name == 'MonthlySchedule' }" @click="$router.push({name: 'MonthlySchedule'})">Monthly</button>
	</div>
</template>

<script>
	name: "ScheduleNav"
	export default {
		data(){
			return {}
		}
	}
</script>

<style>
	#scheduleButtons {
		margin: auto;
		display: flex;
		padding: 0 25%;
	}
	#scheduleButtons {
		justify-content: space-between;
		margin-bottom: 25px;
	}
	#scheduleButtons button {
		background-color: white;
		border: 1px solid black;
		border-radius: 5px;
		transform: scale(0.9);
		transition: 0.5s all;
		cursor: pointer;
	}
	#scheduleButtons button:hover {
		transform: scale(1.2);
	}
	#scheduleButtons button.selected {
		background-color: #FFCC00 !important;
		transform: scale(1.2);
	}
</style>