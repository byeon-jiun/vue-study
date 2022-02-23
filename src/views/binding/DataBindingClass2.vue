<template>
    <div class="container"
         v-bind:class="[activeClass, errorClass]">Class Binding</div>
</template>

<script>
    export default {
        data(){
            return{
                activeClass : 'active',
                errorClass: 'text-red'
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
<!-- 클래스 바인딩의 경우 배열을 사용해 지정해줄 수도 있음, 단 배열을 사용하였을땐 특정조건에 따른 클래스 바인딩 처리를 true/false 로 할수 없음 -->