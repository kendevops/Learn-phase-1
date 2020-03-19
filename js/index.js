const loginInfo = () => {
  const userEmail = document.getElementById("email").value;
  const userPass = document.getElementById("password").value;
  if (email != "" && password) {
    const details = {
      email: userEmail,
      password: userPass
    };
    console.log(details);
  } else {
    console.log("Please input your details");
  }
};
