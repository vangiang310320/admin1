import Vue from 'vue'
import Router from 'vue-router'
import Category from "@/views/Category/Index";
import DashBoard from "@/views/DashBoard";
import Customer from "@/views/Customer/Index";
import Order from "@/views/Order/Index";
import OrderDetail from "@/views/OrderDetail/Index";
import Menu from "@/views/Menu/Index";
import Product from "@/views/Product/Index";
import ProductColor from "@/views/ProductColor/Index";
import ProductImage from "@/views/ProductImage/Index";
import ProductSize from "@/views/ProductSize/Index";
import Slide from '@/views/Slide/Index';
import Supplier from '@/views/Supplier/Index';
import User from '@/views/User/Index';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashBoard
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/customer',
      name: 'customer',
      component: Customer
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/orderDetail',
      name: 'orderDetail',
      component: OrderDetail
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/productColor',
      name: 'productColor',
      component: ProductColor
    },
    {
      path: '/productImage',
      name: 'productImage',
      component: ProductImage
    },
    {
      path: '/productSize',
      name: 'productSize',
      component: ProductSize
    },
    {
      path: '/slide',
      name: 'slide',
      component: Slide
    },
    {
      path: '/supplier',
      name: 'supplier',
      component: Supplier
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})
