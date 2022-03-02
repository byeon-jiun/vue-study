<template>
  <div>
    <PageTitle3 :title="post.title"/>
    <PageTitle3 :likes="post.likes" />
    <PageTitle3 :ispublished="post.isShow" />
    <PageTitle3 :commentIds="post.commentIds" />
    <PageTitle3 :author="post.author.name" />
    <PageTitle3 :author="post.author.age" />
  </div>
</template>

<script>
import PageTitle3 from "@/components/PageTitle3";

export default {
  components: {PageTitle3},
  data(){
    return {
      post: {
        title: '동적으로',
        likes: 3,
        isShow: true,
        commentIds: [234, 266, 277],
        author:{
          name: 'jiun',
          age: 29
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
<!-- 부모컴포넌트에서 자식 prop 으로 동적으로 값을 전달 할수 있다.
숫자, 배열, 논리 자료형, 객체 는  v-bind 를 사용하지않으면 문자열로 전달되기 때문에 꼭 사용해야함-->