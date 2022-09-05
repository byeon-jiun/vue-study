<template>
    <h1>Hello, {{name}}!</h1>
</template>

<script>
    export default {
        data(){
            return{
                name: 'jiun'
            };
        }
    }
</script>

<style scoped>

</style>
<!-- data 에 정의되는 데이터를 {{} } 이중괄호를 통해 html에 데이터 바인딩을 할 수 있다-->