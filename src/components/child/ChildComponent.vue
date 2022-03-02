<template>
  <button type="button" v-on:click="childFunc" ref="btn">click</button>
</template>

<script>
export default {
  methods:{
    childFunc(){
      alert('부모컴포넌트에서 발생시킨 이벤트');
    }
  }
}
</script>

<style scoped>

</style>
<!-- 부모에서 자식 컴포넌트 버튼 객체에 접근할수 있도록  ref="btn" id 값을 셋팅-->