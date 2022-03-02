<template>
  <div>
    <h1>My name is {{myName}}</h1>
  </div>
</template>

<script>
export default {
  data(){
    return{
      firstName: 'ji-un',
      lastName: 'byeon'
    }
  },
  computed: {
    myName(){
      return this.firstName + ',' + this.lastName;
    }
  }
}
</script>

<style scoped>

</style>
<!-- myName 은 함수이자 동시에 vue 인스턴스의 데이터 키, computed에 정의해서 사용하면 화면내 여러곳에서 myName 을 사용해도 이에대한 연산은 1번밖에 일어나지 않는다.
    또한 데이터 값이 변경이 일어나는지를 감시 하기 때문에, firstName 과  lastName 값 중 하나라도 변경이 일어나면 myName 함수가 자동으로 실행되고, myName 값이 갱신된다.-->