<template>
  <StackLayout orientation="Horizontal">
    <FlexboxLayout 
      v-for="menu in menus"
      :key="menu.id"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      class="tab"
      :class="{active_tab: menu.isActive == true}"
      @tap="changePage(menu.id)">
      <Image
        class="tab_image"
        :src="menu.icon"/>
      <Label
        class="tab_title" 
        :text="menu.title"/>
    </FlexboxLayout>
    </StackLayout>
</template>

<script>
import { GestureEventData } from "tns-core-modules/ui/gestures";
import Home from './screen/Home.vue';
import Inventory from './screen/Inventory.vue';

export default {
  
  data() {
    return {
      menus: [
        {
          id: 1,
          title: 'Home',
          icon: '~/assets/images/internet.png',
          isActive: true,
          page: Home
        },
        {
          id: 2,
          title: 'Inventory',
          icon: '~/assets/images/internet.png',
          isActive: false,
          page: Inventory
        }
      ]
    }
  },
  methods: {
    changePage(menuId ) {
      if(menuId == 1) {
        this.$root.$emit('HomeVisibility', true)
        this.menus[0].isActive = true
        this.menus[1].isActive = false
      }
      else {
        this.$root.$emit('InventoryVisibility', true)
        this.menus[0].isActive = false
        this.menus[1].isActive = true
      }
    }
  }
}
</script>

<style >
.active_tab {
  background-color: #D97D54 !important;
  opacity: 1 !important;
  color: white;
}
</style>