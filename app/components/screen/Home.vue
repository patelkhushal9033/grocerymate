<template>
  <StackLayout>
    <Label text="Shopping List" textWrap="true" class="title_heading"/>
    <ScrollView orientation="horizontal" scrollBarIndicatorVisible="false">
      <StackLayout orientation="horizontal">
          <button text="Add New" backgroundColor="white" color="#1B1C20" height="90" textWrap="true" class="shoppingListCard"/>
          <button 
            v-for="shoppingList in this.shoppingLists"
            :key="shoppingList.id"
            :text="shoppingList.name" height="90" textWrap="true" class="shoppingListCard"
            @tap="ViewShoppingList(shoppingList.id)"/>
      </StackLayout>
    </ScrollView>
    
      <StackLayout class="homeStockWrapper" backgroundColor="#F0F3F4" height="100%">
        <ScrollView scrollBarIndicatorVisible="false">
          <StackLayout>
            <!-- Out of Stock Section -->
            <Label text="Out of Stock" textWrap="true" class="title_heading"/>
              
            <!-- About to finish Section  -->
            <Label text="About to Finish" textWrap="true" class="title_heading"/>
              <StackLayout>
                <FlexboxLayout
                  v-for="lowStockItem in this.lowStockItems"
                  :key="lowStockItem.id"
                  alignItems="center"
                  class="card_layout"
                  height="62">
                  <GridLayout rows="auto" columns="auto" marginLeft="15" width="10%">
                      <FlexboxLayout class="priority-circle"/>
                  </GridLayout>
                  <Label text="item.name" class="card_label" width="60%" padding="0"/>
                  <FlexboxLayout class="card_controls" width="25%">
                      <FlexboxLayout flexDirection="column" justifyContent="center" height="62">
                          <Label text="item.qty" class="card_qty_label" />
                          <Label text="item.unit" class="card_qty_label" fontSize="11%" fontWeight="400"/>
                      </FlexboxLayout>
                  </FlexboxLayout>
                </FlexboxLayout>
              </StackLayout>
              
            <!-- In Stock Section -->
            <Label text="In Stock" textWrap="true" class="title_heading"/>
            <StackLayout 
                orientation="horizontal">
                <FlexboxLayout
                    alignItems="center"
                    class="card_layout"
                    height="62">
                    <GridLayout rows="auto" columns="auto" marginLeft="15" width="10%">
                        <FlexboxLayout class="priority-circle"/>
                    </GridLayout>
                    <Label text="item.name" class="card_label" width="60%" padding="0"/>
                    <FlexboxLayout class="card_controls" width="25%">
                        <FlexboxLayout flexDirection="column" justifyContent="center" height="62">
                            <Label text="item.qty" class="card_qty_label" />
                            <Label text="item.unit" class="card_qty_label" fontSize="11%" fontWeight="400"/>
                        </FlexboxLayout>
                    </FlexboxLayout>
                </FlexboxLayout>
              </StackLayout>
          </StackLayout>
        </ScrollView>
      </StackLayout>
  </StackLayout>
</template>

<script>
import ShoppingList from "./ShoppingList"
import { mapGetters } from 'vuex';

export default {
  data() {
    return {}
  },
  computed: {
    shoppingLists() {
       return this.$store.state.shoppingLists
    },
    lowStockItems() {
       return this.$store.state.lowStockItems
    } 
  },
  methods: {
    ViewShoppingList(id) {
      this.$navigateTo(ShoppingList, {props: { id: id }});
    }
  }
}
</script>

<style>

</style>