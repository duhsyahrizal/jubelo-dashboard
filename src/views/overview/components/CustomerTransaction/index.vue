<template>
  <div name="customer-transaction">
    <v-row>
      <v-col lg="4"> <NewCustomers /> </v-col>
      <v-col lg="8"> <TransactionHistory /> </v-col>
    </v-row>
  </div>
</template>

<script>
import NewCustomers from "./components/NewCustomers.vue";
import TransactionHistory from "./components/TransactionHistory.vue";

export default {
  name: "CustomerTransaction",

  components: {
    NewCustomers,
    TransactionHistory,
  },
};
</script>

<style>
.custom-rounded {
  border-radius: 16px;
}
</style>
