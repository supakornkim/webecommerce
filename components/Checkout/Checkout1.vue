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
                  <a href="" @click.prevent="setcheckoutstep('checkout1')" class="active">01. Shopping Cart</a>
              </li>
              <li>
                  <a href="" @click.prevent="setcheckoutstep('checkout2')">02. Check Out</a>
              </li>
              <li>
                  <a href="" @click.prevent="setcheckoutstep('checkout3')" title="">03. Order Complete</a>
              </li>
          </ul>
          <div class="checkout-cart-form">
              <div class="row">
                  <div class="col-md-8 col-sm-12">
                      <table class="table shop_table">
                          <thead>
                              <tr>
                                  <th class="product-thumbnail">IMAGE</th>
                                  <th class="product-name">PRODUCT NAME</th>
                                  <th class="product-price">PRICE</th>
                                  <th class="quantity">QUANTITY</th>
                                  <th class="product-subtotal">TOTAL</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr class="cart_item" v-for="mycart in cart">
                                  <td class="product-thumbnail"><a href="#"><img src="img/checkout/product-1.jpg" alt="images" class="img-responsive"></a></td>
                                  <td class="product-name">
                                      <a href="#">{{ mycart[0].name }}</a>
                                  </td>
                                  <td class="product-price">
                                      <p class="price">${{ mycart[0].price }}</p>
                                  </td>
                                  <td class="product-quantity">
                                      <div class="quantity">
                                          <input type="text" name="quantity" :value="mycart[0].qty">
                                      </div>
                                  </td>
                                  <td class="product-price product-subtotal">
                                      <p class="price">${{ mycart[0].price * mycart[0].qty }}</p>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
                  <div class="col-md-4 col-sm-12">
                      <div class="aside-shopping-cart-total">
                          <h2>CART TOTALS</h2>
                          <ul>
                              <li><span class="text">Subtotal:</span><span class="cart-number">${{ total_amount }}</span></li>
                              <li><span class="text">Shipping:</span>
                                  <div class="shipping">
                                      <form method="get" action="/search" role="search">
                                          <!--<input type="radio" name="gender" value="Flat" id="radio1" checked="checked">
                                          <label for="radio1">FLAT RATE: $12.00</label>
                                          <input type="radio" name="gender" value="Free" id="radio2">
                                          <label for="radio2">Free Shipping</label>
                                          <input type="radio" name="gender" value="Delivery" id="radio3">
                                          <label for="radio3">FLAT RATE: $60.00</label>-->
                                          <input type="radio" name="gender" value="Local-Delivery" id="radio4" checked="checked">
                                          <label for="radio4">LOCAL DELIVERY: $5.00</label>
                                      </form>
                                  </div>
                              </li>
                              <li><span class="text calculate">Calculate shipping</span>
                              </li>
                              <li><span class="text">Total:</span><span class="cart-number big-total-number">${{ total_amount_with_delivery }}</span></li>
                          </ul>
                          <div class="process">
                              <button type="submit" class="btn-checkout"
                                @click.prevent="setcheckoutstep('checkout2')"
                              >
                                PROCEED TO CHECKOUT
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="shopping-cart-option">
                  <div class="button-option">
                      <nuxt-link to="/" class="btn-continue-shopping active">Continue shopping </nuxt-link>
                      <a href="" @click.prevent="clearcart()" class="btn-clear">Clear Cart</a>
                  </div>
                  <div class="shopping-cart-coupon">
                      <div class="row">
                          <div class="col-md-5 col-sm-12">
                              <form action="#" method="POST" class="coupon-form">
                                  <div class="form-group">
                                      <input type="text" class="form-control" placeholder="Coupon Code">
                                      <span class="icon-coupon"></span>
                                  </div>
                                  <button type="submit" class="btn-submit"></button>
                              </form>
                          </div>
                          <div class="col-md-7 col-sm-12">
                              <a href="#" class="btn-update-cart">UPDATE CART</a>
                          </div>
                      </div>
                  </div>
              </div>
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
      cart : [],
    }
  },
  async fetch () {
    this.cart = this.$store.state.cart
  },
  computed: {
    total_amount() {
      let sum = 0
      this.$store.state.cart.forEach((obj, index)=>{
        //console.log(obj[0].price)
        sum = sum + (parseInt(obj[0].qty) * parseInt(obj[0].price))
      })
      //console.log(sum)
      return sum
    },
    total_amount_with_delivery() {
      if (this.total_amount>0){
        return this.total_amount + 5
      }else{
        return 0
      }

    },
    total_qty() {
      return this.$store.state.cart.length
    }
  },
  methods:{
    scrollToTop() {
      window.scrollTo(0,0);
    },
    setcheckoutstep(step) {
      this.scrollToTop()
      this.$store.commit('set_checkoutstep', step)
    },
    clearcart() {
      this.$store.commit('set_clearcart', "")
      this.cart = this.$store.state.cart
    }
  }
}
</script>
