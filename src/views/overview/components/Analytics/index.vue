<template>
  <div name="analytics" class="mb-10">
    <div name="title" class="mb-8">
      <div class="d-flex justify-space-between">
        <div class="text-h5 font-weight-bold">Analytics Overview</div>
        <v-btn icon color="pink">
          <div>
            <v-img :src="icons.Option" width="24"></v-img>
          </div>
        </v-btn>
      </div>
    </div>
    <div name="data">
      <v-row>
        <v-col lg="3">
          <Card
            title="Sales"
            :value="34.1"
            :valueLastYear="15.8"
            :growth="105.23"
          />
        </v-col>
        <v-col lg="3">
          <Card
            title="Purchase"
            :value="6.2"
            :valueLastYear="30"
            :growth="20.4"
          />
        </v-col>
        <v-col lg="3">
          <Card
            title="Return"
            :value="261.3"
            :valueLastYear="234"
            :growth="12.4"
          />
        </v-col>
        <v-col lg="3">
          <Card
            title="Marketing"
            :value="13.1"
            :valueLastYear="10.9"
            :growth="32.84"
          />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Card from "./AnalyticsCard.vue";
import Option from "@/assets/icons/Option.png";

export default {
  name: "AnalyticsSection",
  components: {
    Card,
  },
  data: () => ({
    icons: { Option: Option },
  }),
};
</script>

<style></style>
