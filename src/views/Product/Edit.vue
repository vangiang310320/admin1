<template>
    <v-dialog
        v-model="dialog"
        width="640px"
    >
        <v-card flat tile> 
            <v-card-title class="primary">
                <span style="color:white;">Sửa Sản phẩm</span>
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
                               v-model="data.productName"
                                    label="Tên sản phẩm"
                               ></v-text-field>
                           </v-col>
                        </v-row> 
                         <v-row>
                           <v-col >
                               <v-text-field
                               v-model="data.sale"
                                    label="Giá bán"
                               ></v-text-field>
                           </v-col>
                        </v-row>
                        <v-row>
                           <v-col >
                               <v-text-field
                               v-model="data.price"
                                    label="Giá"
                               ></v-text-field>
                           </v-col>
                        </v-row> 
                        <v-row>
                           <v-col >
                               <v-text-field
                               v-model="data.description"
                                    label="Mô tả"
                               ></v-text-field>
                           </v-col>
                        </v-row> 
                        <v-row>
                           <v-col >
                               <v-text-field
                               v-model="data.discount"
                                    label="Giá giảm"
                               ></v-text-field>
                           </v-col>
                        </v-row> 
                        <v-row>
                           <v-col >
                               <v-text-field
                               v-model="data.viewcount"
                                    label="Lượng xem"
                               ></v-text-field>
                           </v-col>
                        </v-row>
                        <v-row>
                           <v-col >
                               <v-text-field
                               v-model="data.image"
                                    label="Ảnh"
                               ></v-text-field>
                           </v-col>
                        </v-row>
                        <v-row>
                           <v-col >
                               <v-text-field
                               v-model="data.categoryId"
                                    label="Mã thể loại"
                               ></v-text-field>
                           </v-col>
                        </v-row> 
                        <v-row>
                           <v-col >
                               <v-text-field
                               v-model="data.supplierId"
                                    label="Mã nha cung cap"
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
                @click="updateProduct"
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
                productName:'',
                sale:'',
                price:'',
                description:'',
                discount:'',
                viewcount:'',
                image:'',
                categoryId:'',
                supplierId:'',
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
        updateProduct(){
            axios.put('https://localhost:44306/api/Product/UpdateProduct',this.data)
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
            this.data.productName = this.currentItem.productName;
            this.data.sale = this.currentItem.sale;
            this.data.price = this.currentItem.price;
            this.data.description = this.currentItem.description;
            this.data.discount = this.currentItem.discount;
            this.data.viewcount = this.currentItem.viewcount;
            this.data.image = this.currentItem.image;
            this.data.categoryId = this.currentItem.categoryId;
            this.data.id = this.currentItem.id;
        }
    }
}
</script>

<style>

</style>