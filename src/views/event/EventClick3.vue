<template>
  <div>
    <button type="button" v-on:click="one(), two()">Click</button>
  </div>
</template>

<script>
export default {
  methods: {
    one(){
      alert('One');
    },
    two(){
      alert('Two');
    }
  }
}
</script>

<style scoped>

</style>
<!-- 여러개 함수 호출 가능 -->