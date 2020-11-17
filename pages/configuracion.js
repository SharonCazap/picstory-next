import React from "react";
// import { jsxAttribute } from "@babel/types"
import auth0 from '../lib/auth0';

import { Layout, Configuracion as ConfiguracionContainer } from '../containers';

export default function Configuracion( {user} ) {
  return (
    <Layout>
      <ConfiguracionContainer user={user} />
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
