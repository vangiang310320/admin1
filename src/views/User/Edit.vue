<template>
    <v-dialog
        v-model="dialog"
        width="640px"
    >
        <v-card flat tile> 
            <v-card-title class="primary">
                <span style="color:white;">Sửa người dùng</span>
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
                               v-model="data.userName"
                                    label="Tên Tài khoản"
                               ></v-text-field>
                           </v-col>
                        </v-row> 
                         <v-row>
                           <v-col >
                               <v-text-field
                               v-model="data.password"
                                    label="Mật khẩu"
                               ></v-text-field>
                           </v-col>
                        </v-row>
                        <v-row>
                           <v-col >
                               <v-text-field
                               v-model="data.fullName"
                                    label="Tên đầy đủ"
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
                               v-model="data.active"
                                    label="Hoạt động"
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
                @click="updateUser"
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
                userName:'',
                password:'',
                fullName:'',
                email:'',
                active:'',
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
        updateUser(){
            axios.put('https://localhost:44306/api/User/UpdateUser',this.data)
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
            this.data.userName = this.currentItem.userName;
            this.data.password = this.currentItem.password;
            this.data.fullName = this.currentItem.fullName;
            this.data.email = this.currentItem.email;
            this.data.active = this.currentItem.active;
            this.data.id = this.currentItem.id;
        }
    }
}
</script>

<style>

</style>