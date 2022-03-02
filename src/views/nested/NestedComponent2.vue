<template>
  <div>
    <PageTitle2 title="부모가 자식에게 데이터 넘겨버리기"/>
  </div>
</template>

<script>
import PageTitle2 from "@/components/PageTitle2";
export default {
  name: "NestedComponent2",
  components: {PageTitle2}
}
</script>

<style scoped>

</style>
<!-- 부모컴포넌트에서 지정한 title 값이, 자식 컴포넌트 props의 title 에 전달 된다.-->