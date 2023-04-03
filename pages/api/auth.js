const AUTH_URL = "http://localhost:8080/customer/";

export const LOGIN = async (email, password) => {
  try {
    const response = await fetch(AUTH_URL + "loginAccount", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ email, password }),
    });
    const res = await response.json();
    if (res.status === true) {
      return res.object;
    }
    return res.message;
  } catch (error) {
    console.error("Error in LOGIN : " + error);
  }
};

export const SIGNUP = async(email,password) => {
  const response = await fetch(AUTH_URL + "createAccount", {
    method:"POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ email, password }),
  });
  const res = await response.json();
  if (res.status) {
    return res.object;
  }
  return res.message;
} 
