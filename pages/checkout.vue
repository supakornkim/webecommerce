<template>
  <div>
    <Checkout1 v-if="step=='checkout1'"/>
    <Checkout2 v-if="step=='checkout2'"/>
    <Checkout3 v-if="step=='checkout3'"/>
  </div>
</template>

<script>
import Checkout1 from '~/components/Checkout/Checkout1.vue'
import Checkout2 from '~/components/Checkout/Checkout2.vue'
import Checkout3 from '~/components/Checkout/Checkout3.vue'
export default {
  components: {
    Checkout1,
    Checkout2,
    Checkout3
  },
  data () {
    return {
    }
  },
  computed: {
    step() {
      if (this.$store.state.checkoutstep!=""){
        return this.$store.state.checkoutstep
      }else{
        return 'checkout1'
      }

    }
  },
}
</script>
