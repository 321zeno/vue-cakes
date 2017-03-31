<template>
    <div id="alert">
        <div v-if="alert" :class="`alert alert_${alert.type}`">
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

<style>
  .alert {
    padding: 1.5em;
    border-radius: 5px;
  }

  .alert_error {
    border: 1px solid rgba(247,69,83,0.3);
    background: rgba(247,69,83,0.1);
  }

  .alert_info {
    border: 1px solid rgba(127,156,160,0.3);
    background: rgba(127,156,160,0.1);
  }
</style>
