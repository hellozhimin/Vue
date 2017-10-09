<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'i am apple'
    }
  },
  methods:{
    getParam () {
      console.log(this.$route.params);
    }
  }
}
</script>
