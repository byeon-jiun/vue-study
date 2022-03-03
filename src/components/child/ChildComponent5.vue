<template>
  <button type="button" @click="childFunc" ref="btn">자식 컴포넌트 데이터 변경</button>
</template>

<script>
export default {
  data(){
    return{
      msg: '초기 메세지'
    }
  },
  methods:{
    childFunc(){
      this.msg = '변경된 메세지';
    }
  }
}
</script>

<style scoped>

</style>
<!-- 부모 컴포넌트에서 자식 컴포넌트에 정의된 데이터 옵션 값의 변경 사항을 항상 동기화 시키기 -->