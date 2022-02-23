<template>
  <div>
    <h1 v-if="type=='A'">A 입니다.</h1>
    <h1 v-else-if="type=='B'">B 입니다.</h1>
    <h1 v-else>C 입니다.</h1>
  </div>
</template>

<script>
export default {
  data(){
    return{
      type: 'A'
    }
  }
}
</script>

<style scoped>

</style>
<!-- v-if의 경우 조건이 만족하면 html 블록이 생성되고, 조건이 맞지않으면 삭제 되는 형식 -->