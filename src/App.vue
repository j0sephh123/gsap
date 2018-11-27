<template>
<div id="app"> <!-- #app is being mounted in main.js. Don't remove the id ! -->
  <nav class="">

    <div class="navbar-start">
      <router-link class="navbar-item" to="/" exact="">Home</router-link>
    </div>
  </nav>
  <router-view/>
  
</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  
  data() {
    return {
      
    };
  },
  methods: {},
  computed: {
    ...mapGetters({
      
    })
  },
  watch: {
    
  },
  async mounted() {
    
  }
};
</script>

<style>
.router-link-active {
  text-decoration: underline;
}
.border {
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  border-radius: 6px;
  color: #4a4a4a;
}
*{
  
}
</style>
