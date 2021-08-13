import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/auth/login", userCredential);
    console.log(res.data);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};


export const logoutCall = async (dispatch) => {
  try {
    dispatch({ type: "LOGOUT_SUCCESS"});
  } catch (err) {
    dispatch({ type: "LOGOUT_FAILURE", payload: err });
  }
};

