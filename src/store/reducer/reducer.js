const INITIAL_STATE = {
    display: ""
};
const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "HIT":
            return {
                ...state,
                display: action.id
            };
        default:
            return state;
    }
};

export default reducer;
