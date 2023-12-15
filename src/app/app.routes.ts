import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { customerguardGuard } from './guards/customerguard.guard';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { HometopNavbarComponent } from './pages/hometop-navbar/hometop-navbar.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
    {
        path:"login",
        component:LoginComponent,
        title:"Login | E-Commerce Website",
        canActivate:[customerguardGuard]
    },
    {
        path:"signup",
        component:SignupComponent,
        title:"Signup | E-Commerce Website"
    },
    {
        path:"home",
        component:HomeComponent,
        title:"Home | E-Commerce Website"
    },
    {
        path:"productdetails",
        component:ProductDetailsComponent,
        title:"ProductDetails| E-Commerce Website"
    },
    {
        path:"addproduct",
        component:AddProductComponent,
        title:"AddProduct | E-Commerce Website"
    },
    {
        path:"updateproduct",
        component:UpdateProductComponent,
        title:"UpdateProduct | E-Commerce Website"
    },
    {
        path:"products",
        component:ProductsComponent,
        title:"products | E-Commerce Website"
    },
    {
        path:"hometopnavbar",
        component:HometopNavbarComponent,
        title:"HomeTopNavbar | E-Commerce Website"
    },
    {
        path:"cart",
        component:CartComponent,
        title:"cart | E-Commerce Website"
    },
    {
        path:"checkout",
        component:CheckoutComponent,
        title:"checkout | E-Commerce Website"
    }
];
