import React from "react";
// import { jsxAttribute } from "@babel/types"

import { Layout, ListaHistorias as ListaHistoriasContainer } from '../containers';

// import { getHistorias } from './api/historias';

function ListaHistorias() {

  // const getHistoriasList = (historiasList) => {
  //   console.log("entro al get: " + historiasList);
  //   getHistorias(historiasList);
  //   console.log("GetHistorias: " ,getHistorias(historiasList));
  // }

  return (
    <Layout>
      <ListaHistoriasContainer />
    </Layout>
  )
}


export default ListaHistorias;