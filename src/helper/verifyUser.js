const verifyUser = async (responseData) => {
  localStorage.removeItem("user");
  const getUserData = await fetch(
    "https://staging-be-ecom.techserve4u.com/api/user/verify",
    {
      method: "POST",
      headers: {
        authorization: responseData.token,
      },
    }
  );
  const userData = await getUserData.json();

  localStorage.setItem(
    "user",
    JSON.stringify({
      name: userData.user.name,
      email: userData.user.email,
      role: userData.user.role,
    })
  );
};
export default verifyUser;
