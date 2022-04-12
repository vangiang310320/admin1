<template>
  <v-navigation-drawer v-model="drawer" app >
    <v-img height="140" class="pa-4" src="">
      <div class="text-center">
        <v-avatar class="mb-4" size="64">
          <v-img
            aspect-ratio="30"
            src="https://scontent-hkt1-1.xx.fbcdn.net/v/t39.30808-6/274721709_649071419699980_5677645070516642402_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=770J3KIASJUAX-3MG60&_nc_ht=scontent-hkt1-1.xx&oh=00_AT-Wm_C4Qrhg4Dn4cruCxIMCoqYcfCIEg-Zul-9jtVBdOg&oe=625754CD"
          />
        </v-avatar>
        <h2 class="Black--text">High Fashion</h2>
      </div>
    </v-img>
    <v-divider></v-divider>
    <v-list nav dense>
      <v-list-item link to="Category">
        <v-list-item-icon>
          <v-icon>mdi-store</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Category</v-list-item-title>
      </v-list-item>
      <v-list-item link to="Customer">
        <v-list-item-icon>
          <v-icon>mdi-calendar</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Customer</v-list-item-title>
      </v-list-item>
      <v-list-item link to="Menu">
        <v-list-item-icon>
          <v-icon>mdi-semantic-web</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Menu</v-list-item-title>
      </v-list-item>
      <v-list-item link to="Order">
        <v-list-item-icon>
          <v-icon>mdi-account-star</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Order</v-list-item-title>
      </v-list-item>
      <v-list-item link to="OrderDetail">
        <v-list-item-icon>
          <v-icon>mdi-cart</v-icon>
        </v-list-item-icon>
        <v-list-item-title>OrderDetail</v-list-item-title>
      </v-list-item>
      <v-list-item link to="Product">
        <v-list-item-icon>
          <v-icon>mdi-motorbike-electric</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Product</v-list-item-title>
      </v-list-item>
      <v-list-item link to="productColor">
        <v-list-item-icon>
          <v-icon>mdi-map-marker-plus</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Product Color</v-list-item-title>
      </v-list-item>
      <v-list-item link to="productImage">
        <v-list-item-icon>
          <v-icon>mdi-account</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Product Image</v-list-item-title>
      </v-list-item>
      <v-list-item link to="productSize">
        <v-list-item-icon>
          <v-icon>mdi-login-variant</v-icon>
        </v-list-item-icon>
        <v-list-item-title> Product Size</v-list-item-title>
      </v-list-item>
      <v-list-item link to="slide">
        <v-list-item-icon>
          <v-icon>mdi-credit-card-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Slide</v-list-item-title>
      </v-list-item>
      <v-list-item link to="supplier">
        <v-list-item-icon>
          <v-icon>mdi-login-variant</v-icon>
        </v-list-item-icon>
        <v-list-item-title> Supplier</v-list-item-title>
      </v-list-item>
      <v-list-item link to="user">
        <v-list-item-icon>
          <v-icon>mdi-login-variant</v-icon>
        </v-list-item-icon>
        <v-list-item-title> User</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
  props: ["drawer"]
};
</script>

<style></style>
