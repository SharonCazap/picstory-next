import { firebase } from '../../../lib';
const firebaseDB = firebase.database();

export default async (req, res) => {
  if (req.method === 'POST') {
    const { id, historia, name } = req.body;
    await firebaseDB.ref(`historias/${id}`).update({
      historia,
      name
    }, function (error) {
      if (error) {
        console.log('Hubo un error', error)
        res.statusCode = 400
        res.json({ status: 'error', error })
      } else {
        res.statusCode = 200
        res.json({ status: 'Edited', id })
      }
    })
  } else {
    res.statusCode = 405
    res.json({ message: 'We only support POST' });
  }
}