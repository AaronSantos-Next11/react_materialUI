import { Route, Routes } from 'react-router-dom';
import PageHome from './home/PageHome';
import PageContact from './contact/PageContact';
import PageAbout from './about/PageAbout';
import HomePage from '../pages/HomePage';
import { NotFound } from './NotFound';

import PageDash from './dash/PageDash';
import PageTrading from './dash/PageTrading';
import DetallesDash from './dash/DetallesDash';

export default function AppRoutes () {

   return(

      <Routes>

         <Route path='/' element={<PageHome/>} />
         <Route path='/recetas' element={<HomePage/>} />
         <Route path='/about' element={<PageAbout/>} />
         <Route path='/contact' element={<PageContact/>} />

         <Route path='/dash'>

            <Route index element={<PageDash/>} />

            <Route path=':id' element={ <DetallesDash/> } />

            <Route path='trading' element={ <PageTrading/> } />
            
         </Route>

         <Route path="*" element={<NotFound/>} />

      </Routes>


   )
}