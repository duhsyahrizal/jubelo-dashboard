<template>
  <v-row class="mb-6">
    <v-col lg="4" class="searchContainer">
      <v-text-field
        filled
        dense
        rounded
        prepend-inner-icon="mdi-magnify"
        placeholder="Search for..."
        height="56"
      ></v-text-field>
    </v-col>
    <v-col offset-lg="6" lg="2">
      <div class="d-flex align-center justify-center">
        <v-btn icon color="pink" class="icon-container pa-7 mr-6">
          <div>
            <v-img :src="icons.Notification" width="24"></v-img>
          </div>
        </v-btn>
        <v-btn icon color="pink" class="icon-container pa-7">
          <div>
            <v-img :src="icons.Setting" width="24"></v-img>
          </div>
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import Notification from "@/assets/icons/Notification.png";
import Setting from "@/assets/icons/Setting.png";

export default {
  name: "BaseHeader",
  data: () => ({
    icons: {
      Notification: Notification,
      Setting: Setting,
    },
  }),
};
</script>

<style>
.searchContainer .v-input__slot {
  background: white !important;
  border-radius: 16px !important;
}

.searchContainer .v-text-field__slot {
  margin-left: 8px;
}

.searchContainer .v-input__prepend-inner {
  padding-top: 8px;
}

.icon-container {
  background: rgba(245, 181, 68, 0.1);
  border-radius: 16px;
}
</style>
