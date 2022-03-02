<template>
  <div>
    <h1>My name is {{fullName}}</h1>
  </div>
</template>

<script>
export default {
  data(){
    return{
      firstName: 'ji-un',
      lastName: 'byeon',
      fullName: ''
    }
  },
  watch: {
    firstName(){
      this.fullName = this.firstName+ ' ' + this.lastName;
    },
    lastName(){
      this.fullName = this.firstName+ ' ' + this.lastName;
    }
  }
}
</script>

<style scoped>

</style>
<!-- watch 역시 vue 인스턴스에 정의된 데이터 값이 변경이 일어나는지를 감시하고, 변경이 일어나면 지정된 함수를 실행 시킬수 있다.
      computed 는 기존에 정의된 데이터값을 기반으로 새로운 데이터 값을 활용하기 위해 사용 된다면, watch는 정의된 데이터값 하나만을 감시하기 위한용도로 사용된다.
      watch는 데이터 변경이 일어나기 전까지 실행되지 않는다.-->