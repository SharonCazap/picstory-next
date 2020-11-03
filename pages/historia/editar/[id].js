import React from "react";
import { useRouter } from 'next/router';
import auth0 from '../../../lib/auth0';

import { Layout, EscribirHistoria as EscribirHistoriaContainer } from '../../../containers';

import { addHistoria } from '../../api/historias/add';

function HistoriaToEdit( {user} ) {
  const router = useRouter();
  const historiaId = router.query;
  console.log("historiaId: ", historiaId);

  const addOrEditHistoria = (historiaObject, currentId) => {
    addHistoria(historiaObject, currentId);
  }

  return (
    <Layout>
      <EscribirHistoriaContainer user={user} addOrEditHistoria={addOrEditHistoria} currentId={historiaId.id}/>
    </Layout>
  )
}

export async function getServerSideProps({ req, res }) {
  const session = await auth0.getSession(req);
  if (!session || !session.user) {
    res.writeHead(302, {
      Location: "/api/login",
    });
    res.end();
    return {};
  }  
  console.log("user: ", session.user)
  return { props: { user: session.user } };
}

export default HistoriaToEdit;