<template>
	<div>
		<h2>Month Total ${{ getMonthTotalIncome() }}</h2>
		<h3>12 Month Projection ${{ getMonthTotalIncome() * 12 }}</h3>
		<table>
			<thead>
				<tr>
					<td>#</td>
					<td>Dog</td>
					<td>Count</td>
					<td>Rate</td>
					<td>Total</td>
					<td>Invoiced</td>
					<td>Paid</td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(dog, index) in dogs">
					<td>{{ index+1 }}</td>
					<td>{{ dog.name }}</td>
					<td>{{ getTotalDays(index) }}</td>
					<td>${{ getRate(index) }}</td>
					<td>${{ getTotalBill(getTotalDays(index), index) }}</td>
					<td><input type="checkbox"></td>
					<td><input type="checkbox"></td>
				</tr>
			</tbody>
		</table>
		<Nav menu="billing"></Nav>
	</div>
</template>

<script>
	import Nav from "../components/Nav"
	export default {
		name: "Billing",
		components: {
			"Nav": Nav
		},
		methods:{
			getTotalDays(index){
				let year = new Date().getFullYear(),
					month = new Date().getMonth(),
					firstDay = new Date(year, month, 1),
					lastDay = new Date(year, month + 1, 0),
					week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
					schedule = this.dogs[index].repeating_schedule,
					count = 0;

				for (var i = 0; i < schedule.length; i++) {
					while ( firstDay.getTime() <= lastDay.getTime() ){
						if (schedule.includes(firstDay.getDay())){ count++ }
				       	firstDay.setDate(firstDay.getDate() + 1);
				    }
				}

				return count;
			},
			getTotalBill(days, index){
				let total = this.getRate(index) * days;
				return total;
			},
			getMonthTotalIncome(){
				let total = 0;
				for (var i = 0; i < this.dogs.length; i++) {
					total += this.getRate(i) * this.getTotalDays(i);
				}
				return total
			},
			getRate(index){
				let dog = this.dogs[index],
					count = 0;

				for (var i = 0; i < this.dogs.length; i++) {
					this.dogs[i].address == dog.address ? count++ : false;
				}

				if (count >= 2) {
					var rate = (dog.group_walk_rate - 5)
				} else {
					var rate = dog.am_pm == 0 ? dog.double_group_walk_rate : dog.group_walk_rate;
				}

				return rate
			}
		},
		data(){
			return {
				dogs: this.$store.getters.getAllDogs,
				monthTotal: 0
			}
		}
	}
</script>

<style>
	.invoiced {
		background-color: #FFCC00 !important;
	}
	.paid {
		background-color: #00a0ff !important;
	}
</style>