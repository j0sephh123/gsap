import Vue from 'vue'
import Vuex from 'vuex'

import todos from './todos';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todos
  },
  state: {
    tools: [
      {
        id: 1, 
        component: 'CPU',
        img: '@/images/cpu.jpg'
      },
      {id: 2, 
        component: 'CPU Cooler',
        img: '@/images/cpu cooler.jpg',
      },
      {id: 3, 
        component: 'Motherboard',
        img: '@/images/motherboard.jpg',
      },
      {id: 4, 
        component: 'Memory',
        img: '@/images/memory.jpg',
      },
      {id: 5, 
        component: 'Storage',
        img: '@/images/storage.jpg',
      },
      {id: 6, 
        component: 'Video',
        img: '@/images/video.jpg',
      },
      {id: 7, 
        component: 'Case',
        img: '@/images/case.jpg',
      },
      {id: 8, 
        component: 'Power',
        img: '@/images/power.jpg',
      },
    ],
  },
  mutations: {
    
  },
  actions: {

  },
  getters: {

  }
})