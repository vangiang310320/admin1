<template>
  <v-dialog v-model="dialog" width="640px">
    <v-card flat tile>
      <v-card-title class="primary">
        <span style="color:white;">Thêm mới Sản phẩm</span>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="data.productName"
                  label="Tên Sản phẩm"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="data.sale"
                  label="Giá buôn"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="data.price"
                  label="Giá bán"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="data.description"
                  label="Mô tả"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="data.discount"
                  label="Giá giảm"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="data.viewcount"
                  label="Lượng xem"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field v-model="data.image" label="Ảnh"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="data.categoryId"
                  label="Mã thể loại"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="data.supplierId"
                  label="Mã nhà cung cấp"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="grey darken-2" class="mr-2" dark @click="$emit('close')"
          >Huỷ</v-btn
        >
        <v-btn color="primary" class="mr-2" dark @click="addProduct">Lưu</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
export default {
  name: "Add",
  data() {
    return {
      data: {
        productName: "",
        sale: "",
        price: "",
        description: "",
        discount: "",
        viewcount: "",
        image: "",
        categoryId: "",
        supplierId:""
      }
    };
  },
  props: ["dialogAdd"],
  computed: {
    dialog: {
      get() {
        return this.dialogAdd;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      }
    }
  },
  methods: {
    addProduct() {
      axios
        .post("https://localhost:44306/api/Product/InsertProduct", this.data)
        .then(res => {
          alert("Thêm mới thành công");
          this.$emit("updateData");
          this.$emit("close");
        })
        .catch(error => {
          console.log(error);
        });
    },
    refreshData() {
      this.data.id = null;
      this.data.productName = null;
      this.data.sale = null;
      this.data.price = null;
      this.data.description = null;
      this.data.discount = null;
      this.data.viewcount = null;
      this.data.image = null;
      this.data.categoryId = null;
      this.data.supplierId = null;
    }
  }
};
</script>

<style></style>
