<template>
  <h1>{{msg}}</h1>
</template>

<script>
export default {
  data(){
    return{
      msg: '자식 컴포넌트에서 보내는 메세지 입니다.'
    }
  },
  mounted() {
    this.$emit('send-message',this.msg);
  }
}
</script>

<style scoped>

</style>
<!-- 자식 컴포넌트에서 부모 컴포넌트로 이벤트를 전달하기 위해선 $emit 사용-->