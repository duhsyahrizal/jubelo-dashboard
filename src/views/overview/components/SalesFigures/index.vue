<template>
  <div name="analytics" class="mb-10">
    <div name="title" class="mb-8">
      <div class="d-flex justify-space-between">
        <div class="text-h5 font-weight-bold">Sales Figures</div>
        <div class="d-flex justify-end">
          <v-btn color="orange-color" class="pa-6 elevation-0 mx-2" :style="{ 'border-radius': '16px' }">
            <div class="dot border-orange mr-2"></div> <span class="font-sk-modernist text-capitalize font-weight-black text-inside-button">Marketing</span>
          </v-btn>
          <v-btn color="blue-color" class="pa-6 elevation-0" :style="{ 'border-radius': '16px' }">
            <div class="dot border-blue mr-2"></div> <span class="font-sk-modernist text-capitalize font-weight-black text-inside-button">Marketing</span>
          </v-btn>
        </div>
      </div>
    </div>
    <div class="white custom-rounded pa-8">
      <div id="salesChart"></div>
    </div>
    <v-row class="mt-4">
      <v-col lg="6">
        <div class="white custom-rounded pa-8">
        </div>
      </v-col>
      <v-col lg="6">
        <div class="white custom-rounded pa-8">
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  name: "SalesFigures",
};
</script>

<style></style>
