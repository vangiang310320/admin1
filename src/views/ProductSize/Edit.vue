<template>
    <v-dialog
        v-model="dialog"
        width="640px"
    >
        <v-card flat tile> 
            <v-card-title class="primary">
                <span style="color:white;">Sửa kích cỡ sản phẩm</span>
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-container> 
                        <v-row>
                           <v-col >
                               <v-text-field
                               v-model="data.id"
                                    label="Mã"
                               ></v-text-field>
                           </v-col>
                        </v-row> 
                         <v-row>
                           <v-col >
                               <v-text-field
                               v-model="data.size"
                                    label="Kích cỡ"
                               ></v-text-field>
                           </v-col>
                        </v-row> 
                         <v-row>
                           <v-col >
                               <v-text-field
                               v-model="data.active"
                                    label="Hoạt động"
                               ></v-text-field>
                           </v-col>
                        </v-row>
                        <v-row>
                           <v-col >
                               <v-text-field
                               v-model="data.productId"
                                    label="Mã sản phẩm"
                               ></v-text-field>
                           </v-col>
                        </v-row>
                    </v-container>
                </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn 
                color="grey darken-2"
                class="mr-2"
                dark
                @click="$emit('close')"
                >Huỷ</v-btn>
                 <v-btn 
                color="primary"
                class="mr-2"
                dark
                @click="updateProductSize"
                >Cập nhật</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import axios from 'axios';
export default {
    name:'Edit',
    data(){
        return{
            data:{
                id:'',
                size:'',
                active:'',
                productId:'',
            },
        }
    },
    props:['dialogEdit','currentItem'],
    computed:{
        dialog:{
            get(){
                return this.dialogEdit;
            },
            set(value){
                if(!value){
                    this.$emit('close')
                }
            }
        }
    },
    methods:{
        updateProductSize(){
            axios.put('https://localhost:44306/api/ProductSize/UpdateProductSize',this.data)
            .then((res)=>{
                alert("Cập nhật thành công")
                this.$emit('close')
                this.$emit('updateData')
            })
            .catch((error)=>{
                console.log(error)
            });
        }
    },
    watch:{
        currentItem:function(){
            this.data.size = this.currentItem.size;
            this.data.active = this.currentItem.active;
            this.data.productId = this.currentItem.productId;
            this.data.id = this.currentItem.id;
        }
    }
}
</script>

<style>

</style>