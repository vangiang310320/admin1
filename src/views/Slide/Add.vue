<template>
  <v-dialog v-model="dialog" width="640px">
    <v-card flat tile>
      <v-card-title class="primary">
        <span style="color:white;">Thêm mới</span>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="data.slideName"
                  label="Tên chính"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="data.description"
                  label="Miêu tả"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field v-model="data.image" label="ảnh"></v-text-field>
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
                  v-model="data.status"
                  label="Trạng thái "
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
        <v-btn color="primary" class="mr-2" dark @click="addSlide">Lưu</v-btn>
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
        slideName: "",
        description: "",
        image: "",
        url: "",
        sortOrder: "",
        status: ""
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
    addSlide() {
      axios
        .post("https://localhost:44306/api/Slide/InsertSlide", this.data)
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
      this.data.slideName = null;
      this.data.description = null;
      this.data.image = null;
      this.data.url = null;
      this.data.sortOrder = null;
      this.data.status = null;
    }
  }
};
</script>

<style></style>
