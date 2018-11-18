<template>
	<tr class="client-row">
		<td class="dog-thumb">Image Here</td>
		<td class="dog-name">{{ dog.name }}</td>
		<td class="modalToggle" @click="modalToggle">+</td>
		<table class="infoModal" v-if="modalShow == true">
			<tr class="imgContainer">{{ dog.thumb }}</tr>
			<tr class="nameContainer">
				<md-field v-for="ownerName in dog.owner">
					<label>Name</label>
					<md-input :value="ownerName">{{ ownerName }}</md-input>
				</md-field>
			</tr>
			<tr class="phoneContainer">
				<md-field v-for="ownerPhone in dog.phone">
					<label>Phone</label>
					<md-input :value="ownerPhone">{{ ownerPhone }}</md-input>
				</md-field>
			</tr>
			<tr class="emailContainer">
				<md-field v-for="ownerEmail in dog.email">
					<label>Email</label>
					<md-input :value="ownerEmail">{{ ownerEmail }}</md-input>
				</md-field>
			</tr>
			<tr>
				<md-field>
					<label>Address</label>
					<md-input :value="dog.address">{{ dog.address }}</md-input>
				</md-field>
			</tr>
			<tr class="checkboxContainer">
				<label>Monday</label>
				<input type="checkbox" :checked="checkboxSelected(dog.repeating_schedule, 1)"></input>
			</tr>	
			<tr class="checkboxContainer">			
				<label>Tuesday</label>
				<input type="checkbox" :checked="checkboxSelected(dog.repeating_schedule, 2)"></input>
			</tr>		
			<tr class="checkboxContainer">		
				<label>Wednesday</label>
				<input type="checkbox" :checked="checkboxSelected(dog.repeating_schedule, 3)"></input>
			</tr>	
			<tr class="checkboxContainer">			
				<label>Thursday</label>
				<input type="checkbox" :checked="checkboxSelected(dog.repeating_schedule, 4)"></input>
			</tr>	
			<tr class="checkboxContainer">			
				<label>Friday</label>
				<input type="checkbox" :checked="checkboxSelected(dog.repeating_schedule, 5)"></input>
			</tr>			
			<tr class="buttonContainer">
				<button @click="modalToggle">Close</button>
				<button>Save</button>
			</tr>
		</table>
	</tr>
</template>

<script>
	export default {
		name: "ClientRow",
		props: ["dog"],
		methods: {
			checkboxSelected(schedule, index){
				return schedule.includes(index) ? true : false
			},
			modalToggle(){
				this.modalShow = this.modalShow == false ? true : false
			}
		},
		data(){
			return {
				modalShow: false
			}
		}
	}
</script>

<style>
	tr.client-row {
		height: 80px;
		width: 100%;
		display: flex;
	}
	tr.client-row:nth-of-type(even){
		background-color: white;
	}
	tr.client-row:nth-of-type(odd){
		background-color: #f1f1f1;
	}
	td.dog-thumb {
		width: 50%;
	}
	td.dog-name {
		width: 25%;
	}
	td.modalToggle {
		width: 25%;
		cursor: pointer;
	}
	td,
	td * {
		margin: auto;
		text-align: center;
	}
	.infoModal {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 95%;
		background-color: white;
		padding: 5%;
	}
	.nameContainer,
	.phoneContainer,
	.emailContainer,
	.buttonContainer {
		display: flex;
	}
	.checkboxContainer {
		display: flex;
		width: 100%;
	}
	.checkboxContainer label {
		width: 75%;
	}
	.buttonContainer {
		margin-top: 50px;
	}
	.buttonContainer button {
		cursor: pointer;
	}
	.buttonContainer button:nth-of-type(1){
		width: 45%;
		margin-right: 5%;
	}
	.buttonContainer button:nth-of-type(2){
		width: 45%;
		margin-left: 5%;
	}	

</style>