<template>
    <div v-bind:style="styleObject">인라인 스타일 바인딩</div>
</template>

<script>
    export default {
        data(){
            return{
                styleObject: {
                    color: 'red',
                    fontSize: '20px'
                }
            };
        }
    }
</script>

<style scoped>

</style>