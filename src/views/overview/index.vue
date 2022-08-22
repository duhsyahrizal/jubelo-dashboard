<template>
  <div class="home">
    <FilterReport />
    <Analytics />
    <SalesFigures />
    <CustomerTransaction />
  </div>
</template>

<script>
import FilterReport from "./components/FilterReport";
import Analytics from "./components/Analytics";
import SalesFigures from "./components/SalesFigures";
import CustomerTransaction from "./components/CustomerTransaction";

export default {
  name: "OverviewPages",
  components: {
    FilterReport,
    Analytics,
    SalesFigures,
    CustomerTransaction,
  },
};
</script>

<style></style>
