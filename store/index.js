export const state = () => ({
  checkoutstep: '',
  cart:[],
})

export const mutations = {

  set_checkoutstep(state, data) {
    state.checkoutstep = data
  },
  set_cart(state, data){
    state.cart.push(data)
  },
  set_clearcart(state, data){
    state.cart = []
  },


}

export const actions = {

  async nuxtServerInit ({ commit }, { route }) {
    //console.log(route)
  },
}
