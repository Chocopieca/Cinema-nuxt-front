<template>
  <span>
    <label class="d-flex justify-start align-center">
      <span class="mr-1">
        <input v-model="isChecked" type="checkbox" :name="name" :value="value">
        <v-img v-show="!isChecked" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Eo_circle_green_white_checkmark.svg/2048px-Eo_circle_green_white_checkmark.svg.png" contain width="50" height="50"/>
        <v-img v-show="isChecked" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/YT_Official_Verified_Checkmark_Circle.svg/2048px-YT_Official_Verified_Checkmark_Circle.svg.png" contain width="50" height="50"/>
      </span>
      {{ title }}
    </label>
  </span>
</template>

<script>
export default {
  name: "BaseCheckbox",
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isChecked: true,
    }
  },
}
</script>

<style scoped>
input[type=checkbox] {
 display: none;
}
</style>
