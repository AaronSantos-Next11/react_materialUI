import { Route, Routes } from 'react-router-dom';
import PageHome from './home/PageHome';
import PageContact from './contact/PageContact';
import PageAbout from './about/PageAbout';
import HomePage from '../pages/HomePage';
import { NotFound } from './NotFound';

import PageDash from './dash/PageDash';
import PageTrading from './dash/PageTrading';
import DetallesDash from './dash/DetallesDash';

import DetallesComida from '../pages/DetallesComida';

export default function AppRoutes () {

   return(

      <Routes>

         <Route path='/' element={<PageHome/>} />
         {/* <Route path='/recetas' element={<HomePage/>} /> */}

         <Route path='/recetas' >
            <Route index element={ <HomePage/> }  ></Route>
            <Route path=':idMeal' element={ <DetallesComida/> } ></Route>
         </Route>         

         <Route path='/about' element={<PageAbout/>} />
         <Route path='/contact' element={<PageContact/>} />

         <Route path='/dash'>

            <Route index element={<PageDash/>} />

            <Route path=':id' element={ <DetallesDash/> } />

            <Route path='trading' element={ <PageTrading/> } />
            
         </Route>

         {/* <Route path='/detalles-comida/:idMeal' element={ < DetallesComida/> } /> */}

         <Route path="*" element={<NotFound/>} />
      </Routes>


   )
}