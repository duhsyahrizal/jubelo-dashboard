<template>
  <div class="white custom-rounded pa-8">
    <div class="text-body2 font-weight-bold mb-4">{{ title }}</div>
    <div class="text-h4 font-weight-bold mb-3">${{ value }}K</div>
    <div class="text-body2 mb-6 text--disabled">
      (${{ valueLastYear }}k last year)
    </div>
    <div
      v-if="value > valueLastYear"
      class="d-flex justify-center align-center"
    >
      <v-icon color="green"> mdi-arrow-up-thin </v-icon>
      <div class="text-body2 green--text">{{ growth }} %</div>
    </div>
    <div
      v-if="value < valueLastYear"
      class="d-flex justify-center align-center"
    >
      <v-icon color="red"> mdi-arrow-down-thin </v-icon>
      <div class="text-body2 red--text">{{ growth }} %</div>
    </div>
  </div>
</template>

<script>
import Option from "@/assets/icons/Option.png";

export default {
  name: "AnalyticsCard",

  props: {
    title: String,
    value: Number,
    valueLastYear: Number,
    growth: Number,
  },

  data: () => ({
    icons: { Option: Option },
  }),
};
</script>

<style>
.custom-rounded {
  border-radius: 16px;
}
</style>
