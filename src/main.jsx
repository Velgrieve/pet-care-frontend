import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ListPets from './components/petsList.jsx'
import CreatePet from './components/petsCreate.jsx'
import PetDetail from './components/petDetail.jsx'


const routes = [
  {
    path: '/',
    element: <App/>,
    errorElement:<div>404</div>,
    children: [
      {
        path: "pets/",
        element: <ListPets></ListPets>,
      },
      {
        path: "pets/:pet_id",
        element: <PetDetail></PetDetail>,
      },
      {
        path: "pets/form",
        element: <CreatePet></CreatePet>,
      }
    ]
  }
]

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
