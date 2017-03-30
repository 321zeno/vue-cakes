<template>
    <div>
        <h2>Create a cake</h2>

        <p><router-link :to="{ name: 'list_cakes' }">Return to cakes</router-link></p>

        <form v-on:submit.prevent="addCake">

            <div>
                <label name="cake_name">Name</label>
                <input type="text" v-model="cake.name" id="cake_name" required>
            </div>

            <div>
                <label name="cake_comment">Comments</label>
                <textarea v-model="cake.comment" id="cake_comment" rows="10" required></textarea>
            </div>

            <div>
                <label name="cake_yumFactor">Yum Factor</label>
                <input type="number" min="1" max="5" v-model="cake.yumFactor" id="cake_yumFactor" required>
            </div>

            <div>
                <label name="cake_imageUrl">Image URL (optional)</label>
                <input type="url" v-model="cake.imageUrl" id="cake_imageUrl">
            </div>


            <div>
                <button>Add</button>
            </div>
        </form>
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
      cake: {}
    }
  },
  methods: {
    addCake: function () {
      Axios.post(url, this.cake).then((response) => {
        // TODO show a success message
        this.$router.push({ name: 'list_cakes' })
        let vm = this
        Vue.nextTick(function () {
          vm.$bus.$emit('alerts.info', {message: 'Nice cake.'})
        })
      }, (response) => {
        this.$bus.$emit('alerts.error', {message: 'Could not save this cake :(.'})
      })
    }
  }
}
</script>
