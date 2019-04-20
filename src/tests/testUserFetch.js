import Firebase from "./Firebase";

export const  fetchUser =  () =>   dispatch => {
    Firebase.auth.onAuthStateChanged( user => {
         Firebase.database.ref('users/' + user.uid).on('value', async (snapshot) => {
            await dispatch(
                {
                    type: "FETCH_USER",
                    payload: snapshot.val(),
                }
            )
        })
    });
};
