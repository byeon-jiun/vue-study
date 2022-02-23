<template>
    <div>
        <select v-model="city">
            <option value="0">서울</option>
            <option value="1">인천</option>
            <option value="2">용인</option>
            <option value="3">제주</option>
        </select>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                city: "1"
            };
        }
    }
</script>

<style scoped>

</style>
<!-- v-model 은 내부적으로 select 의 value 속성을 사용해서 양방향 데이터를 바인딩 한다-->