<template>
    <StackLayout>
        <Label text="Inventory" textWrap="true" class="title_heading" />
        <ScrollView>
            <StackLayout>
                <FlexboxLayout 
                    class="card_layout"
                    height="72"
                    justifyContent="center"
                    alignItems="center"
                    @tap="ToSecond('pass')">
                        <Label text="Add New" class="card_add_new_label" />
                </FlexboxLayout>
                <FlexboxLayout 
                    v-for="item in items"
                    :key="item.id"
                    alignItems="center"
                    class="card_layout"
                    :visibility="item.qty!=0 ? 'visible' : 'collapsed'">
                    <Label 
                        :text="item.name" 
                        class="card_label"/>
                    <FlexboxLayout class="card_controls">
                        <GridLayout class="card_button_layout"
                            @tap="changeQty('remove', item)">
                            <Image 
                                src="~/assets/images/minus_icon.png" 
                                class="card_button"/>                      
                        </GridLayout>
                        <FlexboxLayout flexDirection="column" justifyContent="center" class="card_button_layout">
                            <Label :text="item.qty" class="card_qty_label" />
                            <Label :text="item.unit" class="card_qty_label" fontSize="10%" fontWeight="400"/>
                        </FlexboxLayout>
                        <GridLayout class="card_button_layout"
                            @tap="changeQty('add', item)">
                            <Image 
                                src="~/assets/images/plus_icon.png" 
                                class="card_button"/>                      
                        </GridLayout>
                    </FlexboxLayout>
                </FlexboxLayout>
            </StackLayout>
        </ScrollView>
    </StackLayout>
</template>

<script>
import ShoppingList from "./ShoppingList"


export default {
    data() {
        return {
            items: [
                {
                    id: 1,
                    name: 'Bread',
                    unit: 'Pack',
                    qty: '4',
                },
                {
                    id: 2,
                    name: 'Milk',
                    unit: 'Litre',
                    qty: '3',
                },
                {
                    id: 3,
                    name: 'Ice Cream',
                    unit: 'Litre',
                    qty: '3',
                },
                {
                    id: 4,
                    name: 'Egg',
                    unit: 'Piece',
                    qty: '24',
                },
                {
                    id: 5,
                    name: 'Paneer',
                    unit: 'Pack',
                    qty: '1',
                },
                {
                    id: 6,
                    name: 'Frozen Peas',
                    unit: 'Pack',
                    qty: '2',
                },
                {
                    id: 7,
                    name: 'Frozen Gavar',
                    unit: 'Pack',
                    qty: '2',
                },
                {
                    id: 8,
                    name: 'Frozen Tindola',
                    unit: 'Pack',
                    qty: '3',
                },
                {
                    id: 9,
                    name: 'Eggplant',
                    unit: 'Piece',
                    qty: '1',
                },
                {
                    id: 10,
                    name: 'Onion',
                    unit: 'Killo',
                    qty: '2',
                },
                {
                    id: 11,
                    name: 'Tomato',
                    unit: 'Killo',
                    qty: '2',
                },
                {
                    id: 12,
                    name: 'Banana',
                    unit: 'Piece',
                    qty: '12',
                },
            ] 
        }
    },

    methods: {
        changeQty(action, item) {
            if(action == 'remove')
            {
                if(item.qty != 0)
                {
                    item.qty--
                }
            }
            else if(action == 'add') 
            {
                item.qty++
            }
        },
        ToSecond(abc) {
        this.$navigateTo(ShoppingList);
        }
    }
}
</script>

<style scoped>

</style>

</style>