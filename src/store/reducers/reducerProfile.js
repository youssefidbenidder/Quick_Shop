const initialState = {
    profile : {
        username : "",
        email : "",
        sexe : "",
    }
};

const reducerProfile =  (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_USER":
            return action.payload || null;
        case "UPDATE_USER":
            state.profile.nom = action.payload; // à modifié setState ou nextState
            return state;
        default:
            return state;
    }
};
export default reducerProfile;