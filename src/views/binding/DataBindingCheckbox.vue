<template>
    <div>
        <label><input type="checkbox" v-model="checked" true-value="선택했어!" false-value="해체했어!">{{checked}}</label>
    </div>
</template>

<script>
    export default {
        data(){
            return{
              checked: true
            };
        }
    }
</script>

<style scoped>

</style>
<!-- 체크박스에 value 속성이 아닌 checked 속성을  사용하기 떄문에, v-model 이 아닌 v-bind:value 를 사용한다-->