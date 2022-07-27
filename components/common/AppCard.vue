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
      max-height="550"
      class="cursor-pointer"
      @click="$router.push(`/movie/${item.id}`)"
    />
    <h3
      :class="getFontSize($breakpoints.width, 700, [16, 16, 16, 16, 16])"
      class="text-center mb-3 cursor-pointer"
      @click="$router.push(`/movie/${item.id}`)"
    >{{ item.name }}</h3>
    <BaseButton button-color="border">WATCH</BaseButton>
  </div>
</template>

<script>
export default {
  name: "AppCard",
  components: {
    BaseButton: () => import('../../components/ui/BaseButton')
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
}
</script>

<style scoped lang="scss">
.movie-card {
  background: #4d4d4d;
  border: 1px solid white;
  height: 414px;

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
