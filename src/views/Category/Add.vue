<template>
  <v-dialog v-model="dialog" width="640px">
    <v-card flat tile>
      <v-card-title class="primary">
        <span style="color:white;">Thêm mới thể loại</span>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="data.categoryName"
                  label="Tên thể loại"
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
          </v-container>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="grey darken-2" class="mr-2" dark @click="$emit('close')"
          >Huỷ</v-btn
        >
        <v-btn color="primary" class="mr-2" dark @click="addCategory"
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
        categoryName: "",
        description: ""
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
    addCategory() {
      axios
        .post("https://localhost:44306/api/Category/InsertCategory", this.data)
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
      this.data.categoryName = null;
      this.data.description = null;
    }
  }
};
</script>

<style></style>
