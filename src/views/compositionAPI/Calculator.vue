<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model="state.num1" @keyup="plusNumbers"/>
      <span> + </span>
      <input type="text" v-model="state.num2" @keyup="plusNumbers"/>
      <span> = </span>
      <span> {{state.result}} </span>
    </div>
  </div>
</template>

<script>
import {reactive} from "vue";
export default {
  setup(){
    let state = reactive({
      num1:0,
      num2:0,
      result:0}
    );
    return{
      state
    }
  }
}
</script>

<style scoped>

</style>
<!-- 컴포지션 api 를 이용하면 setup 함수 안에서 한덩어리로 코드를 구현할 수 있어 코드에 대한 관리가 쉬워진다,
      코드의 재사용성을 높이고, 코드의 가독성을 높여준다.( 연관성 있는 로직은 같이 관리 하기 용이)-->
<!-- compositionAPI 를 사용하기전 코드

<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model="num1" @keyup="plusNumbers"/>
      <span> + </span>
      <input type="text" v-model="num2" @keyup="plusNumbers"/>
      <span> = </span>
      <span> {{result}} </span>
    </div>
  </div>
</template>

<script>
export default {
  data(){ return{ num1:0, num2:0, result:0}; },
  methods:{ plusNumbers(){ this.result = parseInt(this.num1) + parseInt(this.num2); }}
}
</script>

-->