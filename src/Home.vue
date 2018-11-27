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
    class="button">Click</button>
</div>
</template>

<script>
import {TweenMax, TimelineLite} from 'gsap';
export default {
  data() {
    return {
      item1: 0,
    }
  },
  methods: {
    activate() {
      const tl = new TimelineLite();
        tl.
          to('#item1', 0.5, {
            x: this.item1 += 200,
            onComplete() {
              console.log('ready')
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
