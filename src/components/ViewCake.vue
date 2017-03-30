<template>
    <div>
        <h2>Cake Details</h2>

        <p><router-link :to="{ name: 'list_cakes' }">Return to all cakes</router-link></p>

       
        <h3>{{ cake.name }}</h3>

        <img :src="cake.imageUrl" :alt="`Picture of ${ cake.name }`">
        
        <h4>Comments</h4>
        <p>{{ cake.comment }}</p>

        <p>Yum Factor: <strong>{{ cake.yumFactor }}</strong></p>

    </div>
</template>

<script>
import url from './../endpoint'
import Axios from 'axios'

Axios.defaults.headers.common.Accept = 'application/json'

export default {
  data () {
    return {
      cake: {}
    }
  },
  created: function () {
    this.getCake()
  },

  methods: {
    getCake: function () {
      Axios.get(url + '/' + this.$route.params.id).then((response) => {
        this.cake = response.data
      }, (response) => {
        // todo show an error message
      })
    }
  }
}
</script>
