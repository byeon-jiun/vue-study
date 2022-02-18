<template>
    <div class="container" v-bind:class="{'active' : isActive, 'text-red' : hasError}">Class Binding</div>
</template>

<script>
    export default {
        data(){
            return{
              isActive : true,
              hasError: false
            };
        }
    }
</script>

<style scoped>
    container {
        width: 100%;
    }
    .active{
        background-color: yellow;
        font-weight: bold;
    }
    .text-red{
        color: red;
    }
</style>
<!-- 클래스 바인딩의 경우 오브젝트 형태로 사용함, 바인딩할 클래스를 key로 잡고 바인딩 여부를 true/false 로 지정 -->