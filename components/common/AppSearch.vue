<template>
  <div>
    <v-btn v-show="!activeSearch" autofocus icon @click="activeSearch = true"><v-icon>mdi-magnify</v-icon></v-btn>
    <v-autocomplete
      v-show="activeSearch"
      ref="autocomplete"
      :loading="isLoading"
      :items="searchResult"
      solo-inverted
      hide-details
      autofocus
      placeholder="Movie name or genre"
      class="search-input"
      item-text="name"
      item-value="name"
      @update:search-input="searchPayload"
      @blur="closeSearch"
      @keydown="onKeydown"
    >
      <template #append>
        <v-btn icon @click="closeSearch"><v-icon color="#121212">mdi-close</v-icon></v-btn>
      </template>

      <template #no-data>
        <v-list-item>
          <v-list-item-title>
            Search for your favorite
          </v-list-item-title>
        </v-list-item>
      </template>

      <template #item="{ item }">
        <div class="d-flex w-100" @click="goToMovie(item.id)">
          <v-list-item-avatar>
            <img :src="item.image">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="main-brown-text">{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </div>
      </template>
    </v-autocomplete>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "AppSearch",
  data() {
    return {
      isLoading: false,
      activeSearch: false,
      searchValue: '',
    }
  },
  computed: {
    ...mapGetters({
      searchResult: 'movies/getInputSearchingList',
      genreList: 'movies/getGenreList',
    }),
  },
  methods: {
    ...mapActions({
      searchMovie: 'movies/loadInputSearchingMovies',
    }),
    async goToMovie(id) {
      await this.closeSearch();
      await this.$router.push(`/movie/${id}`);
    },
    async searchPayload(val) {
      this.searchValue = val;
      this.isLoading = true;
      if (val) {
        const payload = {};
        const isGenre = this.genreList.includes(val.toUpperCase());

        if (isGenre) payload.genres = val;
        else payload.name = val;
        await this.searchMovie(payload);
      }

      this.isLoading = false;
    },
    async closeSearch() {
      this.searchValue = '';
      this.$refs.autocomplete.$refs.menu.isActive = false;
      await this.searchMovie([]);
      this.activeSearch = false;
    },
    onKeydown(KeyboardEvent) {
      switch (KeyboardEvent.key) {
        case 'Enter':
          if(this.searchValue) this.$router.push(`/search/${this.searchValue}`);
          this.closeSearch();
          break
        case 'Escape':
          this.closeSearch();
          break
        default:
          // console.log('key', KeyboardEvent)
      }
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep.search-input {
  position: absolute;
  left: 0; right: 0; top: 0; bottom: 0;
  font-size: 30px;

  .v-input__slot {
    min-height: 90px !important;
  }
}
</style>
