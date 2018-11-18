import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.devtools = true

export const store = new Vuex.Store({
  state: {
  	loginError: '',
  	jwt: '',
  	showPreloader: false,
    client: false,
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
        am_pm: 1,
        skip_days: [],
        add_days: [],
        picked_up: false,
        dropped_off: false,
        group_walk_rate: 25,
        double_group_walk_rate: 40
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
        dropped_off: false,
        group_walk_rate: 25,
        double_group_walk_rate: 40
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
        dropped_off: false,
        group_walk_rate: 25,
        double_group_walk_rate: 40
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
        dropped_off: false,
        group_walk_rate: 25,
        double_group_walk_rate: 40
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
        am_pm: 1,
        skip_days: [],
        add_days: [],
        picked_up: false,
        dropped_off: false,
        group_walk_rate: 25,
        double_group_walk_rate: 40
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
        dropped_off: false,
        group_walk_rate: 25,
        double_group_walk_rate: 40
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
        dropped_off: false,
        group_walk_rate: 25,
        double_group_walk_rate: 40
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
        dropped_off: false,
        group_walk_rate: 25,
        double_group_walk_rate: 40
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
        dropped_off: false,
        group_walk_rate: 25,
        double_group_walk_rate: 40
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
        dropped_off: false,
        group_walk_rate: 25,
        double_group_walk_rate: 40
      },
      {
        name: "Belle",
        img: "",
        owner: ["Name"],
        email: [""],
        address: "",
        phone: [],
        zip: 94134,
        door_code: [""],
        repeating_schedule: [1,2,3,4],
        am_pm: 1,
        skip_days: [],
        add_days: [],
        picked_up: false,
        dropped_off: false,
        group_walk_rate: 27,
        double_group_walk_rate: 50
      }                         
    ]
  },
  mutations: {
  	setLoginError(state, payload){
  		state.loginError = payload;
  	},
  	setPreloader(state, payload){
  		state.showPreloader = payload;
  	},
  	setJWT(state, payload){
  		state.jwt = payload;
  	},
    setClient(state, payload){
      state.client = payload;
    }
  },
  getters: {
  	getJWT: state => {
  		return state.jwt;
  	},
    getMorningDogs: state => {
      let d = state.dogs,
          arr = [];

      for (var i = 0; i < d.length; i++) {
        if (d[i]["am_pm"] === 0 || d[i]["am_pm"] === 1){
          arr.push(d[i]);
        }
      }
      console.log(arr);
      return arr;
    },
    getAfternoonDogs: state => {
      let d = state.dogs,
          arr = [];

      for (var i = 0; i < d.length; i++) {
        if (d[i]["am_pm"] === 0 || d[i]["am_pm"] === 2){
          arr.push(d[i]);
        }
      }
      console.log(arr);
      return arr;
    },
    getAllDogs: state => {
      return state.dogs;
    }
  },
  actions: {
    submitRegister(){
      // Fetch Here
    }
  }
})
