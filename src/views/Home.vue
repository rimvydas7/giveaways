<template>
  <div>
    <Giveaways />
  </div>
</template>

<script>
import Giveaways from "@/components/Giveaways.vue";

export default {
  name: "Home",
  components: {
    Giveaways,
  },
};
</script>
<style scoped>
.home {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
