<template>
  <div :id="id" class="tab-pane fade in active">
      <div class="prod-fea-list">
          <div class="row top-row">
              <div class="col-md-15 col-sm-4 col-xs-6"
              v-for="product in product_list"
              >
                  <div class="product-item ver2">
                      <div class="prod-item-img">
                          <nuxt-link :to="'/product/'+product.machine_name+product.path+'/'+product.nid"><img :src="product.product_image" alt="images" class="img-responsive"></nuxt-link>
                          <div class="button">
                              <a href="#" class="addcart">ADD TO CART</a>
                              <a href="#" class="view"><i class="fa fa-eye" aria-hidden="true"></i></a>
                          </div>
                      </div>
                      <div class="prod-info ver2">
                          <h3><a href="#">{{ product.title }}</a></h3>
                          <div class="prod-price">
                              <span class="price black">${{ product.price }}</span>
                          </div>
                      </div>
                  </div>
              </div>


          </div>
      </div>
  </div>
</template>
<script>
export default {
  props : ['tid', 'id'],
  data (){
    return {
      product_list : [],
    }
  },
  async fetch () {
    if (this.tid==""){
      const product_list = await this.$axios.$get('product_list')
    }else{
      const product_list = await this.$axios.$get('product_list?tid='+this.tid)
    }
    this.product_list = product_list
    //console.log(product_list)
  },
}
</script>
