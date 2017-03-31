<template>
    <div>
        <h1>Add a new cake</h1>

        <form v-on:submit.prevent="addCake">

            <div>
                <label for="cake_name">Name</label>
                <input type="text" v-model="cake.name" id="cake_name" required>
            </div>

            <div>
                <label for="cake_comment">Comments</label>
                <textarea v-model="cake.comment" id="cake_comment" rows="10" required></textarea>
            </div>

            <div>
                <label for="cake_yumFactor">Yum Factor: <strong v-if="cake.yumFactor">{{ cake.yumFactor }}</strong></label> 
                <input type="range" step="1" min="1" max="5" v-model="cake.yumFactor" id="cake_yumFactor" required>
            </div>

            <div>
                <label for="cake_imageUrl">Image URL (optional)</label>
                <input type="url" v-model="cake.imageUrl" id="cake_imageUrl">
            </div>

            <div>
                <button>Add</button>
            </div>
        </form>

        <router-link :to="{ name: 'list_cakes' }" class="all_cakes">Back to all cakes</router-link>
    </div>
</template>

<script>
import url from './../endpoint'
import Axios from 'axios'
import Vue from 'vue'

Axios.defaults.headers.common.Accept = 'application/json'

export default {
  data () {
    return {
      cake: {
        yumFactor: 1
      }
    }
  },
  methods: {
    addCake: function () {
      Axios.post(url, this.cake).then((response) => {
        // TODO show a success message
        this.$router.push({ name: 'list_cakes' })
        let vm = this
        Vue.nextTick(function () {
          vm.$bus.$emit('alerts.info', {message: 'Thanks for adding this cake!'})
        })
      }, (response) => {
        this.$bus.$emit('alerts.error', {message: 'Could not save this cake :(.'})
      })
    }
  }
}
</script>

<style>
  label {
    display: block;
    margin-top: 1em;
    margin-bottom: .3em;
  }
  form {
    max-width: 400px;
    text-align: left;
    margin: 0 auto;
    background-color: rgba(229,219,192,0.3);
    padding: 2em;
    margin-bottom: 2em;
  }
  input, textarea {
    display: block;
    border: 1px solid #cacaca;
    padding: .5em;
    border-radius: 3px;
    font-size: 1em;
    width: 100%;
  }

  .all_cakes, form button {
    background: #F74553;
    display: inline-block;
    border-radius: 5px;
    padding: 1em 2em;
    color: white;
    text-decoration: none;
    font-size: 1.2em;
  }

  form button {
    background-color: #7F9CA0;
    border: 0;
    font-family: inherit;
    margin: 1em auto 0;
  }
</style>
