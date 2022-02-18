<template>
    <label><input type="radio" v-bind:value="radioValue1" v-model="picked">서울</label>
    <label><input type="radio" v-bind:value="radioValue2" v-model="picked">인천</label>
    <label><input type="radio" v-bind:value="radioValue3" v-model="picked">부산</label>
    <label><input type="radio" v-bind:value="radioValue4" v-model="picked">제주</label>
    <br>
    <span>선택한 지역 : {{picked}}</span>
</template>

<script>
    export default {
        data(){
            return{
              picked: '',
              radioValue1: '서울',
              radioValue2: '인천',
              radioValue3: '부산',
              radioValue4: '제주'
            };
        }
    }
</script>

<style scoped>

</style>
<!-- radio value 속성이 아닌 checked 속성을  사용하기 떄문에, v-model 이 아닌 v-bind:value 를 사용한다-->