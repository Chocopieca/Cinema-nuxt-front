<template>
  <div>
    <div class="size18-weight400 mb-2">{{ title }}</div>
    <v-row no-gutters>
      <v-col cols="5" md="4" class="pa-0">
        <v-autocomplete
          v-model="inputPhone.code"
          :items="CountryCodeList"
          :required="required"
          return-object
          item-text="codeNumber"
          class="base-input pa-1 mt-0"
          @keydown.enter="$emit('enter')"
        >
          <template #prepend-inner>
            <v-img
                :src="getFlagLink"
                contain
                width="30"
                height="25"
            />
          </template>
        </v-autocomplete>
      </v-col>
      <v-col cols="7" md="8" class="pa-0 pl-3">
        <input
            v-model="inputPhone.number"
            placeholder="00 000 00 00"
            :required="required"
            class="base-input"
            @keydown.enter="$emit('enter')"
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CountryCode from '~~/assets/countryCodes.json'
import Country from '~~/assets/country.json'

export default {
  name: "BasePhoneInput",
  props: {
    value: {
      type: [String, Number, Object],
      default: null,
    },
    placeholder: {
      type: String,
      default: '0,0'
    },
    title: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      inputPhone: {
        code: {
          codeNumber:"+7",
          countryCode:"RU"
        },
        number: '',
      },
    }
  },
  computed: {
    CountryCodeList() {
      return CountryCode.map(item => {
        return {
          countryCode: item.code,
          codeNumber: item.dialling_code,
        }
      })
    },
    getFlagLink() {
      return Country.map(item => {
        if(item.code === this.inputPhone.code.countryCode) {
          return item.image
        }
        return '';
      }).join('')
    }
  },
  watch: {
    'inputPhone.code' () {
      this.$emit("input", {
        code: this.inputPhone.code.codeNumber,
        number: this.inputPhone.number,
      })
    },
    'inputPhone.number' () {
      this.$emit("input", {
        code: this.inputPhone.code.codeNumber,
        number: this.inputPhone.number,
      })
    },
  }
}
</script>

<style scoped lang="scss">
::v-deep.base-input {
  border: 1px solid #EAEFF9;
  color: white;
  padding: 0 20px;
  height: 48px;
  width: 100%;
  backdrop-filter: blur(50px);

  input {
    color: white !important;
  }
}
</style>
