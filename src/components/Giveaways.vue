<template>
  <div>
    <div class="flex">
      <div class="single" v-for="(item, index) in giveaways" :key="index">
        <div @click="open(item.id)">
          <h2>{{ item.title }}</h2>
          <h3>{{ item.description }}</h3>
          <img :src="item.image" alt="" />
          <div v-if="item.worth.length <= 5">
            <h2 class="green">{{ item.worth }}</h2>
          </div>
          <div v-else>
            <h2 class="yellow">{{ item.worth }}</h2>
          </div>
          <h4>Type: {{ item.type }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Giveaways",
  methods: {
    open(id) {
      this.$router.push("/giveaways/id/" + id);
    },
  },
  computed: {
    giveaways() {
      return this.$store.state.giveaways;
    },
  },
  created() {
    this.$store.dispatch("getGiveaways");
  },
};
</script>
<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(132, 132, 154);
}
.single {
  padding: 10px;
  cursor: pointer;
  background-color: rgb(93, 115, 189);
  margin: 20px auto;
  width: 500px;
  height: 500px;
  border-radius: 5%;
}
.single:hover {
  background-color: rgb(146, 168, 240);
}
.single img {
  padding: 20px;
}
.green {
  color: rgb(59, 203, 46);
}
.yellow {
  color: rgb(210, 210, 10);
}
</style>
