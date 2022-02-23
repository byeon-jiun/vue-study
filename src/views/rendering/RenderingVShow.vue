<template>
  <h1 v-show="type=='A'">A 입니다.</h1>
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
<!-- v-show 는 조건 만족에 상관 없이 무조건 html 블록이 생성되고 조건을 만족하면 css display를 이용해서 화면에 보이게 된다,(조건이 만족하지 못하면 숨김) -->