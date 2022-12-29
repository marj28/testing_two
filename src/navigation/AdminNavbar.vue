<template>
  <nav>
    <v-app-bar color="#000000A9" dark app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">CITY PUBLIC EDUCATION AND EMPLOYMENT SERVICES OFFICE</span>
        <span></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template> </template>
        <v-list flat>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
            active-class="border"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn text @click="$router.push({ name: 'LogInForm' })">
        <span>LOG OUT</span>
        <v-icon right></v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      color="#2C3A47"
      dark
      app
      lg="6"
    >
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/img1.png" alt="" />
          </v-avatar>
          <p class="white--text subheading mt-1 text-center">Username</p>
        </v-flex>
        <v-flex class="mt-5">
          <h1 class="white--text subheading mt-1 text-center">User Title</h1>
        </v-flex>

        <v-flex class="mt-4 mb-4">
        </v-flex>
      </v-layout>

      <v-list shaped class="clickable">
        <template v-for="item in items">
          <v-list-group
            v-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item['icon-ctr']"
            :append-icon="item.model ? item.icon : item['icon-alt']"
            active-class="orange--text"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              route
              :to="child.route"
              active-class="orange--text"
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else
            :key="item.text"
            active-class="orange--text"
            route
            :to="item.route"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>  
  
  <script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    mini: false,
    fab: false,
    items: [
      { icon: "mdi-home", 
      text: "Dashboard", 
      route: "/AdminDashboard" 
      },
      {
        icon: "mdi mdi-account",
        text: "Forms",
        route: "/AddUseraccount",
      },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        "icon-ctr": "mdi-account-box",
        text: "To Do's",
        model: false,
        children: [
        {
            icon: "mdi-clipboard-check-outline",
            text: "For Approval",
            route: "/YouTherecord",
          },
          {
            icon: "mdi-clipboard-file-outline",
            text: "For Recommendation",
            route: "/YouTherecord",
          },
          {
            icon: "mdi-clipboard-clock-outline",
            text: "For Processing",
            route: "/YouTherecord",
          },
        ],
      },
      {
          icon: "mdi-chevron-up",
          "icon-alt": "mdi-chevron-down",
          "icon-ctr": "mdi-account-box",
          text: "Profile",
          model: false,
          children: [
            {
              icon: "mdi-clipboard-check-outline",
              text: "User Info",
              route: "/YouTherecord",
            },
            {
              icon: "mdi-clipboard-file-outline",
              text: "Log Out",
              route: "/YouTherecord",
            },
          ],
        },
    ],
  }),
  computed: {},
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>
  
  <style scoped>
.border {
  border-left: 4px solid #0ba518;
}
</style>