<template>
  <div>
    <v-app id="inspire" class="background">
      <v-main class="d-flex justify-center align-center">
        <v-col cols="10" lg="5" class="mx-auto">
          <v-form @submit.prevent="submitHandler" ref="form">
            <v-container class="container-form">
              <v-layout row wrap>
                <v-card class="wrapper">
                  <div class="text-center">
                    <h2>PUBLIC EDUCATION AND EMPLOYMENT SERVICES OFFICE</h2>
                  </div>
                  <v-row class="text-form">
                    <v-col offset="1" md="10">
                      <v-form @submit.prevent="submitHandler" ref="form">
                        <v-card-text>
                          <v-text-field
                            class="textbox"
                            v-model="Firstname"
                            :rules="emailRules"
                            type="email"
                            label="First Name"
                            prepend-inner-icon="mdi-account white"
                            required
                          />

                          <v-text-field
                            class="textbox"
                            v-model="LastName"
                            :rules="emailRules"
                            type="email"
                            label="Last Name"
                            prepend-inner-icon="mdi-account white"
                            required
                          />

                          <v-text-field
                            class="textbox"
                            v-model="UserName"
                            :rules="emailRules"
                            type="email"
                            label="User Name"
                            prepend-inner-icon="mdi-account white"
                            required
                          />

                          <v-select
                            :items="['Admin', 'Brgy. SK Official']"
                            label="Select User level"
                            prepend-inner-icon="mdi-clipboard-account"
                            required
                          ></v-select>

                          <v-select
                            :items="[
                              'Apokon',
                              'Bincungan',
                              'Busaon',
                              'Canocotan',
                              'Cuambogan',
                              'La Filipina',
                              'Liboganon',
                              'Madaum',
                              'Magdum',
                              'Mankilam',
                              'New Balamban',
                              'Nueva Fuerza',
                              'Pagsabangan',
                              'Pandapan',
                              'Magugpo Poblacion',
                              'San Agustin',
                              'San Isidro',
                              'San Miguel (Camp 4)',
                              'Visayan Village',
                              'Magugpo East',
                              'Magugpo North',
                              'Magugpo South',
                              'Magugpo West',
                            ]"
                            label="Barangay"
                            prepend-inner-icon="mdi-account white"
                            required
                          ></v-select>

                          <v-text-field
                            class="textbox"
                            v-model="password"
                            :rules="passwordRules"
                            :type="passwordShow ? 'text' : 'password'"
                            label="Password"
                            placeholder="Password"
                            prepend-inner-icon="mdi-key"
                            counter
                          />

                          <v-text-field
                            class="textbox"
                            v-model="retypepassword"
                            :rules="passwordRules"
                            :type="passwordShow ? 'text' : 'password'"
                            label="Re-Type Password"
                            placeholder="Password"
                            prepend-inner-icon="mdi-key"
                            counter
                          />
                        </v-card-text>

                        <v-container>
                          <!--  <v-card-actions class="justify-center"> -->
                          <v-row>
                            <v-col offset="3" size="9">
                              <v-btn
                                type="submit"
                                color="green"
                                class="rounded-xl"
                                @click="$router.push({ name: 'Login' })"
                              >
                                <v-icon left>mdi-account-check</v-icon>
                                Create Account
                              </v-btn>
                            </v-col>
                          </v-row>
                        </v-container>
                        <!--     </v-card-actions> -->
                      </v-form>
                    </v-col>
                  </v-row>
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
  width: 400px;
  transform: translate(-50%, -50%);
  background: rgb(255, 255, 255, 0.8);
  border-radius: 20px;
  box-shadow: 10px 10px 15px rgba(49, 47, 47, 0.15);
  margin-top: 70px;
}

.background {
  margin: 0;
  padding: 0;
  background-image: url("../assets/cover1.jpg") !important;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.text-form {
  margin-top: 10px;
  color: rgb(28, 110, 4);
}
</style>
  
  
  
  