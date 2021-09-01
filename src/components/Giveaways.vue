<template>
  <div>
    <div class="pagination">
      <vue-ads-pagination
        :total-items="giveaways.length"
        :max-visible-pages="5"
        :page="page"
        :loading="loading"
        @page-change="pageChange"
        @range-change="rangeChange"
        :items-per-page="10"
      >
        <template slot-scope="props">
          <div>
            Items {{ props.start }} to {{ props.end }} max {{ props.total }}
          </div>
        </template>
        <template slot="buttons" slot-scope="props">
          <vue-ads-page-button
            class="but"
            v-for="(button, key) in props.buttons"
            :key="key"
            v-bind="button"
            @page-change="page = button.page"
          />
        </template>
      </vue-ads-pagination>
    </div>

    <div class="flex">
      <div
        class="single"
        v-for="(item, index) in this.visibleGiveaways"
        :key="index"
      >
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
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueAdsPagination, { VueAdsPageButton } from "vue-ads-pagination";

export default {
  name: "Giveaways",
  components: {
    VueAdsPagination,
    VueAdsPageButton,
  },
  data() {
    return {
      loading: false,
      page: 0,
      visibleGiveaways: [],
    };
  },
  methods: {
    open(id) {
      this.$router.push("/giveaways/id/" + id);
    },
    pageChange(page) {
      this.page = page;
      console.log(page);
    },

    rangeChange(start, end) {
      console.log(start, end);
      console.log(this.page);

      for (let i = 0; i < 10; i++) {
        if (this.page == 0) {
          this.visibleGiveaways = this.giveaways.slice(0, 10);
          console.log(this.visibleGiveaways);
        } else if (this.page == 1) {
          this.visibleGiveaways = this.giveaways.slice(10, 20);
          console.log(this.visibleGiveaways);
        } else if (this.page == 2) {
          this.visibleGiveaways = this.giveaways.slice(20, 30);
          console.log(this.visibleGiveaways);
        } else if (this.page == 3) {
          this.visibleGiveaways = this.giveaways.slice(30, 40);
          console.log(this.visibleGiveaways);
        } else if (this.page == 4) {
          this.visibleGiveaways = this.giveaways.slice(40, 50);
          console.log(this.visibleGiveaways);
        } else {
          this.visibleGiveaways = this.giveaways.slice(50, 60);
          console.log(this.visibleGiveaways);
        }
      }
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
.pagination {
  background-color: rgb(132, 132, 154);
  padding: 20px;
}
.but {
  padding: 5px;
  margin: 5px;
  background-color: rgb(93, 115, 189);
  color: white;
  border: none;
  cursor: pointer;
}
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
