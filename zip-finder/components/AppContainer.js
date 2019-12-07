import React from 'react';
import { withContext } from 'context-q';
import firebase from '../firebase/firebaseApp';

function AppContainer(props) {
    React.useEffect(() => {
        firebase.auth().signInAnonymously()
            .catch(error => {
                console.error('error 뱔생: ', error);
            });

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // 로그인
                console.log(user);
                props.context.update({
                    user
                });
            } else {
                // 로그아웃

            }
        });
    }, []);
    return (
        <>
            {props.children}
        </>
    )
}

AppContainer = withContext(AppContainer);

export default AppContainer;