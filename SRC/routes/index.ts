import express from 'express';
import userroute from './usuarios';
import authRoutes from './auth';
import adresRoutes from './address';
import categoriesRoutes from './categories';
import customerRoutes from './customers';
import ordersRoutes from './orders';
import productsRoutes from './products';
import tablesRoutes from './tables';

const router=express.Router();

//acá ya tengo una petición q es: /api/
router.use("/usuarios",userroute)//  /api/usuarios
router.use("/auth", authRoutes)//    /api/auth
router.use("/address",adresRoutes)// /api/addres
router.use("/categories",categoriesRoutes)// /api/categories
router.use("/customers",customerRoutes)// /api/customers
router.use("/orders",ordersRoutes)// /api/orders
router.use("/products",productsRoutes)// /api/products
router.use("/tables",tablesRoutes)// /api/tables



// router.use("/productos",) // /api/productos las comento mientras tanto 
// router.use("/categorias",)// /api/categorias
// router.use("/pedidos",)// /api/pedidos 

export default router