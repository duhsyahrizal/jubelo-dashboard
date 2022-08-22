<template>
  <v-navigation-drawer app :width="240">
    <v-list class="pt-10 pb-5 mx-6">
      <v-list-item class="pb-6 px-0">
        <v-img :src="img.logo"></v-img>
      </v-list-item>

      <v-list-item link class="rounded-xl custom-color-bg">
        <v-list-item-content class="d-flex justify-center">
          <v-img
            :src="img.avatar"
            max-height="56"
            max-width="56"
            class="my-6"
          ></v-img>

          <div class="text-body1 font-weight-bold">Linh Nguyen</div>
          <div class="text-caption font-weight-light owner-style">
            Owner & Founder
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-list dense rounded>
      <v-list-item
        v-for="(item, i) in routes.primaryRoutes"
        :key="i"
        :to="item.path"
        link
        router
        class="px-6 py-1"
      >
        <v-list-item-icon>
          <v-img :src="item.icon"></v-img>
        </v-list-item-icon>
        <v-list-item-title
          v-text="item.name"
          class="text-left"
        ></v-list-item-title>
      </v-list-item>
    </v-list>

    <div class="font-weight-bold font-subtitle1 text-left mx-8 mt-6 mb-3">
      My Teams
    </div>

    <v-list dense rounded>
      <v-list-item
        v-for="(item, i) in routes.secondaryRoutes"
        :key="i"
        :to="item.path"
        link
        router
        class="px-6 py-1"
      >
        <v-list-item-icon>
          <v-img :src="item.icon"></v-img>
        </v-list-item-icon>
        <v-list-item-title
          v-text="item.name"
          class="text-left"
        ></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { routes } from "@/router";
import logo from "@/assets/images/Logo_jubelo.png";
import avatar from "@/assets/images/Avatar.png";

const primaryRoutes = routes.slice(0, 6);
const secondaryRoutes = routes.slice(6, routes.length);

export default {
  name: "DrawerNavbar",

  data: () => ({
    routes: {
      primaryRoutes: primaryRoutes,
      secondaryRoutes: secondaryRoutes,
    },
    img: {
      logo,
      avatar,
    },
  }),
};
</script>

<style>
.custom-color-bg {
  background-color: rgba(245, 181, 68, 0.1);
}

.owner-style {
  color: rgba(9, 27, 61, 0.4) !important;
}

.v-list-item .v-list-item__title {
  color: rgba(0, 0, 0, 0.4) !important;
  font-weight: bold !important;
}

.v-list-item--active .v-list-item__title {
  color: black !important;
}
</style>
