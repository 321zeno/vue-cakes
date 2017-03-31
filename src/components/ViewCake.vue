<template>
    <div class="cake_details">       
        <h1>{{ cake.name }}</h1>

        <img :src="cake.imageUrl || `/static/nocake.png`" :alt="`Picture of ${ cake.name }`">
        
        <h4>Comments:</h4>
        <p>{{ cake.comment }}</p>

        <p>Yum Factor: <strong>{{ cake.yumFactor }}</strong></p>

        <router-link :to="{ name: 'list_cakes' }" class="all_cakes">Back to all cakes</router-link>

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
        this.$bus.$emit('alerts.error', {message: 'Could not load the cake :('})
      })
    }
  }
}
</script>

<style>
  .all_cakes {
    background: #F74553;
    display: inline-block;
    border-radius: 5px;
    padding: 1em 2em;
    color: white;
    text-decoration: none;
    font-size: 1.2em;
  }

  .cake_details p {
    color: #666;
    max-width: 600px;
    margin: 0 auto 2em auto;
    line-height: 2;
    font-size: 1.1;
  }
</style>
