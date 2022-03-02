<template>
  <child-component ref="child_component" />
</template>

<script>
import ChildComponent from "@/components/child/ChildComponent2";
export default {
  components: {ChildComponent},
  mounted() {
    this.$refs.child_component.callFromParent();
  }
}
</script>

<style scoped>

</style>
<!-- this.$refs를 통해 자식 객체에 접근 (ref는 유일 키값으로 사용해야함)
 부모 컴포넌트에서 자식 컴포넌트에 ref="child_component" id 값을 줘 $refs로 접근 할수 있도록 셋팅
  부모 컴포넌트에서 자식컴포넌트안에 callFromParent() 함수를 직접 호출 -->