import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { customerguardGuard } from './guards/customerguard.guard';

import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { HometopNavbarComponent } from './pages/hometop-navbar/hometop-navbar.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductsComponent } from './pages/products/products.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AddcategoryComponent } from './pages/admin/addcategory/addcategory.component';
import { UpdateProductComponent } from './pages/admin/update-product/update-product.component';
import { OrderesComponent } from './pages/admin/orderes/orderes.component';
import { CustomersComponent } from './pages/admin/customers/customers.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { OrderConfirmationComponent } from './pages/order-confirmation/order-confirmation.component';

export const routes: Routes = [
    {
        path:"login",
        component:LoginComponent,
        title:"Login | E-Commerce Website"
    },
    {
        path:"signup",
        component:SignupComponent,
        title:"Signup | E-Commerce Website"
    },
    {
        path:"home",
        component:HomeComponent,
        title:"Home | E-Commerce Website",
        canActivate:[customerguardGuard]
    },
    {
        path:"productdetails/:productId",
        component:ProductDetailsComponent,
        title:"ProductDetails| E-Commerce Website",
        canActivate:[customerguardGuard]
    },
     {
        path:"addproduct",
         component:AddProductComponent,
        title:"AddProduct | E-Commerce Website"
     },
  
     {
        path:"addcategory",
         component:AddcategoryComponent,
        title:"AddCategory | E-Commerce Website"
     },
     {
        path:"updateproduct/:productId",
         component:UpdateProductComponent,
        title:"UpdateProduct | E-Commerce Website"
     },
  
     {
        path:"products/:catId",
        component:ProductsComponent,
        title:"products | E-Commerce Website",
        canActivate:[customerguardGuard]
    },
    {
        path:"cart",
        component:CartComponent,
        title:"cart | E-Commerce Website",
        canActivate:[customerguardGuard]
    },
    {
        path:"checkout",
        component:CheckoutComponent,
        title:"checkout | E-Commerce Website",
        canActivate:[customerguardGuard]
    },
    {
        path:"admin",
        component:AdminComponent,
        title:"admin | E-Commerce Website",
    },
    {
        path:"profile",
        component:ProfileComponent,
        title:"profile | E-Commerce Website",
    }
    ,
    {
        path:"orders",
        component:OrderesComponent,
        title:"orders| E-Commerce Website",
    }
    ,
    {
        path:"customers",
        component:CustomersComponent,
        title:"customers| E-Commerce Website",
    },
    {
        path:"orderConfirmation",
        component:OrderConfirmationComponent,
        title:"orderConfirmation| E-Commerce Website"
    }
   

];
