import React from "react";

import { GoogleLogin, GoogleLogout } from "react-google-login";

const Account = () => {

    const responseGoogle = (response) => {
        console.log(response);
      }

  return (
      <div className="account">
    <GoogleLogin
      clientId="43364718865-bgpkoue1nbjua4b9bo29n4timoh8v2cs.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />

    <GoogleLogout
      clientId="43364718865-bgpkoue1nbjua4b9bo29n4timoh8v2cs.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={logout}
    />
    </div>
  );
};

export default Login;
