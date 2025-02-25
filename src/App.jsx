import * as React from "react";
import HomePage from "./pages/HomePage";
import ComponentEncabezado from "./components/ComponentEncabezado";

// import MyProject from "./components/mini_proyect/MyProject";

// import ComponentEncabezado from "./components/ComponentEncabezado";
// import ListaProductos from "./components/ListaProductos";

export default function App() {
  return (
    <>
      <ComponentEncabezado/>
      <HomePage/>

      {/* <MyProject></MyProject> */}
      {/* <ComponentEncabezado></ComponentEncabezado>
      <ListaProductos></ListaProductos> */}

    </>
  );
}
