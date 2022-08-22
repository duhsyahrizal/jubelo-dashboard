<template>
  <v-app>
    <Navbar />

    <v-content class="main-color-bg">
      <div class="px-16 py-8">
        <Header />
        <router-view></router-view>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/layouts/DrawerNavbar.vue";
import Header from "@/components/BaseHeader.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
    Header,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Sk-Modernist";
  src: url("./assets/fonts/Sk-Modernist-Regular.otf"),
    url("./assets/fonts/Sk-Modernist-Bold.otf");
}

.v-application {
  [class*="text-"] {
    color: #091b3d;
    font-family: Sk-Modernist, sans-serif !important;
  }
  font-family: Sk-Modernist, sans-serif !important;
}

#app {
  font-family: Sk-Modernist, Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.font-sk-modernist {
  font-family: Sk-Modernist, sans-serif !important;
}

.orange-color {
  background-color: #F5B54430 !important;
}

.blue-color {
  background-color: #2772F030 !important;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border-style: solid;
  border-width: 4px;
  background-color: rgba(0, 0, 0, 0);
  top:0;
  left:0;
  pointer-events:none;
}

.text-inside-button {
  letter-spacing: 0;
}

.border-orange {
  border-color: #F5B544 !important;
}

.border-blue {
  border-color: #2772F0 !important;
}

.main-color-bg {
  background-color: rgba(245, 181, 68, 0.1);
}

.text-body2 {
  font-size: 14px;
}
</style>
