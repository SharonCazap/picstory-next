import React from "react";
// import { jsxAttribute } from "@babel/types"

import { Layout, EscribirHistoria as EscribirHistoriaContainer } from '../containers';

import { addHistoria } from './api/historias/add';

function Escribir() {

  const addOrEditHistoria = (historiaObject) => {
    addHistoria(historiaObject);
  }
  
  return (
    <Layout>
      <EscribirHistoriaContainer addOrEditHistoria={addOrEditHistoria} />
    </Layout>
  )
}

export default Escribir;