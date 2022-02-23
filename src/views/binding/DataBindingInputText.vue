<template>
    <div>
        <input type="text" v-model="valueModel" />
    </div>
</template>

<script>
    export default {
        data(){
            return{
                valueModel: 'byeon,ji-un'
            };
        }
    }
</script>

<style scoped>

</style>
<!-- data에 정의된 key 를 v-model 에 넣어주면, 모델인 data 와 뷰인 input type="text"의 value 속성이 서로 양방향 데이터 바인딩 설정이 된다.
      사용자가 입력하였을경우 모델 키 valueModel 안에 값이 담겨지게 된다.-->