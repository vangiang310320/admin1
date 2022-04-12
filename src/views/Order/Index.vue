<template>
  <div class="dashboard">
    <v-subheader>
      <v-icon class="mr-2">mdi-home</v-icon>
      <h3>Đơn hàng</h3>
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        small
        dark
        elevation="3"
        fab
        @click="dialogAdd = true"
      >
        <v-icon color="white">mdi-account-plus</v-icon>
      </v-btn>
    </v-subheader>
    <v-row class="mt-0">
      <v-col>
        <v-card>
          <v-data-table :headers="headers" :items="order" :items-per-page="5">
            <template v-slot:item="{ item }">
              <tr>
                <td>{{ item.id }}</td>
                <td>{{ item.customerId }}</td>
                <td>{{ item.totaMoney }}</td>
                <td>{{ item.payment }}</td>
                <td>{{ item.bookingDate }}</td>
                <td>{{ item.deliveryData }}</td>
                <td>{{ item.shippingWay }}</td>
                <td>{{ item.sate }}</td>
                <td>{{ item.note }}</td>
                <td>{{ item.transportFee }}</td>
                <td>
                  <div class="d-flex justify-end align-center">
                    <v-btn
                      fab
                      dark
                      elevation="3"
                      class="mr-3"
                      x-small
                      color="blue-grey"
                      @click="
                        dialogEdit = true;
                        currentItem = item;
                      "
                    >
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn
                      fab
                      dark
                      x-small
                      color="red"
                      @click="
                        dialogDelete = true;
                        orderId = item.id;
                      "
                    >
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </div>
                </td>
              </tr>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialogDelete" max-width="450px" class="dialog-delete">
      <v-card>
        <v-alert prominent type="error">
          <v-row align="center">
            <v-col class="text-center text-h5" cols="11">
              Bạn có đồng ý xóa không?
            </v-col>
          </v-row>
          <v-row align="center">
            <v-spacer></v-spacer>
            <v-col cols="5">
              <v-btn @click="deleteorder" text>
                Đồng ý
              </v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn @click="dialogDelete = false" text>
                Hủy bỏ
              </v-btn>
            </v-col>
          </v-row>
        </v-alert>
      </v-card>
    </v-dialog>
    <add
      :dialogAdd="dialogAdd"
      @close="dialogAdd = false"
      @updateData="getListOrder"
    />
    <edit
      :dialogEdit="dialogEdit"
      @close="dialogEdit = false"
      @update="getListOrder"
      :currentItem="currentItem"
    />
  </div>
</template>

<script>
import axios from "axios";
import Add from "./Add.vue";
import Edit from "./Edit.vue";
export default {
  components: { Add, Edit },
  name: "Order",
  data() {
    return {
      headers: [
        { text: "Id", value: "id" },
        { text: "Mã khách hàng", value: "customerId" },
        { text: "Tổng tiền", value: "totalMoney" },
        { text: "Thanh toán", value: "payment" },
        { text: "Ngày đặt", value: "bookingDate" },
        { text: "thông tin đơn hàng", value: "deliveryData" },
        { text: "Hình thức vận chuyển", value: "shippingWay" },
        { text: "Trạng thái", value: "sate" },
        { text: "Ghi chú", value: "note" },
        { text: "Phí vận chuyển", value: "TransportFee" },
        { text: "Chức năng", value: "actions", align: "right" }
      ],
      order: [],
      dialogAdd: false,
      dialogEdit: false,
      dialogDelete: false,
      currentItem: null,
      orderId: null
    };
  },
  methods: {
    getListOrder() {
      axios
        .get("https://localhost:44306/api/Order/GetAllOrder")
        .then(res => {
          this.order = res.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    deleteOrder() {
      axios
        .delete(
          "https://localhost:44306/api/Order/DeleteOrder?id=" + this.id
        )
        .then(res => {
          if (res) {
            var newArr = this.order.filter(x => x.id != this.orderId);
            this.order = newArr;
            this.dialogDelete = false;
          }
        });
    }
  },
  created() {
    this.getListOrder();
  }
};
</script>

<style></style>
