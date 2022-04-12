<template>
  <v-dialog v-model="dialog" width="640px">
    <v-card flat tile>
      <v-card-title class="primary">
        <span style="color:white;">Sửa Thể loại</span>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field v-model="data.id" label="Mã"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="data.menuName"
                  label="Tên thể loại"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="data.url"
                  label="Đường dẫn"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="data.sortOrder"
                  label="Thứ tự"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="data.parenId"
                  label="ParenId"
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
        <v-btn color="primary" class="mr-2" dark @click="updateOrderDetail"
          >Cập nhật</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
export default {
  name: "Edit",
  data() {
    return {
      data: {
        id: "",
        menuName: "",
        url: "",
        sortOrder: "",
        parentId: "",
      }
    };
  },
  props: ["dialogEdit", "currentItem"],
  computed: {
    dialog: {
      get() {
        return this.dialogEdit;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      }
    }
  },
  methods: {
    updatemenu() {
      axios
        .put(
          "https://localhost:44306/api/Menu/UpdateMenu",
          this.data
        )
        .then(res => {
          alert("Cập nhật thành công");
          this.$emit("close");
          this.$emit("updateData");
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  watch: {
    currentItem: function() {
      this.data.id = this.currentItem.id;
      this.data.menuName = this.currentItem.menuName;
      this.data.parentId = this.currentItem.parentId;
      this.data.url = this.currentItem.url;
      this.data.sortOrder = this.currentItem.sortOrder;
    }
  }
};
</script>

<style></style>
