<template>
  <div>
    <select v-model="selectVal" v-on:change="changeSelect()">
      <option value="서울">서울</option>
      <option value="부산">부산</option>
      <option value="인천">인천</option>
      <option value="제주">제주</option>
      <option value="진주">진주</option>
    </select>
  </div>
</template>

<script>
export default {
  data(){
    return{
      selectVal: ''
    }
  },
  methods:{
    changeSelect(){
      alert(this.selectVal);
    }
  }
}
</script>

<style scoped>

</style>
<!--체인지 이벤트는 v-on:change 와 @change 으로 사용 할 수 있다. -->