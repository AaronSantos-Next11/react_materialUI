import { Route, Routes } from 'react-router-dom';
import PageHome from './home/PageHome';
import PageContact from './contact/PageContact';
import PageAbout from './about/PageAbout';
import HomePage from '../pages/HomePage';
import { NotFound } from './NotFound';

export default function AppRoutes () {

   return(

      <Routes>

         <Route path='/' element={<PageHome/>} />

         <Route path='/recetas' element={<HomePage/>} />

         <Route path='/about' element={<PageAbout/>} />

         <Route path='/contact' element={<PageContact/>} />

         <Route path="*" element={<NotFound/>} />

      </Routes>


   )
}