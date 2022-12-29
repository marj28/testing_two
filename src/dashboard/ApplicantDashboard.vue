<template>
  <v-app>
   
    <v-container class="my-5">
      <v-row class="mb-2">
        <v-col sm="12" md="10" xl="4" xs="4" lg="6">
          <v-row>
            <v-col sm="12" xl="12" xs="12" md="10" lg="9">
              <v-card class="pa-2" outlined tile>
                <p>Total Youth Population</p>
                <div class="example">
                  <apexchart
                    :width="500"
                    :height="height"
                    :options="options"
                    :series="data"
                  ></apexchart>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>

        <v-col sm="12" md="10" xl="4" xs="4" lg="6">
          <v-row>
            <v-col sm="12" xl="6" xs="6" md="6" lg="6">
              <v-card class="pa-2" outlined tile>
                <v-card-title>
                  <v-avatar size="100">
                    <img src="/img1.png" alt="" />
                  </v-avatar>

                  Total Male - 5,000
                </v-card-title>
              </v-card>

              <v-row>
                <v-col>
                  <v-card class="pa-2" outlined tile>
                    <v-card-title>
                      <v-avatar size="100">
                        <img src="/img3.png" alt="" />
                      </v-avatar>

                      Total Female - 5,000
                    </v-card-title>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>

            <v-col sm="12" xl="6" xs="6" md="6" lg="6">
              <v-card class="pa-2" outlined tile>
                <v-card-title>
                  <v-avatar size="100">
                    <img src="/IP.png" alt="" />
                  </v-avatar>
                  Total IP - 5,000
                </v-card-title>
              </v-card>

              <v-row>
                <v-col>
                  <v-card class="pa-2" outlined tile>
                    <v-card-title>
                      <v-avatar size="100">
                        <img src="/img6.png" alt="" />
                      </v-avatar>
                      Total Non-IP - 5,000
                    </v-card-title>
                  </v-card>

                  <!-- <v-row>
        <v-col>
    <v-card>
    
    <h1>sadlife</h1>
    </v-card>
    </v-col>
    </v-row> -->
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

  

    <v-content>
        <ApplicantNavbar />
      <router-view> </router-view>
    </v-content>
  </v-app>
</template>
      
  <!-- <script>
  
  import Navbar from '@/components/Navbar'
  
  
  export default {
    name: 'App',
  
    components: {
  
     Navbar,
   
    },
  
    data: () => ({
      //
    }),
  };
  </script>
   -->
  
      
      <script>
import VueApexCharts from "vue-apexcharts";
import ApplicantNavbar from "@/navigation/ApplicantNavbar";

export default {
  name: "ApexChart",

  props: {
    title: {
      type: String,
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
    loading: {
      type: Boolean,
    },
  },
  components: {
    apexchart: VueApexCharts,
    ApplicantNavbar,
  },
  data: function () {
    return {
      data: [30, 40, 45, 50],
    };
  },
  computed: {
    options() {
      return {
        chart: {
          type: "donut",
        },
        title: {
          text: this.title,
          align: "left",
          style: {
            fontSize: "30px",
            fontWeight: "bold",
          },
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  show: true,
                  label: "Total",
                  fontSize: "22px",
                  fontWeight: "bold",
                  color: "black",
                },
              },
            },
          },
        },
        colors: ["#40E0D0", "#008000", "#FFD700", "#FF4500"],
        noData: {
          text: this.loading ? "Loading..." : "No Data",
        },
        labels: [
          "Out of School Youth",
          "College",
          "High School",
          "Senior High",
        ],
      };
    },
  },
};
</script>
    
    
    <style scoped>
#myChart {
  max-width: 500px;
  margin: 30px auto;
  padding: 0;
}

p {
  text-align: center;
  font-size: 20px;
}
</style>
    
    