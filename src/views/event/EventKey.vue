<template>
 <div>
   <input value="enter" v-on:keyup.enter="enter()"> <br>
   <input value="tab" v-on:keyup.tab="tab()"> <br>
   <input value="del" v-on:keyup.delete="del()"> <br>
   <input value="esc" v-on:keyup.esc="esc()"> <br>
   <input value="space" v-on:keyup.space="space()"> <br>
   <input value="up" v-on:keyup.up="up()"> <br>
   <input value="down" v-on:keyup.down="down()"> <br>
   <input value="left" v-on:keyup.left="left()"> <br>
   <input value="right" v-on:keyup.right="right()"> <br>
   <input value="alt+enter" v-on:keyup.alt.enter="altEnter()"> <br>
   <input value="ctrl+click" v-on:click.ctrl="ctrlClick()" >
 </div>
</template>

<script>
export default {
  methods:{
    enter(){
      alert('enter');
    },
    tab(){
      alert('tab');
    },
    del(){
      alert('del');
    },
    esc(){
      alert('esc');
    },
    space(){
      alert('space');
    },
    up(){
      alert('up');
    },
    down(){
      alert('down');
    },
    left(){
      alert('left');
    },
    right(){
      alert('right');
    },
    altEnter(){
      alert('alt+enter');
    },
    ctrlClick(){
      alert('ctrl+click');
    }
  }
}
</script>

<style scoped>

</style>
<!-- Control, shift, alt 키와 같이 사용 되는 특수키도 처리 할 수 있다.-->