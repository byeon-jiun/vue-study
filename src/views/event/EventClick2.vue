<template>
  <div>
    <button type="button" v-on:click="increaseCounter(7)">set 7</button>
    <button type="button" v-on:click="reset(0)">reset</button>
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
    increaseCounter(setCounter){
      this.counter = setCounter;
    },
    reset(resetCounter){
      this.counter = resetCounter;
    }
  },
}
</script>

<style scoped>

</style>