<template>
  <v-app>
    <v-app-bar
     color="dark accent-4"
     dense
     dark
    >
     <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

     <v-toolbar-title>Stars of Recruitment</v-toolbar-title>

     <v-spacer></v-spacer>

     <v-menu
       left
       bottom
     >
       <template v-slot:activator="{ on }">
         <v-btn icon v-on="on">
           <v-icon>mdi-dots-vertical</v-icon>
         </v-btn>
       </template>

       <v-list>
         <v-list-item
           v-for="(item, i) in items"
           :key="i"
           :to="item.to"
           router
           exact
         >
           <v-list-item-action>
             <v-icon>{{ item.icon }}</v-icon>
           </v-list-item-action>
           <v-list-item-content>
             <v-list-item-title v-text="item.title" />
           </v-list-item-content>
         </v-list-item>
       </v-list>
     </v-menu>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="text--accent-4"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-content>
        <v-container fluid>
        <!-- If using vue-router -->
        <router-view>
          <nuxt />
        </router-view>
        </v-container>
      </v-content>
      <v-footer app>
        <!-- -->
      </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Overview',
          to: '/'
        },
        {
          icon: 'mdi-apps',
          title: 'Vote',
          to: '/vote'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      group: null
    }
  }
}
</script>
