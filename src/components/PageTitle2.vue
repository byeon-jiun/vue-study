<template>
    <h2>{{title}}</h2>
</template>

<script>
export default {
  props:{
    title:{
      type: String,
      default: "자식입니다."
    }
  }
}
</script>

<style scoped>

</style>
<!-- 부모, 자식 컴포넌트 데이터 전달하기
      views/nested/NestedComponent2 생성-->