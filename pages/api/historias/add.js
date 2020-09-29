import auth0 from '../../../lib/auth0';
import { firebase } from '../../../lib';
const firebaseDB = firebase.database();

export default async (req, res) => {
  try {
    const { name, historia } = req.body;

    // //Add auth0
    // const session = await auth0.getSession(req);
    // if (!session || !session.user) {
    //   res.writeHead(302, {
    //     Location: '/api/login'
    //   });
    //   res.end();
    //   return;
    // }

    // const { user } = session
    // const { name: username } = user

    const username = "sharicazap@gmail.com";

    //Agrego document en la collection de historias (usando firebase con async/await)
    const responseKey = await firebaseDB.ref('historias').push({
      //username,
      name,
      historia,
    }).getKey()

    //Devuelvo el usuario recien creado
    res.status(200).json({ "status": "added", "id": responseKey, username, name, historia });

  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      code: error.code,
      error: error.message
    });
  }
};