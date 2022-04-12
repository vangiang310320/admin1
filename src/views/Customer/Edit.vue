<template>
    <v-dialog
        v-model="dialog"
        width="640px"
    >
        <v-card flat tile> 
            <v-card-title class="primary">
                <span style="color:white;">Cập nhật khách hàng</span>
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
                               v-model="data.customerName"
                                    label="tên khách hàng"
                               ></v-text-field>
                           </v-col>
                        </v-row> 
                         <v-row>
                           <v-col >
                               <v-text-field
                               v-model="data.gender"
                                    label="Giới tính"
                               ></v-text-field>
                           </v-col>
                        </v-row>
                        <v-row>
                           <v-col >
                               <v-text-field
                               v-model="data.address"
                                    label="Địa chỉ"
                               ></v-text-field>
                           </v-col>
                        </v-row> 
                        <v-row>
                           <v-col >
                               <v-text-field
                               v-model="data.email"
                                    label="Email"
                               ></v-text-field>
                           </v-col>
                        </v-row> 
                        <v-row>
                           <v-col >
                               <v-text-field
                               v-model="data.phone"
                                    label="Số điện thoại"
                               ></v-text-field>
                           </v-col>
                        </v-row> 
                        <v-row>
                           <v-col >
                               <v-text-field
                               v-model="data.avartar"
                                    label="Ảnh"
                               ></v-text-field>
                           </v-col>
                        </v-row> 
                        <v-row>
                           <v-col >
                               <v-text-field
                               v-model="data.user"
                                    label="Tên tài khoản"
                               ></v-text-field>
                           </v-col>
                        </v-row> 
                        <v-row>
                           <v-col >
                               <v-text-field
                               v-model="data.passWord"
                                    label="Mật khẩu"
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
                @click="updateCustomer"
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
                customerName:'',
                gender:'',
                address:'',
                email:'',
                phone:'',
                avartar:'',
                user:'',
                passWord:'',
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
        updateCustomer(){
            axios.put('https://localhost:44306/api/Customer/UpdateCustomer',this.data)
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
            this.data.customerName = this.currentItem.customerName;
            this.data.gender = this.currentItem.gender;
            this.data.address = this.currentItem.address;
            this.data.email = this.currentItem.email;
            this.data.phone = this.currentItem.phone;
            this.data.avartar = this.currentItem.avartar;
            this.data.user = this.currentItem.user;
            this.data.passWord = this.currentItem.passWord;
            this.data.id = this.currentItem.id;
        }
    }
}
</script>

<style>

</style>