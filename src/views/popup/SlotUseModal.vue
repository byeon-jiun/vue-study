<SlotModalLayout>
  <template v-slot:header>
    <h1>팝업 헤더</h1>
  </template>
  <template v-slot:main>
    <h1>팝업 메인</h1>
  </template>
  <template v-slot:footer>
    <button type="button">닫기</button>
  </template>
</SlotModalLayout>
<script>
import SlotModalLayout from "@/views/popup/SlotModalLayout";
export default {
  components:{
    SlotModalLayout
  }
}
</script>

<style scoped>

</style>
