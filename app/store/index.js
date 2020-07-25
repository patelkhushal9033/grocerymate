import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import getters from './getters';
import actions from './actions'


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        shoppingLists: [
            {
              id: '1',
              name: 'Coles Shopping',
              items: [
                {
                  id: '1',
                  name: 'Milk',
                  qty: '2',
                  unit: 'litre',
                  priority: 'high',
                  inBasket: false
                },
                {
                  id: '2',
                  name: 'Bread',
                  qty: '2',
                  unit: 'pack',
                  priority: 'high',
                  inBasket: false
                },
                {
                  id: '3',
                  name: 'Potato',
                  qty: '2',
                  unit: 'Kilo',
                  priority: 'low',
                  inBasket: false
                },
                {
                  id: '4',
                  name: 'Egg',
                  qty: '1',
                  unit: 'pack',
                  priority: 'medium',
                  inBasket: false
                },
                {
                  id: '5',
                  name: 'Butter Beans',
                  qty: '3',
                  unit: 'pack',
                  priority: 'low',
                  inBasket: false
                }
              ]
            },
            {
              id: '2',
              name: 'Woolworth Shopping',
              items: [
                {
                  id: '1',
                  name: 'Woolworth List 1',
                  qty: '1',
                  unit: 'pack',
                  priority: 'medium',
                  inBasket: false
                },
                {
                  id: '2',
                  name: 'Woolworth list 2',
                  qty: '1',
                  unit: 'pack',
                  priority: 'high',
                  inBasket: false
                }
              ]
            },
            {
              id: '3',
              name: 'Quality Grocery',
              items: [
                {
                  id: '1',
                  name: 'Quality List 1',
                  qty: '1',
                  unit: 'pack',
                  priority: 'high',
                  inBasket: false
                }
              ]
            }
        ],
        lowStockItems: [
          {
            id: '1',
            name: 'Low Stock',
            qty: '1',
            unit: 'pack',
            priority: 'meduim',
            inBasket: false
          },
          {
            id: '2',
            name: 'Low Stock',
            qty: '1',
            unit: 'pack',
            priority: 'high',
            inBasket: false
          },
          {
            id: '3',
            name: 'Low Stock',
            qty: '1',
            unit: 'pack',
            priority: 'high',
            inBasket: false
          },
          {
            id: '4',
            name: 'Low Stock',
            qty: '1',
            unit: 'pack',
            priority: 'high',
            inBasket: false
          },
          {
            id: '5',
            name: 'Low Stock',
            qty: '1',
            unit: 'pack',
            priority: 'high',
            inBasket: false
          }
        ]
      },
      actions,
      getters,
      mutations,
}) 

// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {

//   },
//   mutations: {

//   },
//   actions: {

//   }
// });
