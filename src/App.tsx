import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/users/Users";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserCreate from "./pages/users/UserCreate";
import UserEdit from "./pages/users/UserEdit";
import Roles from "./pages/roles/Roles";
import RoleCreate from "./pages/roles/RoleCreate";
import RoleEdit from "./pages/roles/RoleEdit";
import Products from "./pages/products/Products";
import ProductCreate from "./pages/products/ProductCreate";
import ProductEdit from "./pages/products/ProductEdit";
import Orders from "./pages/orders/Orders";
import Profile from "./pages/Profile";
import { Order } from './models/order';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard/>}>
                </Route>
                <Route path='/register' element={<Profile/>}>
                </Route>
                <Route path='/login' element={<Login/>}>
                </Route>
                <Route path='/users' element={<Users/>}>
                </Route>
                <Route path='/users/create' element={<UserCreate/>}>
                </Route>
                <Route path='/users/:id/edit' element={<UserEdit/>}>
                </Route>
                <Route path='/roles' element={<Roles/>}>
                </Route>
                <Route path='/roles/create' element={<RoleCreate/>}>
                </Route>
                <Route path='/roles/:id/edit' element={<RoleEdit/>}>
                </Route>
                <Route path='/products' element={<Products/>}>
                </Route>
                <Route path='/products/create' element={<ProductCreate/>}>
                </Route>
                <Route path='/products/:id/edit' element={<ProductEdit/>}>
                </Route>
                <Route path='/orders' element={<Orders/>}>
                </Route>
            </Routes>    
            </BrowserRouter>
        </div>
    );
}

export default App;
