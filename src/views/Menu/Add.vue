<template>
  <v-dialog v-model="dialog" width="640px">
    <v-card flat tile>
      <v-card-title class="primary">
        <span style="color:white;">Thêm mới Thể loại</span>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-container>
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
        <v-btn color="primary" class="mr-2" dark @click="addMenu">Lưu</v-btn>
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
        menuName: "",
        url: "",
        sortOrder: "",
        parentId: ""
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
    addMenu() {
      axios
        .post("https://localhost:44306/api/Menu/InsertMenu", this.data)
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
      this.data.menuName = null;
      this.data.url = null;
      this.data.sortOrder = null;
      this.data.parentId = null;
    }
  }
};
</script>

<style></style>
