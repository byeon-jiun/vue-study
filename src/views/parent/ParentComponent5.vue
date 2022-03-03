<template>
  <button type="button" @click="checkChild" > 자식 컴포넌트 데이터 조회</button>
  <child-component ref="child_component" />
</template>

<script>
import ChildComponent from "@/components/child/ChildComponent5";
export default {
  components: {ChildComponent},
  computed: {msg(){return this.$refs.child_component.msg}},
  methods:  {checkChild(){alert(this.msg)}}
}
</script>

<style scoped>

</style>
<!-- 부모 컴포넌트에서 computed 옵션을 사용해, 자식 컴포넌트의 msg 값을 감지 하도록 함, computed는 참조되고 있는 데이터의 변경사항을 바로 감지하여 반영할수 있음-->