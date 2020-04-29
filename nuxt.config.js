import axios from 'axios'
let basepath = '/'
let baseurl = 'http://brmback.96.9.80.23.xip.io/oapi/'
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  generate: {
    //fallback: true, // if you want to use '404.html' instead of the default '200.html'
    //fallback: '/resorts/', // if your hosting needs a custom location
    /*routes () {
      let project = axios.get(baseurl+'product_list').then((res) => {
        return res.data.map((post) => {
          return '/product/'+post.machine_name+post.path+'/'+post.nid
        })
      })
      return Promise.all([project]).then(values => {
        return values.join().split(',');
      })
    },*/
  },
  head: {
    title: 'BRM Shop' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'BRM Shop' || '' }
    ],
    script: [
      { src: basepath+'js/bootstrap.js', body:true },
      { src: basepath+'js/owl.carousel.min.js', body:true },
      { src: basepath+'js/slick.min.js', body:true },
      { src: basepath+'js/main.js', body:true },
      { src: basepath+'js/jquery.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: basepath+'css/bootstrap.css' },
      { rel: 'stylesheet', href: basepath+'css/font-awesome.css' },
      { rel: 'stylesheet', href: basepath+'css/ionicons.min.css' },
      { rel: 'stylesheet', href: basepath+'css/slick.css' },
      { rel: 'stylesheet', href: basepath+'css/slick-theme.css' },
      { rel: 'stylesheet', href: basepath+'css/owl.carousel.min.css' },
      { rel: 'stylesheet', href: basepath+'css/style.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    // proxyHeaders: false
    baseURL: baseurl
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
