import auth0 from '../../../lib/auth0';
import { firebase } from '../../../lib';
const firebaseDB = firebase.database();

export const getHistorias = () => {
  const historiasArr = [];
  try {
    firebaseDB.ref('historias').once('value', (snapshot) => {
      // const historiasArr = [];
      snapshot.forEach((childSnapshot) => {
        historiasArr.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })
      // historiasArr.reverse()
      console.log("getHistorias: " , historiasArr);
      // historiasArr.map( historia => {
      //   console.log(historia.id)
      //   console.log(historia.titulo)
      // })
      // res.status(200).json(historiasArr);
    })
    return historiasArr;
  } catch (error) {
    console.error(error);
    // res.status(error.status || 500).json({
    //   code: error.code,
    //   error: error.message
    // });
  }
};