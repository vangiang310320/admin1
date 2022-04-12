<template>
    <v-dialog
        v-model="dialog"
        width="640px"
    >
        <v-card flat tile> 
            <v-card-title class="primary">
                <span style="color:white;">Cập nhật thể loại</span>
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
                               v-model="data.categoryName"
                                    label="Tin tức"
                               ></v-text-field>
                           </v-col>
                        </v-row> 
                         <v-row>
                           <v-col >
                               <v-text-field
                               v-model="data.description"
                                    label="Chi tiết"
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
                @click="updateCategory"
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
                categoryName:'',
                description:'',
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
        updateCategory(){
            axios.put('https://localhost:44306/api/Category/UpdateCategory',this.data)
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
            this.data.categoryName = this.currentItem.categoryName;
            this.data.description = this.currentItem.description;
            this.data.id = this.currentItem.id;
        }
    }
}
</script>

<style>

</style>