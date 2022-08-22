<template>
  <div class="d-flex justify-space-between align-center mb-10">
    <div class="custom-rounded px-4 pt-2 pb-3 d-flex filter-container">
      <div class="text-body2 text--disabled mr-2 pt-1">Show :</div>
      <div class="selectContainer">
        <v-select
          v-model="initValue"
          :items="time"
          class="ma-0 pa-0"
        ></v-select>
      </div>
    </div>

    <div class="report-btn">
      <v-btn color="primary" class="white--text custom-rounded px-6 py-4">
        <v-icon left> mdi-arrow-down-thin </v-icon>
        Generate Report
      </v-btn>
    </div>
  </div>
</template>

<script>
const time = ["This Year", "Last Year"];

export default {
  name: "FilterReport",

  data: () => ({
    time: time,
    initValue: time[0],
  }),
};
</script>

<style>
.custom-rounded {
  border-radius: 16px;
}

.filter-container {
  background: rgba(245, 181, 68, 0.1);
}

.selectContainer {
  width: 130px;
  height: 10px;
}

.selectContainer .v-input__slot::before {
  border-style: none !important;
}

.selectContainer .v-select__selection {
  font-size: 14px;
  margin: 0;
}

.report-btn .v-btn {
  text-transform: capitalize;
  padding: 24px !important;
  padding-top: 28px !important;
  padding-bottom: 28px !important;
}
</style>
