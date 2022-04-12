<template>
    <v-app-bar app elevetion="1" color="primary">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-toolbar-item>
            <v-btn text>Home</v-btn>
            <v-btn text>Blog</v-btn>
            <v-btn text>Facebook</v-btn>
            <v-btn text>Twitter</v-btn>
            <v-btn text >
                <v-icon>mdi- </v-icon>
            </v-btn>
            <v-btn text>
                <v-badge left color="red" content="3">    
                    <v-icon large color="white">mdi-bell</v-icon>
                </v-badge>
            </v-btn>
            <v-btn text fab class="ml-3" >
                <v-avatar>
                    <img src="https://photo-cms-anninhthudo.zadn.vn/h600/Uploaded/2021/206/2020_07_28/tho.jpg"
                    alt="Frog">
                </v-avatar>
            </v-btn>
        </v-toolbar-item>
        
    </v-app-bar>
</template>

<script>
export default {
    name:'Topbar'
}
</script>

<style>

</style>