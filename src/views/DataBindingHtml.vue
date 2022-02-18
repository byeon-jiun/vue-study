<template>
    <div v-html="htmlString"></div>
</template>

<script>
    export default {
        data() {
            return {
                htmlString: '<h1>good boy!</h1>'
            };
        }
    }
</script>

<style scoped>

</style>
<!-- html 태그를 바인딩 할때는 {{}} 를 이용하면 문자열로 인식하기 떄문에 사용하면 안된다, v-html 디렉티브를 사용해야 한다.-->