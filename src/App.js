import React from "react";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import PageNotFound from "./components/PageNotFound";
import Password from "./components/Password";
import Reset from "./components/Reset";
import Profile from "./components/Profile";
import Recovery from "./components/Recovery";
import Username from "./components/Username";
import Register from "./components/Register";


const router = createBrowserRouter([
  {
    path : '/',
    element : <Username></Username>
  },
  {
    path : '/register',
    element : <Register></Register>
  },
  {
    path : '/recovery',
    element : <Recovery></Recovery>
  },
  {
    path : '/profile',
    element : <Profile></Profile>
  },
  {
    path : '/password',
    element : <Password></Password>
  },
  {
    path : '/reset',
    element : <Reset></Reset>
  },
  {
    path : '*',
    element : <PageNotFound></PageNotFound>
  }
  
])

function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
    
  );
}

export default App;
