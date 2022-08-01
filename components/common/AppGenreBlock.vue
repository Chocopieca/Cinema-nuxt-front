<template>
  <v-container fluid>
    <v-container class="genre pa-0">
      <div class="genre-title px-10">
        <h1 :class="getFontSize($breakpoints.width, 700, [48, 48, 48, 38, 38])" class="mb-10 text-uppercase main-brown-text">
          ALL GENRES
        </h1>
        <div :class="getFontSize($breakpoints.width, 400, [32, 32, 32, 24, 24])" class="mb-15">
          You can find movies by genre.
        </div>
        <v-row class="mb-10">
          <v-col v-for="item of GenreList" :key="item.id" cols="12" md="4" lg="2">
            <nuxt-link :to="`/genre/${item.nameId}`">
              <v-img
                :src="item.image"
                cover
                width="100%"
                height="300"
                class="cursor-pointer position-relative"
              >
                <div class="genre-item-title">{{ getGenreName(item.nameId) }}</div>
              </v-img>
            </nuxt-link>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-container>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "AppGenreBlock",
  data() {
    return {
      GenreList: [
        { id: 1, image: 'https://s3.amazonaws.com/heights-photos/wp-content/uploads/2017/04/04191317/isabella-column-online.jpg', nameId: '0' },
        { id: 2, image: 'https://technosports.co.in/wp-content/uploads/2021/01/Jumanji-1024x749.jpg', nameId: '1' },
        { id: 3, image: 'https://wallpaperaccess.com/full/3726105.jpg', nameId: '2' },
        { id: 4, image: 'https://media.glamour.com/photos/5ec2e91dccfbc8c1a8fe8cbf/master/w_3000,h_2032,c_limit/MSDTITA_FE057.jpg', nameId: '3' },
        { id: 5, image: 'https://media.gq.com/photos/59efa5f866e2d56abcd7a055/16:9/w_2560%2Cc_limit/state-of-horror-gq.jpg', nameId: '4' },
        { id: 6, image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/02/22/15/westerns-good-bad-ugly.jpeg?width=1200', nameId: '5' },
      ]
    }
  },
  computed: {
    ...mapGetters({
      genreList: 'movies/getGenreList'
    })
  },
  methods: {
    getGenreName(id) {
      return this.genreList[id]
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep.genre {

  &-title {
    background: #373737;
    box-shadow: inset #000000 0 0 20px 3px;
    border: 2px solid white;
  }

  .v-image {
    box-shadow: #000000 0 0 20px 3px;
    border: 2px solid white;
  }

  &-item-title {
    position: absolute;
    bottom: 10px; left: 10px; right: 10px;
    text-align: center;
    background: #c18a2c80;
    border: 1px solid white;
    box-shadow: inset #000000 0 0 20px 3px;
  }
}
</style>
