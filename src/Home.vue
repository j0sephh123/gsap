<template>
<div class="section box column is-offset-1 is-10">
  <div class="item" id="item1">1</div>
  <div class="item" id="item2">2</div>
  <div class="item" id="item3">3</div>
  <div class="item" id="item4">4</div>
  <div class="item" id="item5">5</div>
  <hr>
  <button
    @click="activate()" 
    class="button">Click
  </button>

  <input 
    class="slider is-fullwidth" 
    :step="10" 
    :min="0" 
    :max="100" 
    :value="50" 
    type="range">

</div>
</template>

<script>
import {TweenMax, TimelineLite} from 'gsap';


export default {
  data() {
    return {
      item1: 100,
    }
  },
  methods: {
    setter(arg1, arg2) {
      this[arg1] += arg2;
    },
    activate() {
      const tl = new TimelineLite({
        onStart() {
          // console.log(this);
          //console.log('TimelineLite on start');
          // .call(app.activateTc().showTc, [], this, '+=0')
          // .call(startCtaArrow, [], this, '+=0.2')
        },
        onComplete() {
          //console.log('TimelineLite on complete');
        },
      });
        tl
          .call(this.setter, ['item1', 100])
          .to('#item1', 0.8, {
            x: this.item1,
            onStart() {
              console.log('item1 start');
            },
            onComplete() {
              console.log('item1 complete')
            }
          });
    }
  },
  async mounted(){
    
  },
}
</script>
<style scoped>

.item {
  text-align: center;
  vertical-align: middle;
  line-height: 50px;
  width: 50px;
  height: 50px;
  border: 1px solid black;
  margin: 2px;
  font-size: 25px;
}

</style>
