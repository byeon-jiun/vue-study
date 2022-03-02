<template>
  <child-component ref="child_component" />
</template>

<script>
import ChildComponent from "@/components/child/ChildComponent";
export default {
  components: {ChildComponent},
  mounted() {
    this.$refs.child_component.$refs.btn.click();
  }
}
</script>

<style scoped>

</style>
<!-- this.$refs를 통해 자식 객체에 접근 (ref는 유일 키값으로 사용해야함)
 부모 컴포넌트에서 자식 컴포넌트에 ref="child_component" id 값을 줘 $refs로 접근 할수 있도록 셋팅
  부모 컴포넌트에서 자식컴포넌트안에 html 객체에 대한 접근이 가능해지고, 자식 컴포넌트의 버튼 객체에 정의한 ref="btn" 이름으로 버튼 객체에 접근해서 click() 이벤트를 발생-->