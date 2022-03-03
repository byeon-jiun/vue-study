<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model="num1"/>
      <span> + </span>
      <input type="text" v-model="num2"/>
      <span> = </span>
      <span> {{result}} </span>
    </div>
  </div>
</template>

<script>
import {reactive,computed, toRefs} from "vue";
function plusCalculator(){
  let state = reactive({
    num1:0,
    num2:0,
    result: computed(() => parseInt(state.num1) + parseInt(state.num2))
  });
  return toRefs(state);
}
export default {
  setup(){
    let {num1, num2, result} = plusCalculator();
    return{
      num1, num2, result
    }
  }
}
</script>

<style scoped>

</style>
<!-- 재사용 가능한 코드로 만들기위해, setup()에 작성되어 있던 코드를 분리해서 별도의 function으로 작성
      반응형으로 선언된 num1, num2, result 가 외부 function에서 정상적으로 동작하기 위해서는 toRefs를 사용해야함-->
