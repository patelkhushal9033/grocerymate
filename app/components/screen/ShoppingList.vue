<template>
<Page>
    <DockLayout>
        <Button dock="bottom" text="Done" height="60" class="actionButton"/>
        <StackLayout>
            <Label text="Items to Pickup" textWrap="true" class="title_heading"
                :visibility="this.itemsToPickup.length !=0 ? 'visible' : 'collapsed'"/>
            <ScrollView>
                <StackLayout>
                    <FlexboxLayout
                        alignItems="center"
                        class="card_layout"
                        height="62"
                        v-for="(item, index) in itemsToPickup"
                        :key="index">
                        <GridLayout rows="auto" columns="auto" marginLeft="15" width="10%">
                            <FlexboxLayout class="priority-circle"  :class="item.priority"/>
                        </GridLayout>
                        <Label :text="item.name" class="card_label" width="35%" padding="0"/>
                        <FlexboxLayout class="card_controls" width="40%">
                            <GridLayout class="card_button_layout" height="48">
                                <Image src="~/assets/images/minus_icon.png" class="card_button"/>                      
                            </GridLayout>
                            <FlexboxLayout flexDirection="column" justifyContent="center" class="card_button_layout" height="48">
                                <Label :text="item.qty" class="card_qty_label" />
                                <Label :text="item.unit" class="card_qty_label" fontSize="10%" fontWeight="400"/>
                            </FlexboxLayout>
                            <GridLayout class="card_button_layout" height="48">
                                <Image src="~/assets/images/plus_icon.png" class="card_button"/>                      
                            </GridLayout>
                        </FlexboxLayout>
                        <FlexboxLayout width="20%" alignContent="center"  marginRight="15" justifyContent="flex-end">
                            <Image src="~/assets/images/check.png" class="card_button" width="35" height="35"
                                @tap="item.inBasket = true"/>                      
                        </FlexboxLayout>
                    </FlexboxLayout>
                    <Label text="In Basket" textWrap="true" class="title_heading"
                        :visibility="this.itemsInBasket.length !=0 ? 'visible' : 'collapsed'"/>
                    <StackLayout 
                        v-for="(item, index) in itemsInBasket"
                        :key="index"
                        orientation="horizontal" 
                        marginRight="3%" 
                        opacity="0.8">
                        <FlexboxLayout
                            alignItems="center"
                            class="card_layout"
                            height="62"
                            width="75%"
                            marginRight="0">
                            <GridLayout rows="auto" columns="auto" marginLeft="15" width="10%">
                                <FlexboxLayout class="priority-circle" :class="item.priority"/>
                            </GridLayout>
                            <Label :text="item.name" class="card_label" width="65%" padding="0"/>
                            <FlexboxLayout class="card_controls" width="25%">
                                <FlexboxLayout flexDirection="column" justifyContent="center" height="62">
                                    <Label :text="item.qty" class="card_qty_label" />
                                    <Label :text="item.unit" class="card_qty_label" fontSize="11%" fontWeight="400"/>
                                </FlexboxLayout>
                            </FlexboxLayout>
                        </FlexboxLayout>
                        <FlexboxLayout alignContent="center" class="checked_card_layout" justifyContent="flex-end">
                            <Image src="~/assets/images/checked.png" class="card_button" width="35" height="35" marginRight="15"
                                @tap="item.inBasket = false"/>                      
                        </FlexboxLayout>
                    </StackLayout>
                </StackLayout>
            </ScrollView>
        </StackLayout>
    </DockLayout>
</Page>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: ['id'],
    data() {
        return {
            copiedShoppingList: ''
        }
    },
    created() {
        this.saveData
    },
    computed: {
        ...mapGetters(['getShoppingListDetailsById']),
        saveData: function() {
            return this.copiedShoppingList = this.getShoppingListData(this.id)
        },
        itemsToPickup: function() {
            return this.copiedShoppingList.items.filter(items => {
                console.log(items.name + ' = ' + items.inBasket);
                return items.inBasket == false
            })
        },
        itemsInBasket: function() {
            return this.copiedShoppingList.items.filter(items => {
                return items.inBasket == true
            })
        }
    },
    methods: {
        getShoppingListData(id) {
          return JSON.parse(JSON.stringify(this.getShoppingListDetailsById(id)))
        }
    }
}
</script>

<style scoped>

.card_label {
    padding-left: 0 !important;
}

.checked {
    margin-right: 15;
}


</style>