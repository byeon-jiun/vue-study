<template>
  <button type="button" v-on:click="callFromParent" ref="btn">click</button>
</template>

<script>
export default {
  methods:{
    callFromParent(){
      alert('부모컴포넌트에서 자식 함수 직접호출');
    }
  }
}
</script>

<style scoped>

</style>
<!-- 부모에서 자식 컴포넌트 버튼 객체에 접근해 이벤트를 발생 시키지않고 직접 함수를 호출-->