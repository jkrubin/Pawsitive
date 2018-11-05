<template>
  <div id="login">
    <div id="bg"></div>
    <div id="bgFade"></div>
    <md-card id="loginModal">
      <md-card-header>
        <div id="logo"></div>
        <div class="md-title">Walk With Me</div>
        <div class="md-subhead">Created by M.Paccione Design &amp; Development</div>
      </md-card-header>
      <md-card-content>
        <md-field>
          <label>Username</label>
          <md-input v-model="details.username" placeholder="Username"></md-input>
        </md-field>
        <md-field>
          <label>Password</label>
          <md-input v-model="details.password" placeholder="Password" @keyup.enter.native="login" type="password"></md-input>
        </md-field>
        <md-field v-if="registerBool == true">
          <label>Phone Number</label>
          <md-input v-model="details.phone_number" placeholder="Phone Number"></md-input>
        </md-field>
        <md-field v-if="registerBool == true">
          <label>Email Address</label>
          <md-input v-model="details.email_address" placeholder="Email Address"></md-input>
        </md-field>
      </md-card-content>
      <div class="buttonWrap" v-if="registerBool == false">
        <md-button @click="register">Register</md-button>
        <md-button @click="login">Login</md-button>
      </div>
      <div class="buttonWrap" v-if="registerBool == true">
        <md-button @click="back">Back</md-button>
        <md-button @click="submitRegister">Submit</md-button>
      </div>
    </md-card>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data(){
      return {
        details: {
          username: '',
          password: '',
          phone_number: '',
          email_address: ''
        },
        registerBool: false
      }
    },
    methods: {
      login(){
        // this.$store.commit("setPreloader", true);
        // this.$store.dispatch("login", {
        //   "email": this.details.username,
        //   "password": this.details.password
        // })
        this.$router.push("schedule");
      },
      register(){
        this.registerBool = true;
      },
      back(){
        this.registerBool = false;
      },
      submitRegister(){
        this.$store.dispatch("submitRegister", this.details);
      }
    },
    watch: {
      '$store.state.jwt' (newJWT){
        this.$store.commit("setPreloader", false);
        this.$store.dispatch("");
      }
      // '$store.state.options' (newOptions){
      //   this.$store.commit("setPreloader", false);
      //   this.$router.push({name: "Admin"});
      // }
    }
  }
</script>

<style>
  #login {
    height: 100%;
    width: 100%;
  }
  #logo {
/*  background-image: url("../assets/logo.png"); */
    background-size: contain;
    height: 150px;
    width: 250px;
    background-repeat: no-repeat;
    background-position: center;
    margin: auto;
  }
  #bg {
    background-image: url("../assets/login_bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
  }
  #bgFade {
    background-color: rgba(0,0,0,0.8);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 2;
    top: 0px;
    left: 0px;
  }
  #loginModal {
    height: auto;
    width: 400px;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    position: fixed;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    border: 4px solid green;
    transition: 0.5s all;
    position: fixed;
    z-index: 9;
  }
  #loginModal .md-button {
    background-color: green;
  }
  #loginModal .md-button:nth-of-type(1) {
    background-color: blue;
  }
  .md-title {
    text-align: center;
  }
  .md-button {
    background-color: darkred;
    color: white;
  }
  .md-toggle-password {
    background-color: white !important;
  }
  .buttonWrap {
    display: flex;
    justify-content: space-between;
  }
</style>
