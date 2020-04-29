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
                  <a href="" @click.prevent="setcheckoutstep('checkout2')" class="active">02. Check Out</a>
              </li>
              <li>
                  <a href="" @click.prevent="setcheckoutstep('checkout3')" title="">03. Order Complete</a>
              </li>
          </ul>
          <div class="orders">
              <div class="row">
                  <div class="col-md-7">
                      <div class="login-required">
                          <p>Returning Custumer? CLICK <a href="#" title="" class="login">HERE</a> TO LOGIN</p>
                          <p>Have a coupon? CLICK <a href="#" title="" class="coupon-code">HERE</a> TO ENTER YOUR CODE</p>
                      </div>
                      <div class="billing-details">
                          <div class="billing-details-heading">
                              <h2 class="billing-title">
                                      Billing Details
                                  </h2>
                          </div>
                          <div class="billing-details-content">
                              <div class="form-group">
                                  <div class="row">
                                      <div class="col-md-6 col-xs-12">
                                          <strong>First Name *</strong>
                                          <input type="text" name="first_name" v-model="formsubmit.firstname" class="form-control" value="">
                                      </div>
                                      <div class="col-md-6 col-xs-12">
                                          <strong>Last Name *</strong>
                                          <input type="text" name="last_name" v-model="formsubmit.lastname" class="form-control" value="">
                                      </div>
                                  </div>
                              </div>
                              <!--<div class="form-group">
                                  <div class="row">
                                      <div class="col-md-12">
                                          <strong>Company Name</strong>
                                          <input type="text" name="company_name" class="form-control" value="">
                                      </div>
                                  </div>
                              </div>-->
                              <div class="form-group">
                                  <div class="row">
                                      <div class="col-md-6 col-xs-12">
                                          <strong>Email Address *</strong>
                                          <input type="text" name="email" v-model="formsubmit.email" class="form-control" value="">
                                      </div>
                                      <div class="col-md-6 col-xs-12">
                                          <strong>Phone *</strong>
                                          <input type="text" name="phone" v-model="formsubmit.phone" class="form-control" value="">
                                      </div>
                                  </div>
                              </div>
                              <!--<div class="form-group">
                                  <div class="row">
                                      <div class="col-md-12">
                                          <strong>Country *</strong>
                                          <select name="CountryType" id="country" class="form-control">
                                              <option value="1">Viet Nam</option>
                                              <option value="2">USA</option>
                                              <option value="3">Germany</option>
                                          </select>
                                      </div>
                                  </div>
                              </div>-->
                              <div class="form-group">
                                  <div class="row">
                                      <div class="col-md-12">
                                          <strong>Address *</strong>
                                          <input type="text" name="address" v-model="formsubmit.address" class="form-control" value="">
                                      </div>
                                  </div>
                              </div>
                              <div class="form-group">
                                  <div class="row">
                                      <div class="col-md-6 col-xs-12">
                                          <strong>Postcode / ZIP</strong>
                                          <input type="text" name="postcode" v-model="formsubmit.postcode" class="form-control" value="">
                                      </div>
                                      <div class="col-md-6 col-xs-12">
                                          <strong>Town / City *</strong>
                                          <input type="text" name="city" v-model="formsubmit.city" class="form-control" value="">
                                      </div>
                                  </div>
                              </div>
                              <div class="form-group">
                                  <div class="row">
                                      <div class="col-md-12">
                                          <input type="checkbox" name="acc"> Create an account?
                                      </div>
                                  </div>
                              </div>
                              <div class="form-group">
                                  <div class="row">
                                      <div class="col-md-12">
                                          <strong>Order Note</strong>
                                          <textarea name="note" id="address" v-model="formsubmit.ordernote" tabindex="2" class="form-control form-textarea"></textarea>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-5">
                      <div class="aside-order">
                          <h2>YOUR ORDER</h2>
                          <table class="table table-product">
                              <thead>
                                  <tr>
                                      <th>PRODUCT</th>
                                      <th></th>
                                      <th>TOTAL</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr v-for="mycart in cart">
                                      <td class="product-name">{{ mycart[0].name }}</td>
                                      <td class="product-quantity">x {{ mycart[0].qty }}</td>
                                      <td class="product-total">${{ mycart[0].qty * mycart[0].price }}</td>
                                  </tr>
                              </tbody>
                          </table>
                          <ul class="tabs-first">
                              <li><span class="text">Subtotal:</span><span class="cart-number sub-number pull-right">${{ total_amount }}</span></li>
                              <li><span class="text">Shipping:</span>
                                  <div class="shipping">
                                      <form action="#">
                                          <!--<input type="radio" name="gender" value="Flat" id="radio1" checked="checked">
                                          <label for="radio1">FLAT RATE: <span class="shipping-number">$12.00</span></label>
                                          <input type="radio" name="gender" value="Free" id="radio2">
                                          <label for="radio2">Free Shipping</label>
                                          <input type="radio" name="gender" value="Delivery" id="radio3">
                                          <label for="radio3">FLAT RATE: <span class="shipping-number">$60.00</span></label>-->
                                          <input type="radio" name="gender" value="Local-Delivery" id="radio4" checked="checked">
                                          <label for="radio4">LOCAL DELIVERY: <span class="shipping-number indent">$5.00</span></label>
                                      </form>
                                  </div>
                                  <div class="clearfix"></div>
                              </li>
                              <li><span class="text">Total:</span><span class="cart-number big-total-number pull-right">${{ total_amount_with_delivery }}</span></li>
                          </ul>
                          <div class="order-transfer clearfix">
                              <ul class="tabs">
                                  <li class="active">
                                      <i class="icon"></i>
                                      <h4>Direct Bank Transfer
                                          <span>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account. </span></h4>
                                  </li>
                                  <!--<li>
                                      <i class="icon"></i>
                                      <h4>Check Payments</h4>
                                  </li>-->
                                  <li>
                                      <i class="icon"></i>
                                      <h4>Cash On Delivery</h4>
                                  </li>
                              </ul>
                          </div>
                          <button type="submit" class="btn-order"
                            @click.prevent="setcheckoutstep('checkout3')"
                          >place order</button>
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
      formsubmit : {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        address: "",
        postcode: "",
        city: "",
        ordernote : "",
        product_order : this.$store.state.cart
      },
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
    clearcart() {
      this.$store.commit('set_clearcart', "")
      this.cart = this.$store.state.cart
    },
    async setcheckoutstep(step) {
      const resultsubmit = await this.submitform()
      if (resultsubmit.nid > 0){
        this.scrollToTop()
        this.$store.commit('set_checkoutstep', step)
        this.clearcart()
      }
    },
    async submitform() {
      const addorder = await this.$axios.$post('addorder/add', this.formsubmit)
      return addorder
      //console.log(addorder)
    }
  }
}
</script>
