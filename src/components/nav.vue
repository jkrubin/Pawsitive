<template>
	<nav>
		<div class="navIconWrap" :class="{ selected: isSelected('schedule') }">
			<!-- <div id="scheduleIcon" class="icon"></div> -->
			<h3 @click="schedule()">Schedule</h3>
		</div>
		<div class="navIconWrap" :class="{ selected: isSelected('clients') }">
		<!-- 	<div id="clientsIcon" class="icon"></div> -->
			<h3 @click="clients()">Clients</h3>
		</div>
		<div class="navIconWrap" :class="{ selected: isSelected('billing') }">
			<!-- <div id="billingIcon" class="icon"></div> -->
			<h3 @click="billing()">Billing</h3>
		</div>
		<div class="navIconWrap" :class="{ selected: isSelected('settings') }">
			<!-- <div id="settingsIcon" class="icon"></div> -->
			<h3 @click="settings()">Settings</h3>
		</div>				
	</nav>
</template>

<script>
	export default {
		name: "Nav",
		methods: {
			schedule(){
				this.$router.push({name: "WeeklySchedule"});
			},
			clients(){
				this.$router.push({name: "Clients"});
			},
			billing(){
				this.$router.push({name: "Billing"});
			},
			settings(){
				this.$router.push({name: "Settings"});
			},
			isSelected(name){
				return this.menu == name ? true : false
			}
		},
		props: ["menu"]
	}
</script>

<style>
	nav {
		position: fixed;
		bottom: 0px;
		width: 100%;
		height: 30px;
		display: flex;
		z-index: 8;
		background-color: white;
		border-top: 1px solid  black;
	}
/*	.navIconWrap:nth-of-type(1){
		background-color: rgba(50,205,50,0.6);	
	}*/
	.navIconWrap {
		justify-content: space-between;
		width: 25%;
		cursor: pointer;
	}
	.navIconWrap:hover {
		background-color: #FFCC00 !important;
	}
	.navIconWrap > * {
		margin: auto;
		text-align: center;
	}
	.icon {
		height: 50px;
		width: 50px;
		background-color: lightgreen;
		display: block;
	}
	.navIconWrap h3 {
		margin-top: 5px;
	}
	.selected {
		background-color: #FFCC00 !important;
	}
</style>