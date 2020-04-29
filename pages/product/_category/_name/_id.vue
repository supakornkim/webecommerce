<template>
  <section class="shop-single-page">
      <div class="container">
          <div class="heading-sub">
              <h3 class="pull-left">shop single</h3>
              <ul class="other-link-sub pull-right">
                  <li><nuxt-link to="/">Home</nuxt-link></li>
                  <li><a href="#shop">Shop</a></li>
                  <li><a class="active" href="#detail">Detail</a></li>
              </ul>
              <div class="clearfix"></div>
          </div>
          <div class="widget-shop-single" style="margin-bottom:30px;">
              <div class="row">
                  <div class="col-md-5">
                      <div class="shop-single-item-img">
                          <div class="main-img">
                              <div class="main-img-item">
                                  <a href="#">
                                    <img :src="product_detail.product_image" alt="images" class="img-responsive">
                                  </a>
                              </div>
                              <!--<div class="main-img-item">
                                  <a href="#"><img src="img/products/canoneos_1.jpg" alt="images" class="img-responsive"></a>
                              </div>
                              <div class="main-img-item">
                                  <a href="#"><img src="img/products/canoneos_2.jpg" alt="images" class="img-responsive"></a>
                              </div>
                              <div class="main-img-item">
                                  <a href="#"><img src="img/products/canoneos_3.jpg" alt="images" class="img-responsive"></a>
                              </div>
                              <div class="main-img-item">
                                  <a href="#"><img src="img/products/canoneos_4.jpg" alt="images" class="img-responsive"></a>
                              </div>
                              <div class="main-img-item">
                                  <a href="#"><img src="img/products/canoneos_5.jpg" alt="images" class="img-responsive"></a>
                              </div>
                              <div class="main-img-item">
                                  <a href="#"><img src="img/products/canoneos_6.jpg" alt="images" class="img-responsive"></a>
                              </div>
                              <div class="main-img-item">
                                  <a href="#"><img src="img/products/canoneos_7.jpg" alt="images" class="img-responsive"></a>
                              </div>
                              <div class="main-img-item">
                                  <a href="#"><img src="img/products/canoneos_8.jpg" alt="images" class="img-responsive"></a>
                              </div>
                              <div class="main-img-item">
                                  <a href="#"><img src="img/products/canoneos_9.jpg" alt="images" class="img-responsive"></a>
                              </div>
                              <div class="main-img-item">
                                  <a href="#"><img src="img/products/canoneos_10.jpg" alt="images" class="img-responsive"></a>
                              </div>-->
                          </div>
                          <!--<ul class="multiple-img-list">
                              <li>
                                  <div class="product-col">
                                      <div class="img">
                                          <a href="#"><img src="img/products/canoneos.jpg" alt="images" class="img-responsive"></a>
                                      </div>
                                  </div>
                              </li>
                              <li>
                                  <div class="product-col">
                                      <div class="img">
                                          <a href="#"><img src="img/products/canoneos_1.jpg" alt="images" class="img-responsive"></a>
                                      </div>
                                  </div>
                              </li>
                              <li>
                                  <div class="product-col">
                                      <div class="img">
                                          <a href="#"><img src="img/products/canoneos_2.jpg" alt="images" class="img-responsive"></a>
                                      </div>
                                  </div>
                              </li>
                              <li>
                                  <div class="product-col">
                                      <div class="img">
                                          <a href="#"><img src="img/products/canoneos_3.jpg" alt="images" class="img-responsive"></a>
                                      </div>
                                  </div>
                              </li>
                              <li>
                                  <div class="product-col">
                                      <div class="img">
                                          <a href="#"><img src="img/products/canoneos_4.jpg" alt="images" class="img-responsive"></a>
                                      </div>
                                  </div>
                              </li>
                              <li>
                                  <div class="product-col">
                                      <div class="img">
                                          <a href="#"><img src="img/products/canoneos_5.jpg" alt="images" class="img-responsive"></a>
                                      </div>
                                  </div>
                              </li>
                              <li>
                                  <div class="product-col">
                                      <div class="img">
                                          <a href="#"><img src="img/products/canoneos_6.jpg" alt="images" class="img-responsive"></a>
                                      </div>
                                  </div>
                              </li>
                              <li>
                                  <div class="product-col">
                                      <div class="img">
                                          <a href="#"><img src="img/products/canoneos_7.jpg" alt="images" class="img-responsive"></a>
                                      </div>
                                  </div>
                              </li>
                              <li>
                                  <div class="product-col">
                                      <div class="img">
                                          <a href="#"><img src="img/products/canoneos_8.jpg" alt="images" class="img-responsive"></a>
                                      </div>
                                  </div>
                              </li>
                              <li>
                                  <div class="product-col">
                                      <div class="img">
                                          <a href="#"><img src="img/products/canoneos_9.jpg" alt="images" class="img-responsive"></a>
                                      </div>
                                  </div>
                              </li>
                              <li>
                                  <div class="product-col">
                                      <div class="img">
                                          <a href="#"><img src="img/products/canoneos_10.jpg" alt="images" class="img-responsive"></a>
                                      </div>
                                  </div>
                              </li>
                          </ul>-->
                      </div>
                  </div>
                  <div class="col-md-7">
                      <div class="shop-sing-item-detail">
                          <h3><a href="#">{{ product_detail.title }}</a></h3>
                          <!--<div class="brandname">by <strong>SONY</strong></div>-->
                          <div class="ratingstar">
                              <a href="#"><i class="fa fa-star-o" aria-hidden="true"></i></a>
                              <a href="#"><i class="fa fa-star-o" aria-hidden="true"></i></a>
                              <a href="#"><i class="fa fa-star-o" aria-hidden="true"></i></a>
                              <a href="#"><i class="fa fa-star-o" aria-hidden="true"></i></a>
                              <a href="#"><i class="fa fa-star-o" aria-hidden="true"></i></a>
                              <span class="number">(12)</span>
                              <a class="review">Add your review</a>
                          </div>
                          <div class="prod-price">
                              <!--<span class="price old">$299.6</span>-->
                              <span class="price">${{ product_detail.price }}</span>
                              <!--<span class="tax">(including tax)</span>-->
                          </div>
                          <div class="description" v-html="product_detail.description">

                          </div>
                          <div class="group-button">
                              <form action="#" class="cart">
                                  <div class="quantity">
                                      <button type="button" class="quantity-left-minus btn btn-number" data-type="minus" data-field="" @click.prevent="
                                      if (orderqty>0) orderqty=orderqty-1">
                                          <span class="minus-icon"></span>
                                      </button>
                                      <input type="number" name="number" value="01" id="quantity" v-model="orderqty">
                                      <button type="button" class="quantity-right-plus btn btn-number" data-type="plus" data-field="" @click.prevent="orderqty=orderqty+1">
                                          <span class="plus-icon"></span>
                                      </button>
                                  </div>
                              </form>
                              <div class="button-ver2">
                                  <a href="" @click.prevent="addtocard(product_detail.nid, product_detail.title, product_detail.product_image, product_detail.price)" class="link-ver1 addcart-ver2"><span class="icon"></span>ADD TO CART</a>
                                  <a href="#" class="link-ver1 paragraph"><i class="ion-stats-bars fa-4" aria-hidden="true"></i></a>
                                  <a href="#" class="link-ver1 quickview quickform"><i class="ion-eye fa-4" aria-hidden="true"></i></a>
                                  <a href="#" class="link-ver1 wishlist wishform"><i class="ion-android-share-alt fa-4" aria-hidden="true"></i></a>
                              </div>
                          </div>
                          <!--<div class="product-feature">
                              <ul class="product-feature-1">
                                  <li><strong>Instock:</strong> Yes</li>
                                  <li><strong>Vendor:</strong> Armani</li>
                              </ul>
                              <ul class="product-feature-2">
                                  <li><strong>SKU:</strong> 5487FB8/41</li>
                                  <li><strong>Category:</strong> Laptops & Computer, Ultrabooks</li>
                              </ul>
                          </div>-->
                      </div>
                  </div>
              </div>
              <!--<div class="product-detail-bottom">
                  <ul class="nav nav-tabs">
                      <li class="active"><a data-toggle="tab" href="#desc">Description</a></li>
                      <li><a data-toggle="tab" href="#special">Specifications</a></li>
                      <li><a data-toggle="tab" href="#video">Video</a></li>
                      <li><a data-toggle="tab" href="#review">Reviews</a></li>
                  </ul>
                  <div class="tab-content padding-lr">
                      <div id="desc" class="tab-pane fade in active">
                          <p>Smart never looked so good. The KS8000 4K SUHD TV features Quantum Dot Color technology, which covers you in our most superior picture yet, immersing you in whatever you’re watching. While HDR 1000 High Dynamic Range uses revolutionary technology to bring out details you’ve never seen in every foreground and background, Peak Illuminator Pro makes shades of every color pop. Plus, its Motion Rate 240 puts you on the pulse of every action sequence, while its flat, virtually bezel-less 360 design exudes elegance from every angle. If that’s not enough, we’ve enhanced its Smart Capabilities with the latest innovations and auto-sensing universal control, so it's insides are as extraordinary as its outsides.</p>
                          <ul class="product-detail-list">
                              <li> The Premium Flat 4K SUHD Picture with Quantum Dot Color Drive. Fires off a billion more colors than HD TVs for a lifelike picture(unlike anything else</li>
                              <li>More than just pitch black, get the best shades of black with Triple Black Technology. Never miss a detail in the dark.</li>
                              <li> HDR 1000 mirrors the high contrast and vividness the way movie makers intended</li>
                              <li>Get richer colors and deeper contrast with UHD Dimming</li>
                              <li>Smart 2016 - Use one universal remote to switch from Live TV to streaming seamlessly. Easily access everything you want to watch.</li>
                          </ul>
                      </div>
                      <div id="special" class="tab-pane fade">
                          <p>Smart never looked so good. The KS8000 4K SUHD TV features Quantum Dot Color technology, which covers you in our most superior picture yet, immersing you in whatever you’re watching. While HDR 1000 High Dynamic Range uses revolutionary technology to bring out details you’ve never seen in every foreground and background, Peak Illuminator Pro makes shades of every color pop. Plus, its Motion Rate 240 puts you on the pulse of every action sequence, while its flat, virtually bezel-less 360 design exudes elegance from every angle. If that’s not enough, we’ve enhanced its Smart Capabilities with the latest innovations and auto-sensing universal control, so it's insides are as extraordinary as its outsides.</p>
                      </div>
                      <div id="video" class="tab-pane fade">
                          <p>Smart never looked so good. The KS8000 4K SUHD TV features Quantum Dot Color technology, which covers you in our most superior picture yet, immersing you in whatever you’re watching. </p>
                      </div>
                      <div id="review" class="tab-pane fade">
                          <p>Smart never looked so good. The KS8000 4K SUHD TV features Quantum Dot Color technology, which covers you in our most superior picture yet, immersing you in whatever you’re watching. </p>
                      </div>
                  </div>
              </div>-->
          </div>
          <!--<div class="related-product-page">
              <div class="heading-shop">
                  <h3>UPSELL PRODUCT</h3>
              </div>
              <div class="widget-product-related">
                  <div class="owl-carousel owl-theme js-owl-product">
                      <div class="product-item">
                          <div class="product-item-img-related prod-item-img">
                              <a href="#"><img src="img/products/canonpixma.jpg" alt="images" class="img-responsive"></a>
                              <div class="button">
                                  <a href="#" class="addcart">ADD TO CART</a>
                                  <a href="#" class="view"><i class="fa fa-eye" aria-hidden="true"></i></a>
                              </div>
                              <div class="label label-2 pink label-top-20">Sale</div>
                          </div>
                          <div class="product-item-info-related">
                              <h3><a href="#">Sony Xperia X Compact - SN5605 VN Unlocked Smartphone...</a></h3>
                              <div class="ratingstar">
                                  <a href="#"><i class="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                  <a href="#"><i class="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                  <a href="#"><i class="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                  <a href="#"><i class="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                  <a href="#"><i class="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                  <span class="number">(12)</span>
                              </div>
                              <div class="prod-price">
                                  <span class="price black">$199.69</span>
                              </div>
                          </div>
                      </div>
                      <div class="product-item">
                          <div class="product-item-img-related prod-item-img">
                              <a href="#"><img src="img/products/macmini2.jpg" alt="images" class="img-responsive"></a>
                              <div class="button">
                                  <a href="#" class="addcart">ADD TO CART</a>
                                  <a href="#" class="view"><i class="fa fa-eye" aria-hidden="true"></i></a>
                              </div>
                              <div class="label label-2 pink label-top-20">Sale</div>
                          </div>
                          <div class="product-item-info-related">
                              <h3><a href="#">Sony Xperia X Compact - SN5605 VN Unlocked Smartphone...</a></h3>
                              <div class="ratingstar">
                                  <a href="#"><i class="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                  <a href="#"><i class="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                  <a href="#"><i class="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                  <a href="#"><i class="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                  <a href="#"><i class="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                  <span class="number">(12)</span>
                              </div>
                              <div class="prod-price">
                                  <span class="price black">$199.69</span>
                              </div>
                          </div>
                      </div>
                      <div class="product-item">
                          <div class="product-item-img-related prod-item-img">
                              <a href="#"><img src="img/products/canon.jpg" alt="images" class="img-responsive"></a>
                              <div class="button">
                                  <a href="#" class="addcart">ADD TO CART</a>
                                  <a href="#" class="view"><i class="fa fa-eye" aria-hidden="true"></i></a>
                              </div>
                          </div>
                          <div class="product-item-info-related">
                              <h3><a href="#">Sony MDRXB950BT/B Extra Bass Over Bluetooth Headphones...</a></h3>
                              <div class="ratingstar">
                                  <a href="#"><i class="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                  <a href="#"><i class="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                  <a href="#"><i class="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                  <a href="#"><i class="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                  <a href="#"><i class="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                  <span class="number">(12)</span>
                              </div>
                              <div class="prod-price">
                                  <span class="price old">$299.6</span>
                                  <span class="price">$199.69</span>
                              </div>
                          </div>
                      </div>
                      <div class="product-item">
                          <div class="product-item-img-related prod-item-img">
                              <a href="#"><img src="img/products/seiko.jpg" alt="images" class="img-responsive"></a>
                              <div class="button">
                                  <a href="#" class="addcart">ADD TO CART</a>
                                  <a href="#" class="view"><i class="fa fa-eye" aria-hidden="true"></i></a>
                              </div>
                          </div>
                          <div class="product-item-info-related">
                              <h3><a href="#">Samsung UN65KS8000 65-Inch 4K Ultra HD Smart LED TV...</a></h3>
                              <div class="prod-price">
                                  <span class="price old">$299.6</span>
                                  <span class="price">$199.69</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>-->
      </div>
  </section>
</template>
<script>
export default {
  data (){
    return {
      product_detail : "",
      orderqty : 1,
    }
  },
  async fetch () {
    const product_detail = await this.$axios.$get('product_detail?nid='+this.$nuxt._route.params.id)
    this.product_detail = product_detail[0]
    //console.log(this.product_detail)
  },
  methods: {
    addtocard(nid, name, img, price) {
      //console.log(nid)
      let pro = [
        {'nid':nid,
         'name':name,
         'img' :img,
         'price':price,
         'qty':this.orderqty}
      ]
      this.$store.commit('set_cart', pro)
      //console.log(this.$store.state.cart)
    }
  },
}
</script>
