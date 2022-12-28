<template>
    <div>
      <v-app id="inspire" class="background">
        <v-main class="d-flex justify-center align-center">
          <v-col cols="10" lg="5" class="mx-auto">
            <v-form @submit.prevent="submitHandler" ref="form">
              <v-container>
                <v-layout row wrap>
                  <v-card class="wrapper">
                    <div class="text-center">
                      <!--  <v-avatar size="100" color="indigo lighten-4">
                  <v-icon size="40" color="indigo">mdi-account</v-icon>
                </v-avatar> -->
  
                      <h2>Public Education and Employment Services Office</h2>
                    </div>
  
                    <v-row>
                      <v-col offset="1" md="10">
                        <v-text-field
                          class="custom-label-color"
                          label="User Name"
                          color="white"
                          type="sample"
                          prepend-inner-icon="mdi mdi-account mdi-light"
                        ></v-text-field>
  
                        <v-text-field
                          v-model="password"
                          class="custom-label-color"
                          label="Password"
                          color="white"
                          type="password"
                          prepend-inner-icon="mdi-key mdi-light"
                          counter
                          :rules="passwordRules"
                        ></v-text-field>
                      </v-col>
                    </v-row>
  
                    <v-container>
                      <!--  <v-card-actions class="justify-center"> -->
                      <v-row>
                        <v-col offset="2" size="9">
                          <v-btn
                            color="blue"
                            class="rounded-xl"
                            @click="$router.push({ name: 'Login' })"
                          >
                            <v-icon left>mdi-account-check</v-icon>
                            LOG IN
                          </v-btn>
                        </v-col>
  
                        <v-col
                          offset=""
                          size="9"
                          @click="$router.push({ name: 'SignUp' })"
                        >
                          <v-btn type="submit" color="green" class="rounded-xl">
                            <v-icon left>mdi-account-check</v-icon>
                            SIGN UP
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-layout>
              </v-container>
            </v-form>
          </v-col>
        </v-main>
      </v-app>
    </div>
  </template>
    
    <script>
  export default {
    name: "App",
  
    data: () => ({
      loading: false,
      snackbar: false,
      passwordShow: false,
      userName: "",
  
      /*   emailRules: [
       v => !!v || 'E-mail is required',
       v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    */
  
      password: "",
  
      /*   passwordRules: [
        
        v => !!v || 'Password is required',
        
        v => (v && v.length >= 6) || 'Password must be 6  characters or more!',
        
      ], */
    }),
  
    methods: {
      submitHandler() {
        if (this.$refs.form.validate()) {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.snackbar = true;
          }, 3000);
        }
      },
    },
  };
  </script>
    
    <style>
  input[type="sample"] {
    border: none;
    border-bottom: 1px solid rgb(255, 255, 255);
    background: transparent;
    outline: none;
  
    width: 100%;
    color: rgb(255, 255, 255);
  }
  
  input[type="password"] {
    border: none;
    border-bottom: 1px solid rgb(255, 255, 255);
    background: transparent;
    outline: none;
  
    width: 100%;
    color: rgb(255, 255, 255);
  }
  
  .custom-placeholer-color input::placeholder {
    color: rgb(255, 255, 255) !important;
    opacity: 1;
  }
  .custom-label-color .v-label {
    color: rgb(255, 255, 255);
    opacity: 1;
  }
  
  .custom-placeholer-color input,
  .custom-label-color input {
    color: rgb(255, 255, 255) !important;
  }
  </style>
    
    <style scoped>
  .v-sheet.v-card {
    border-radius: 25px 25px 25px 25px;
  }
  .v-btn {
    border-radius: 25px 25px 25px 25px;
  }
  
  h2 {
    color: rgb(63, 248, 7);
    -webkit-text-fill-color: rgb(
      4,
      245,
      85
    ); /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: rgb(255, 255, 255);
  }
  
  .wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 400px;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.623);
  
    border-radius: 20px;
    box-shadow: 10px 10px 15px rgba(49, 47, 47, 0.15);
    box-shadow: 0 0 8px rgb(201, 181, 1);
  }
  
  .background {
    margin: 0;
    padding: 0;
    background-image: url('../assets/cover1.jpg') !important;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
  }
  </style>
    
    
    
    