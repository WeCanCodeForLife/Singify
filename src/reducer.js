export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    playing: false,
    item: null,
  };

  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
    }
}

export default reducer;