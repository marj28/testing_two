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
                    <h2>PUBLIC EDUCATION AND EMPLOYMENT SERVICES OFFICE</h2>
                  </div>
                  <v-row class="text-form">
                    <v-col offset="1" md="10">
                      <v-text-field md="6"
                        label="User Name"
                        color="green"
                        type="email"
                        prepend-inner-icon="mdi mdi-account mdi-green"
                      ></v-text-field>
                      <v-text-field
                        v-model="password"
                        class="md-12"
                        label="Password"
                        type="password"
                        color="green"
                        prepend-inner-icon="mdi-key mdi-green"                        
                        :rules="passwordRules"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-container>
                    <v-row>
                      <v-col offset="2" size="9">
                        <v-btn
                          color="blue"
                          class="rounded-xl"
                          @click="$router.push({ name: 'Dashboard' })"
                        >
                          <v-icon left>mdi-account-check</v-icon>
                          LOG IN
                        </v-btn>
                      </v-col>

                      <v-col
                        offset=""
                        size="9"
                        @click="$router.push({ name: 'Register' })"
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
    password: "",
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

  
  <style scoped>
.v-btn {
  border-radius: 25px 25px 25px 25px;
  margin-left: -70px;
}

h2 {
  color: rgb(28, 110, 4);
  margin-top: 20px;
}

.wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 400px;
  transform: translate(-50%, -50%);
  background: rgb(255, 255, 255, 0.8);
  border-radius: 20px;
  box-shadow: 10px 10px 15px rgba(49, 47, 47, 0.15);
}

.background {
  margin: 0;
  padding: 0;
  background-image: url("../assets/cover1.jpg") !important;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}

.text-form {
  margin-top: 20px;
  color: rgb(28, 110, 4);
}
</style>
  
  
  
  