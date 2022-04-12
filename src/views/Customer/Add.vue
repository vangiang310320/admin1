<template>
  <v-dialog v-model="dialog" width="640px">
    <v-card flat tile>
      <v-card-title class="primary">
        <span style="color:white;">Thêm mới Khách hàng</span>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="data.customerName"
                  label="Tên Khách hàng"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="data.gender"
                  label="Giới tính"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="data.address"
                  label="Địa chỉ"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field v-model="data.email" label="Email"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="data.phone"
                  label="Điện Thoại"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field v-model="data.avatar" label="Ảnh"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="data.userName"
                  label="Tên Tài Khoản"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="data.passWord"
                  label="Mật Khẩu"
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
        <v-btn color="primary" class="mr-2" dark @click="addCustomer"
          >Lưu</v-btn
        >
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
        customerName: "",
        gender: "",
        address: "",
        email: "",
        phone: "",
        avatar: "",
        userName: "",
        passWord: ""
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
    addCustomer() {
      axios
        .post("https://localhost:44306/api/Customer/InsertCustomer", this.data)
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
      this.data.customerName = null;
      this.data.gender = null;
      this.data.address = null;
      this.data.email = null;
      this.data.phone = null;
      this.data.avatar = null;
      this.data.userName = null;
      this.data.passWord = null;
    }
  }
};
</script>

<style></style>
