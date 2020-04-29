<template>
  <header>
      <div class="modal fade" id="myModal" role="dialog">
          <div class="modal-dialog">
              <!-- Modal content-->
              <div class="modal-content">
                  <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                      <h4 class="modal-title">SEARCH HERE</h4>
                  </div>
                  <div class="modal-body">
                      <div class="input-group">
                          <form method="get" class="searchform" action="/search" role="search">
                              <input type="hidden" name="type" value="product">
                              <input type="text" name="q" class="form-control control-search">
                              <span class="input-group-btn">
                                <button class="btn btn-default button_search" type="button"><i data-toggle="dropdown" class="ion-ios-search"></i></button>
                              </span>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="topbar-mobile hidden-lg hidden-md">
          <div class="active-mobile">
              <div class="language-popup dropdown">
                  <a id="label" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              <span class="icon"><i class="ion-ios-world-outline" aria-hidden="true"></i></span>
                <span>English</span>
                <span class="ion-chevron-down"></span>
              </a>
                  <ul class="dropdown-menu" aria-labelledby="label">
                      <li><a href="#">English</a></li>
                      <li><a href="#">Vietnamese</a></li>
                  </ul>
              </div>
          </div>
          <div class="right-nav">
              <div class="active-mobile">
                  <div class="header_user_info popup-over e-scale hidden-lg hidden-md dropdown">
                      <div data-toggle="dropdown" class="popup-title dropdown-toggle" title="Account">
                          <i class="ion-android-person"></i><span> Account</span>
                      </div>
                      <ul class="links dropdown-menu list-unstyled">
                          <li>
                              <a id="customer_login_link" href="#" title="Sign in"><i class="ion-log-in"></i> Login</a>
                          </li>
                          <li>
                              <a id="customer_register_link" href="#" title="Register"><i class="ion-ios-personadd"></i> Register</a>
                          </li>
                          <li>
                              <a class="account" rel="nofollow" href="#" title="My account"><i class="ion-ios-person"></i> My account</a>
                          </li>
                          <li>
                              <a id="wishlist-total" title="Wishlist" href="#"><i class="ion-ios-heart"></i> Wishlist</a>
                          </li>
                          <li>
                              <a href="#" title="Check out"><i class="ion-ios-cart"></i> Check out</a>
                          </li>
                      </ul>
                  </div>
              </div>
              <div class="active-mobile search-popup pull-right">
                  <div class="search-popup dropdown" data-toggle="modal" data-target="#myModal">
                      <i class="ion-search fa-3a"></i>
                  </div>
              </div>
          </div>
          <div class="clearfix"></div>
      </div>
      <div class="top-nav hidden-xs hidden-sm">
          <div class="container">
              <div class="row">
                  <div class="col-md-5 col-sm-5 col-xs-12">
                      <div class="left-nav">
                          <div class="location dropdown">
                              <a id="label1" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                              <span class="icon"><i class="ion-ios-location" aria-hidden="true"></i></span>
                                <span>Our Store</span>
                                <span class="ion-chevron-down"></span>
                              </a>
                              <ul class="dropdown-menu" aria-labelledby="label1">
                                  <li><a href="#">New York</a></li>
                                  <li><a href="#">California</a></li>
                              </ul>
                          </div>
                          <div class="language dropdown">
                              <a id="label2" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                              <span class="icon"><i class="ion-ios-world-outline" aria-hidden="true"></i></span>
                                <span>English</span>
                                <span class="ion-chevron-down"></span>
                              </a>
                              <ul class="dropdown-menu" aria-labelledby="label2">
                                  <li><a href="#">English</a></li>
                                  <li><a href="#">Vietnamese</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-7 col-sm-7 col-xs-12">
                      <div class="right-nav">
                          <ul>
                              <li><a href="#"><i class="ion-ios-heart fa-1a" aria-hidden="true"></i>whishlist</a></li>
                              <li><a href="#"><i class="ion-arrow-swap fa-1a" aria-hidden="true"></i>compare</a></li>
                              <li><a href="#"><i class="ion-ios-personadd fa-1a" aria-hidden="true"></i>create account</a></li>
                              <li><a href="#"><i class="ion-log-in fa-1a" aria-hidden="true"></i>login</a></li>
                          </ul>
                          <span class="phone">800-123-6789</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="bottom">
          <div class="container">
              <div class="row">
                  <div class="col-md-3 col-sm-8 col-xs-7 logo">
                      <nuxt-link to="/">
                        <img src="pics/brm-logo.png" alt="images" class="img-reponsive">
                      </nuxt-link>
                  </div>
                  <div class="col-md-9 col-sm-4 col-xs-5 nextlogo">
                      <div class="block block-2 v4">
                          <div class="cart">
                              <a href="#" title="" id="cart" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                  <div class="photo photo-cart">
                                      <img src="img/cart.png" alt="images" class="img-reponsive">
                                      <span class="lbl v2">{{ total_qty }}</span>
                                  </div>
                                  <p class="inform inform-cart">
                                      <span class="strong">CART<br></span>
                                      <span class="price-cart">${{ total_amount }}</span>
                                  </p>
                              </a>
                              <div class="dropdown-menu dropdown-cart" aria-labelledby="label2">
                                  <ul>
                                      <li v-for="(usercart, index) in cart" :key="index">
                                          <div class="item-order">
                                              <div class="item-photo">
                                                  <a href="#"><img :src="usercart[0].img" alt="images" class="img-responsive" width="65px"></a>
                                              </div>
                                              <div class="item-content">
                                                  <h3><a href="#" title="">{{ usercart[0].name }}</a></h3>
                                                  <p class="price black">{{ usercart[0].price }}</p>
                                                  <p class="quantity">x{{ usercart[0].qty }}</p>
                                              </div>
                                          </div>
                                          <div class="btn-delete"><a href="#" title="" class="btndel">x</a></div>
                                      </li>

                                  </ul>
                                  <div class="content-1">
                                      <span class="total">Total: <strong class="price black">${{ total_amount }}</strong></span>
                                      <span class="quantity"><strong class="number">{{ total_qty }}</strong> products</span>
                                  </div>
                                  <div class="content-2">
                                      <!--<a href="#" class="addcart">ADD TO CART</a>-->
                                      <nuxt-link to="/checkout" class="addcart">Checkout</nuxt-link>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="search">
                          <form action="#" class="search-form v4" id="search-form">
                              <select id="categlory" class="select-option" name="searchlist" form="search-form">
                                  <option value="----">Choose an option</option>
                                  <option value="saab">Saab</option>
                                  <option value="opel">Opel</option>
                                  <option value="audi">Audi</option>
                              </select>
                              <input type="text" name="s" class="form-control v4" placeholder="Search an items">
                              <button type="submit" class="search-icon"></button>
                          </form>
                      </div>
                      <div class="clearfix"></div>
                  </div>
              </div>
          </div>
      </div>
      <div class="menu v4">
          <div class="container">
              <div class="deal v4">
                  <a href="#" class="btn-deal v4 orange">Hot Deal</a>
              </div>
              <button type="button" class="navbar-toggle v4" data-toggle="collapse" data-target="#myNavbar">
                  <span class="menu-title v4">MENU</span>
              </button>
              <div class="collapse navbar-collapse" id="myNavbar">
                  <ul class="menubar v4 js-menubar">
                      <li class=" menu-homepage menu-item-has-child dropdown">
                          <a href="#" title="Home">Clothing</a>
                          <span class="plus js-plus-icon"></span>
                          <span class="lable orange">NEW</span>
                          <ul class="dropdown-menu menu-level">
                              <li><a href="index.html" title="home 1">Home 1</a></li>
                              <li><a href="home-2.html" title="home 2">Home 2</a></li>
                              <li><a href="home-3.html" title="home 3">Home 3</a></li>
                              <li><a href="home-4.html" title="home 4">Home 4</a></li>
                              <li><a href="home-5.html" title="home 5">Home 5</a></li>
                              <li><a href="home-6.html" title="home 6">Home 6</a></li>
                          </ul>
                      </li>
                      <li><a href="#">Parts</a></li>
                      <li><a href="#">Accessories</a></li>
                      <li><a href="#">Tires & Tubes</a></li>
                      <li><a href="#">Bikes & Frames</a></li>
                      <li><a href="#">Nutrition</a></li>
                      <li><a href="#">Buyer Guide</a></li>
                  </ul>
              </div>
          </div>
      </div>
  </header>
</template>

<script>
export default {
  data (){
    return {
      cart : [],
    }
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
    total_qty() {
      return this.$store.state.cart.length
    }
  },
  async fetch () {
    this.cart = this.$store.state.cart
    //console.log(this.cart)
  },
  methods: {
  }
}
</script>
