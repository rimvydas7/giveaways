<template>
  <div>
    <div class="bg">
      <div class="single">
        <h2>{{ giveaway.title }}</h2>
        <h3>{{ giveaway.description }}</h3>

        <div v-if="giveaway.worth.length <= 5">
          <h2 class="green">{{ giveaway.worth }}</h2>
        </div>
        <div v-else>
          <h2 class="yellow">{{ giveaway.worth }}</h2>
        </div>

        <h5>Platforms: {{ giveaway.platforms }}</h5>
        <h5>Type: {{ giveaway.type }}</h5>
        <h6>{{ giveaway.instructions }}</h6>
        <div>
          <img :src="giveaway.thumbnail" alt="" />
        </div>
        <a :href="giveaway.open_giveaway_url">Open giveaway website</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleGiveaway",
  computed: {
    giveaway() {
      return this.$store.state.giveaway;
    },
  },
  created() {
    fetch("http://167.99.138.67:4545/giveaways/id/" + this.$route.params.id)
      .then((res) => res.json())
      .then((data) => {
        this.$store.dispatch("getGiveaway", data);
        console.log(this.$store.state.giveaway);
      });
  },
};
</script>

<style scoped>
.bg {
  background-color: rgb(132, 132, 154);
  padding: 20px;
}
.single {
  background-color: rgb(93, 115, 189);
  margin: 0 auto;
  padding: 10px;
  width: 700px;
  height: 700px;
  border-radius: 5%;
  color: rgb(201, 207, 201);
}
.single img {
  width: 80%;
  padding: 20px;
}
.single a {
  text-decoration: none;
  color: white;
  border: 1px solid white;
  border-radius: 20px;
  padding: 5px 15px;
}
.single a:hover {
  padding: 10px 20px;
}
.green {
  color: rgb(59, 203, 46);
}
.yellow {
  color: rgb(210, 210, 10);
}
</style>
