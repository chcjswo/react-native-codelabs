import firebase from 'firebase/app';
import 'firebase/firestore';
import keys from './keys';

try {
    firebase.initializeApp(keys);
} catch (e) { }

export default firebase;