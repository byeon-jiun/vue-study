<template>
    <h2>{{title}}</h2>
    <h2>{{likes}}</h2>
    <h2>{{ispublished}}</h2>
    <h2>{{commentIds}}</h2>
    <h2>{{author}}</h2>

</template>

<script>
export default {
  props:{
    title:{},
    likes:{},
    ispublished:{},
    commentIds:{},
    author:{}
  }
}
</script>

<style scoped>

</style>
<!-- 부모, 자식 컴포넌트 데이터 전달하기
      views/nested/NestedComponent3 생성-->
