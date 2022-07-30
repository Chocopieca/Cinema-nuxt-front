<template>
  <div v-if="isShow && modalType">
    <ThankYouModal v-if="modalType === 'SuccessesModal'"/>
    <OrderModal v-else-if="modalType === 'OrderModal'"/>
  </div>
</template>

<script>
import {mapGetters} from "vuex";


export default {
  name: "IndexModal",
  components: {
    ThankYouModal: () => import('./successes-modal'),
    OrderModal: () => import('./order-modal'),
  },
  computed: {
    ...mapGetters({
      isShow: 'modal/checkModal',
      modalType: 'modal/getModalType',
    })
  },
}
</script>
