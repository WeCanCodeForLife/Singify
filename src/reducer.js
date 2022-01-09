export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    playing: false,
    item: null,
    token:  " BQD88suew-8mIxZQYSMxkdTCvNo34_qXqzCjjIkly4yxjqehFRqAd3gaamcZ_gru-Cr2cRjBcvAhFVbB1Yiw5q20pFAB-Y4ILbXbi57erKdFgD-BQqzdxRwkbowwrAVuTGLE_MvUFDytfuAE_czu8e9LEPlzPiq6-pUHNYGRjHzR",
  };

  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };

        case "SET_TOKEN":
            return {
              ...state,
              token: action.token,
            };
      
    }
}

export default reducer;