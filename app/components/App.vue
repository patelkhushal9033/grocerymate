<template>
    <Page>
        <ActionBar :title=msg>
        </ActionBar>
        <DockLayout stretchLastChild="false">
            <Label text="Searchbar space" textWrap="true"  dock="top" height="7%" backgroundColor="white" class="search_bar"/>
            <Inventory height="83%" dock="top" 
                :visibility="this.isInventoryVisible ? 'visible' : 'collapsed'"/>
            <Home height="83%" dock="top"
                :visibility="this.isHomeVisible ? 'visible' : 'collapsed'"/>
            <Tab backgroundColor="white" dock="bottom" height="10%"/>
        </DockLayout>
    </Page>
</template>

<script >
  import Tab from "./Tab"
  import Inventory from "./screen/Inventory"
  import ShoppingList from "./screen/ShoppingList"
  import Home from "./screen/Home"
  export default {
    data() {
      return {
        msg: 'Grocery Mate',
        isInventoryVisible: false,
        isHomeVisible: true
      }
    },
    mounted() {
      // Home Visibility
      this.$root.$on('HomeVisibility', (homeVisible) => {
        this.isHomeVisible = homeVisible
        this.isInventoryVisible = false
      })

      // Inventory Visibility
      this.$root.$on('InventoryVisibility', (inventoryVisible) => {
        this.isInventoryVisible = inventoryVisible
        this.isHomeVisible = false
      })
    },
    components: {
        Tab,
        Inventory,
        Home,
        ShoppingList
      }
  }
</script>

<style>
</style>
