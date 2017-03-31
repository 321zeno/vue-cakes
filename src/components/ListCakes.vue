<template>
    <div id="all-cakes">
        <h1>All Cakes</h1>
        <p><router-link :to="{ name: 'add_cake' }" class="add_cake">Add a new cake</router-link></p>
        <div class="cakes">
            <div v-for="cake in cakes" class="cake_container">
                <div class="cake">
                    <router-link :to="{name: 'view_cake', params: { id: cake.id }}">
                        <img :src="cake.imageUrl || `/static/nocake.png`" :alt="`Picture of ${ cake.name }`">
                    </router-link>
                    <h2>{{ cake.name }}</h2>
                    <router-link :to="{name: 'view_cake', params: { id: cake.id }}" class="more_cake">More</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import url from './../endpoint'
import Axios from 'axios'

export default {
  data () {
    return {
      cakes: []
    }
  },

  created: function () {
    this.fetchCakesData()
  },

  methods: {
    fetchCakesData: function () {
      Axios.get(url).then((response) => {
        this.cakes = response.data
      }, (response) => {
        this.$bus.$emit('alerts.error', {message: 'Could not fetch any cakes :('})
      })
    }
  }
}
</script>

<style>
  .cakes {
    display: flex;
    flex-wrap: wrap;
  }
  
  .cake_container {
    flex:1 1 auto;
    padding: 1em 0;
  }

  .cake {
    padding: 1em;
    padding-bottom: 6em;
    border: 3px dashed #7F9CA0;
    border-radius: 1em;
    height: 100%;
    position: relative;
  }

  .more_cake, .add_cake {
    background: #F74553;
    display: inline-block;
    border-radius: 5px;
    padding: 1em 2em;
    color: white;
    text-decoration: none;  
  }

  .add_cake {
    font-size: 1.2em;
  }

  .more_cake {
    position: absolute;
    bottom: 2em;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 auto;
  }

  .more_cake:hover, .add_cake {
    background: #F04050;
  }

  img {
    width: 100%;
  }

  @media screen and (min-width: 600px) {
    .cake_container {
      max-width: 50%;
      flex:1 1 50%;
      padding: 1em;
    }
  }
</style>
