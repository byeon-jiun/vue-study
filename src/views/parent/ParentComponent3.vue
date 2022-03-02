<template>
  <child-component ref="child_component" />
  <button type="button" v-on:click="changeChildData">changeChildData</button>
</template>

<script>
import ChildComponent from "@/components/child/ChildComponent3";
export default {
  components: {ChildComponent},
  methods:{
    changeChildData(){
      this.$refs.child_component.msg= '부모 컴포넌트가 변경한 데이터'
    }
  }
}
</script>

<style scoped>

</style>
<!-- 부모 컴포넌트에서 자식 컴포넌트 데이터 옵션 값 변경 -->