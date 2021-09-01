<template>
  <div>
    <div class="bg">
      <h1>Filter giveaways:</h1>
      <div>
        <div>
          <label for="platforms">Choose a platform:</label>
          <select v-model="platforms" name="platforms">
            <option value="pc">{{
              parameters.Platforms.split(", ")[0]
            }}</option>
            <option value="steam">{{
              parameters.Platforms.split(", ")[1]
            }}</option>
            <option value="epic-games-store">{{
              parameters.Platforms.split(", ")[2]
            }}</option>
          </select>
        </div>

        <div>
          <label for="types">Choose a type:</label>
          <select name="types" v-model="type">
            <option value="game">{{ parameters.Types.split(", ")[0] }}</option>
            <option value="loot">{{ parameters.Types.split(", ")[1] }}</option>
            <option value="beta">{{ parameters.Types.split(", ")[2] }}</option>
          </select>
        </div>

        <div>
          <label for="sort">Sort by:</label>
          <select name="sort" v-model="sortBy">
            <option value="date">{{ parameters.SortBy.split(", ")[0] }}</option>
            <option value="value">{{
              parameters.SortBy.split(", ")[1]
            }}</option>
            <option value="popularity">{{
              parameters.SortBy.split(", ")[2]
            }}</option>
          </select>
        </div>

        <div>
          <button @click="sort">Filter</button>
        </div>
      </div>
    </div>
    <div class="flex">
      <div v-for="(item, index) in giveaways" :key="index">
        <div class="single" @click="show(item.id)">
          <h2>{{ item.title }}</h2>
          <h3>{{ item.description }}</h3>
          <img :src="item.image" alt="" />

          <div v-if="item.worth.length <= 5">
            <h2 class="green">{{ item.worth }}</h2>
          </div>
          <div v-else>
            <h2 class="yellow">{{ item.worth }}</h2>
          </div>
          <div v-if="item.worth === 'N/A'">
            <h2 class="green">Free</h2>
          </div>

          <h4>Type: {{ item.type }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SortGiveaways",
  data() {
    return {
      platforms: "",
      type: "",
      sortBy: "",
    };
  },
  methods: {
    sort() {
      fetch(
        `http://167.99.138.67:4545/giveaways/sort/${this.platforms}/${this.type}/${this.sortBy}`
      )
        .then((res) => res.json())
        .then((data) => {
          this.$store.dispatch("getSortedGiveaways", data);
          this.$router.push(
            `/giveaways/sort/${this.platforms}/${this.type}/${this.sortBy}`
          );
          // console.log(this.$store.state.sortedGiveaways);
        });
    },
    show(id) {
      fetch("http://167.99.138.67:4545/giveaways/id/" + id)
        .then((res) => res.json())
        .then((data) => {
          this.$store.dispatch("getGiveaway", data);
          // console.log(this.$store.state.giveaway);
        });
      this.$router.push("/giveaways/id/" + id);
    },
  },
  computed: {
    parameters() {
      return this.$store.state.sortParameters;
    },
    giveaways() {
      return this.$store.state.sortedGiveaways;
    },
  },
};
</script>
<style scoped>
.bg label {
  color: white;
  font-weight: bold;
}
.bg {
  background-color: rgb(132, 132, 154);
}
.bg h1 {
  padding: 20px;
}
button {
  padding: 5px 20px;
  background-color: rgb(93, 115, 189);
  border: none;
  border-radius: 25px;
  color: white;
  margin: 10px;
  font-size: 20px;
}
.flex {
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(132, 132, 154);
  justify-content: center;
}
.single {
  padding: 20px;
  cursor: pointer;
  background-color: rgb(93, 115, 189);
  margin: 20px;
  width: 500px;
  max-height: 500px;
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
