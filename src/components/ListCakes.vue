<template>
    <div id="all-cakes">
        <h1>All Cakes</h1>

        <p><router-link :to="{ name: 'add_cake' }">Add Cake</router-link></p>

        <table class="table table-hover">
            <thead>
            <tr>
                <td>Name</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="cake in cakes">
                    <td>{{ cake.name }}</td>
                    <td>
                        <router-link :to="{name: 'view_cake', params: { id: cake.id }}" class="btn btn-primary">View</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import url from './../endpoint'
import Axios from 'axios'

export default {
  data () {
    return {
      cakes: [],
      originalCakes: []
    }
  },

  created: function () {
    this.fetchCakesData()
  },

  methods: {
    fetchCakesData: function () {
      Axios.get(url).then((response) => {
        this.cakes = response.data
        this.originalCakes = this.cakes
      }, (response) => {
        this.$bus.$emit('alerts.error', {message: 'Could not fetch any cakes :('})
      })
    }
  }
}
</script>
