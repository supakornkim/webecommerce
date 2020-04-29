<template>
  <div>
    <section class="checkout-page">
        <div class="container">
            <div class="heading-sub">
                <h3 class="pull-left">shop cart</h3>
                <ul class="other-link-sub pull-right">
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><a href="#shop">Shop</a></li>
                    <li><a class="active" href="#cart">Cart</a></li>
                </ul>
                <div class="clearfix"></div>
            </div>
            <ul class="breadcrumb">
                <li>
                    <a href="" @click.prevent="setcheckoutstep('checkout1')" >01. Shopping Cart</a>
                </li>
                <li>
                    <a href="" @click.prevent="setcheckoutstep('checkout2')">02. Check Out</a>
                </li>
                <li>
                    <a href="" @click.prevent="setcheckoutstep('checkout3')" title="" class="active">03. Order Complete</a>
                </li>
            </ul>
            <div class="complete-page text-center">
                <h2 class="status"><span class="ion-checkmark-circled fa-4 icon-check"></span>Congratulations! You’ve <span>completed</span> payment.</h2>
            </div>
        </div>
    </section>
    <div class="features">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6 col-xs-12 fea-column-inner">
                    <div class="fea-box">
                        <div class="photo">
                            <img src="img/gift.png" alt="images" class="img-reponsive">
                        </div>
                        <p class="inform-ver2">
                            <span class="strong">Deal of the day<br></span> check out today's deal
                        </p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12 fea-column-inner">
                    <div class="fea-box">
                        <div class="photo">
                            <img src="img/fly.png" alt="images" class="img-reponsive">
                        </div>
                        <p class="inform-ver2">
                            <span class="strong">Free Shipping<br></span> on thousands of products
                        </p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12 fea-column-inner">
                    <div class="fea-box">
                        <div class="photo">
                            <img src="img/return.png" alt="images" class="img-reponsive">
                        </div>
                        <p class="inform-ver2">
                            <span class="strong">Easy Returns<br></span> on all purchases made
                        </p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12 fea-column-inner">
                    <div class="fea-box">
                        <div class="photo">
                            <img src="img/secu.png" alt="images" class="img-reponsive">
                        </div>
                        <p class="inform-ver2">
                            <span class="strong">Best Services Medal<br></span> we are proud of best service
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods:{
    scrollToTop() {
      window.scrollTo(0,0);
    },
    setcheckoutstep(step) {
      this.scrollToTop()
      this.$store.commit('set_checkoutstep', step)
    }
  }
}
</script>
