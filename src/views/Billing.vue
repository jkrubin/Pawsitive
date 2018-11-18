<template>
	<div id="billing">
		<select>
			<option>January</option>
			<option>February</option>
			<option>March</option>
			<option>April</option>
			<option>May</option>
			<option>June</option>
			<option>July</option>
			<option>August</option>
			<option>September</option>
			<option>October</option>
			<option>November</option>
			<option>December</option>
		</select>
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
				<tr v-for="(dog, index) in dogs" :class="{ invoiced: isInvoiced(index), paid: isPaid(index) }">
					<td>{{ index+1 }}</td>
					<td>{{ dog.name }}</td>
					<td>{{ getTotalDays(index) }}</td>
					<td>${{ getRate(index) }}</td>
					<td>${{ getTotalBill(getTotalDays(index), index) }}</td>
					<td><input v-if="dog.paid == false" type="checkbox" @click="invoiced(index)"></td>
					<td><input v-if="dog.invoiced == true" type="checkbox" @click="paid(index)"></td>
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
			},
			isInvoiced(index){
				return this.dogs[index].invoiced == true ? true : false;
			},
			isPaid(index){
				return this.dogs[index].paid == true ? true : false;
			},
			invoiced(index){
				this.$store.commit("toggleInvoiced", index);
			},
			paid(index){
				this.$store.commit("togglePaid", index);
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

<style scoped>
	#billing {
		margin-bottom: 30px;
	}
	#billing h2,
	#billing h3,
	#billing select {
		text-align: center;
	}
	#billing select {
		margin: auto;
		display: block;
		margin-top: 15px;
	}
	.invoiced {
		background-color: #FFCC00 !important;
	}
	.paid {
		background-color: #00a0ff !important;
	}
	table {
		width: 100%;
		border-collapse: collapse;
		display: table;
	}
	thead {
		background-color: #FFCC00;
	}
	tbody tr {
		height: 60px;
	}
	tbody tr:nth-of-type(even) {
		background-color: white;
	}
	tbody tr:nth-of-type(odd){
		background-color: #f1f1f1;
	}
	td {
		text-align: center;
		margin: auto;
	}
</style>