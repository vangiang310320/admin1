<template>
  <div class="dashboard">
    <v-subheader>
      <v-icon class="mr-2">mdi-home</v-icon>
      <h3>Sản phẩm</h3>
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
          <v-data-table :headers="headers" :items="product" :items-per-page="5">
            <template v-slot:item="{ item }">
              <tr>
                <td>{{ item.id }}</td>
                <td>{{ item.productName }}</td>
                <td>{{ item.sale }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.description }}</td>
                <td>{{ item.discount }}</td>
                <td>{{ item.viewcount }}</td>
                <td>{{ item.image }}</td>
                <td>{{ item.categoryId }}</td>
                <td>{{ item.supplierId }}</td>
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
                        productId = item.id;
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
              <v-btn @click="deleteproduct" text> Đồng ý </v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn @click="dialogDelete = false" text> Hủy bỏ </v-btn>
            </v-col>
          </v-row>
        </v-alert>
      </v-card>
    </v-dialog>
    <add
      :dialogAdd="dialogAdd"
      @close="dialogAdd = false"
      @updateData="getListProduct"
    />
    <edit
      :dialogEdit="dialogEdit"
      @close="dialogEdit = false"
      @update="getListProduct"
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
  name: "Product",
  data() {
    return {
      headers: [
        { text: "Id", value: "id" },
        { text: "Tên sản phẩm", value: "productName" },
        { text: "Giá bán", value: "sale" },
        { text: "Giá", value: "price" },
        { text: "Mô tả", value: "description" },
        { text: "Giá giảm", value: "discount" },
        { text: "Lượng xem", value: "viewcount" },
        { text: "Ảnh", value: "image" },
        { text: "Mã thể loại", value: "categoryId" },
        { text: "Mã nha cung cap", value: "supplierId" },
        { text: "Chức năng", value: "actions", align: "right" },
      ],
      product: [],
      dialogAdd: false,
      dialogEdit: false,
      dialogDelete: false,
      currentItem: null,
      productId: null,
    };
  },
  methods: {
    getListProduct() {
      axios
        .get("https://localhost:44306/api/Product/GetAllProduct")
        .then((res) => {
          this.product = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteProduct() {
      axios
        .delete(
          "https://localhost:44306/api/Product/DeleteProduct?id=" +
            this.productId)
        .then((res) => {
          if (res) {
            var newArr = this.product.filter(x => x.id != this.productId);
            this.product = newArr;
            this.dialogDelete = false;
          }
        });
    },
  },
  created() {
    this.getListProduct();
  },
};
</script>

<style></style>
