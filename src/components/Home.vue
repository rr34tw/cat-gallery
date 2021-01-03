<template>
  <b-container class="pt-3">
    <div
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="2000"
    >
      <b-row
        cols-md="3"
        v-masonry
        transition-duration="0.3s"
        item-selector=".item"
      >
        <b-col
          v-masonry-tile
          class="item my-2 my-md-3"
          v-for="(cat, idx) in cats"
          :key="idx"
        >
          <b-img :src="cat" thumbnail fluid-grow />
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    cats: [],
    busy: false,
  }),
  methods: {
    getData() {
      fetch("https://api.thecatapi.com/v1/images/search?format=json&limit=25")
        .then((res) => res.json())
        .then((json) => {
          let data = json.map((a) => a.url);
          this.cats = this.cats.concat(data);
        })
        .then(() => {
          setTimeout(() => {
            this.busy = false;
          }, 1000);
        });
    },
    loadMore: function () {
      this.busy = true;

      this.getData();
    },
  },
};
</script>
