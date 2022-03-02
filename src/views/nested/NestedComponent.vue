<template>
  <div>
    <PageTitle />
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
export default {
  name: "NestedComponent",
  components: {PageTitle}
}
</script>

<style scoped>

</style>
<!-- 컴포넌트에서 다른 컴포넌트를 사용하는 방법은 사용할 컴포넌트를 임포트 한후, 현재 컴포넌트의 템플릿에서 사용할 컴포넌트를 components에 등록하면 된다. -->