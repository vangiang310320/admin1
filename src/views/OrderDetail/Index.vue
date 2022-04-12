<template>
  <div class="dashboard">
    <v-subheader>
      <v-icon class="mr-2">mdi-home</v-icon>
      <h3>Chi tiết đơn hàng</h3>
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
          <v-data-table
            :headers="headers"
            :items="orderDetail"
            :items-per-page="5"
          >
            <template v-slot:item="{ item }">
              <tr>
                <td>{{ item.id }}</td>
                <td>{{ item.quantity }}</td>
                <td>{{ item.productId }}</td>
                <td>{{ item.OrderId }}</td>
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
                        orderDetailId = item.id;
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
              <v-btn @click="deleteorderDetail" text>
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
      @updateData="getListOrderDetail"
    />
    <edit
      :dialogEdit="dialogEdit"
      @close="dialogEdit = false"
      @update="getListOrderDetail"
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
  name: "OrderDetail",
  data() {
    return {
      headers: [
        { text: "Id", value: "id" },
        { text: "Số lượng", value: "quantity" },
        { text: "Mã sản phẩm", value: "productId" },
        { text: "Mã đơn hàng", value: "OrderId" },
        { text: "Chức năng", value: "actions", align: "right" }
      ],
      orderDetail: [],
      dialogAdd: false,
      dialogEdit: false,
      dialogDelete: false,
      currentItem: null,
      orderDetailId: null
    };
  },
  methods: {
    getListOrderDetail() {
      axios
        .get("https://localhost:44306/api/OrderDetail/GetAllOrderDetail")
        .then(res => {
          this.orderDetail = res.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    deleteOrderDetail() {
      axios
        .delete(
          "https://localhost:44306/api/OrderDetail/DeleteOrderDetail?id=" +
            this.orderDetailId
        )
        .then(res => {
          if (res) {
            var newArr = this.orderDetail.filter(x => x.id != this.orderDetailId);
            this.orderDetail = newArr;
            this.dialogDelete = false;
          }
        });
    }
  },
  created() {
    this.getListOrderDetail();
  }
};
</script>

<style></style>
