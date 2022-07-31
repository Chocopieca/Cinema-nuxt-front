<template>
  <div class="movie-card pa-5">
    <v-img
      :lazy-src="$img(item.image, {
        quality: 20,
        format: 'webp'
      })"
      :src="$img(item.image, {
        quality: 100,
        format: 'webp'
      })"
      contain
      class="movie-card-image cursor-pointer mb-5"
      @click="$router.push(`/movie/${item.id}`)"
    />
    <h3
      :class="getFontSize($breakpoints.width, 700, [16, 16, 16, 24, 24])"
      class="text-center mb-3 cursor-pointer"
      @click="$router.push(`/movie/${item.id}`)"
    >{{ item.name }}</h3>
    <BaseButton button-color="border" @click="setOrder">WATCH</BaseButton>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "AppCard",
  components: {
    BaseButton: () => import('~~/components/ui/BaseButton')
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    ...mapActions({
      openDialog: 'modal/showModal',
    }),
    setOrder() {
      const payload = {
        type: 'OrderModal',
        options: {
          movie: this.item,
        }
      }
      this.openDialog(payload)
    }
  }
}
</script>

<style scoped lang="scss">
.movie-card {
  background: #4d4d4d;
  border: 1px solid white;
  box-shadow: inset #000000 0 0 20px 3px;

  &-image {
    @media (min-width: 920px) {
      max-height: 225px;
    }
  }

  h3 {
    height: 60px;
  }

  .v-image {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: #FFFFFF20;
      display: none;
    }
  }

  &:hover > h3 {
    color: #c18a2c;
  }

  &:hover > .v-image:after {
    display: block;
  }

  button {
    width: 100%;
  }
}
</style>
