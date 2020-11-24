import React from "react";
import { useRouter } from 'next/router';
import auth0 from '../../lib/auth0';
import { useFetchUser } from '../../lib/user';

import { Layout, Historia as HistoriaContainer } from '../../containers';

export default function Historia( {user} ) {
  const router = useRouter();
  const historiaId = router.query;
  console.log("historiaId: ", historiaId);

  const { loading } = useFetchUser();

  return (
    <Layout>
      <HistoriaContainer user={user} currentId={historiaId.id} loading={loading}/>
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
