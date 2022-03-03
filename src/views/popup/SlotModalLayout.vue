<template>
<div class="modal-container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot name="main"></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
</template>
<script>
export default {
  name: "SlotModalLayout"
}
</script>

<style scoped>

</style>
<!-- 팝업 기본틀 컴포넌트를 slot 를 이용해서 만들면, 팝업디자인의 통일성을 유지하면서 컨텐츠에 해당하는부분만 각기 다르게 작성 하면 된다.(slot에 해당하는 코드만)-->