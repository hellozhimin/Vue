<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ $route.params.color }}</p>
    <button @click="getParam">get param</button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'i am apple'
    }
  },
  methods: {
    getParam () {
      console.log(this.$route.params);
    }
  }
}
</script>
