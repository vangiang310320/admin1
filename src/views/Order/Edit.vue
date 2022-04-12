<template>
    <v-dialog
        v-model="dialog"
        width="640px"
    >
        <v-card flat tile> 
            <v-card-title class="primary">
                <span style="color:white;">Sửa Đơn hàng</span>
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
                               v-model="data.customerId"
                                    label="Mã khách hàng"
                               ></v-text-field>
                           </v-col>
                        </v-row> 
                         <v-row>
                           <v-col >
                               <v-text-field
                               v-model="data.totalMoney"
                                    label="Tổng tiền"
                               ></v-text-field>
                           </v-col>
                        </v-row> 
                         <v-row>
                           <v-col >
                               <v-text-field
                               v-model="data.payment"
                                    label="Thanh toán"
                               ></v-text-field>
                           </v-col>
                        </v-row>
                        <v-row>
                           <v-col >
                               <v-text-field
                               v-model="data.bookingDate"
                                    label="Ngày đặt"
                               ></v-text-field>
                           </v-col>
                        </v-row> 
                        <v-row>
                           <v-col >
                               <v-text-field
                               v-model="data.deliveryData"
                                    label="thông tin đơn hàng"
                               ></v-text-field>
                           </v-col>
                        </v-row> 
                        <v-row>
                           <v-col >
                               <v-text-field
                               v-model="data.shippingWay"
                                    label="Hình thức vận chuyển"
                               ></v-text-field>
                           </v-col>
                        </v-row> 
                        <v-row>
                           <v-col >
                               <v-text-field
                               v-model="data.sate"
                                    label="Trạng thái"
                               ></v-text-field>
                           </v-col>
                        </v-row> 
                        <v-row>
                           <v-col >
                               <v-text-field
                               v-model="data.note"
                                    label="Ghi chú"
                               ></v-text-field>
                           </v-col>
                        </v-row> 
                        <v-row>
                           <v-col >
                               <v-text-field
                               v-model="data.transportFee"
                                    label="Phí vận chuyển"
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
                @click="updateOrder"
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
                customerId:'',
                totalMoney:'',
                payment:'',
                bookingDate:'',
                deliveryData:'',
                shippingWay:'',
                sate:'',
                note:'',
                transportFee:'',
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
        updateOrder(){
            axios.put('https://localhost:44306/api/Order/UpdateOrder',this.data)
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
            this.data.customerId = this.currentItem.customerId;
            this.data.totalMoney = this.currentItem.totalMoney;
            this.data.payment = this.currentItem.payment;
            this.data.bookingDate = this.currentItem.bookingDate;
            this.data.deliveryData = this.currentItem.deliveryData;
            this.data.shippingWay = this.currentItem.shippingWay;
            this.data.sate = this.currentItem.sate;
            this.data.note = this.currentItem.note;
            this.data.transportFee = this.currentItem.transportFee;
            this.data.id = this.currentItem.id;
        }
    }
}
</script>

<style>

</style>