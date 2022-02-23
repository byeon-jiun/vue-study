<template>
  <div>
    <button type="button" v-on:click="increaseCounter">Add 1</button>
    <button type="button" v-on:click="reset">reset</button>
    <p>The counter is : {{counter}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      counter: 0
    }
  },
  methods:{
    increaseCounter(){
      this.counter =  this.counter + 1;
    },
    reset(){
      this.counter = 0
    }
  }
}
</script>

<style scoped>

</style>
<!-- 클릭 이벤트는 v-on:click 과 @click 으로 사용 할 수 있다. -->