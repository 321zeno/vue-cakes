<template>
    <div id="alert">
        <div v-if="alert" :class="alert.type">
            {{ alert.message }}
        </div>
    </div>
</template>

<script>

export default{
  data () {
    return {
      alert: {}
    }
  },
  methods: {
    showAlert: function (message, type) {
      let newAlert = {
        message: message,
        type: type
      }
      this.alert = newAlert
      let vm = this
      setTimeout(function () {
        vm.alert = {}
      }, 3000)
    }
  },
  created: function () {
    let vm = this
    this.$bus.$on('alerts.error', function (data) {
      vm.showAlert(data.message, 'error')
    })
    this.$bus.$on('alerts.info', function (data) {
      vm.showAlert(data.message, 'info')
    })
  }
}
</script>
