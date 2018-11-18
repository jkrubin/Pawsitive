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
	}
	#scheduleButtons {
		justify-content: space-between;
		margin-bottom: 0px;
	}
	#scheduleButtons button {
		background-color: white;
		border: none;
		transition: 0.5s all;
		cursor: pointer;
		width: calc(100%/3);
		height: 25px;
	}
	#scheduleButtons button.selected {
		background-color: #FFCC00 !important;
		z-index: 2;
	}
</style>