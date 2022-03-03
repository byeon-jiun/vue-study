<template>
  <child-component @send-message="sendMessage" />
</template>

<script>
import ChildComponent from "@/components/child/ChildComponent4";
export default {
  components: {ChildComponent},
  methods:{
    sendMessage(data){
      alert(data);
    }
  }
}
</script>

<style scoped>

</style>
<!-- 커스텀 이벤트  @send-message는 자식 컴포넌트에서 $emit 으로 호출하게된다.-->