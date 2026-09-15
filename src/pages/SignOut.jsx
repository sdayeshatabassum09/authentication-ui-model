import { useNavigate } from "react-router-dom";

import FormButton from "../components/FormButton";

import "./SignOut.css";

function SignOut() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/login");
  };

  return (
    <div className="signout-container">
      <div className="signout-box">
        <h2>Sign Out</h2>

        <p>Are you sure you want to sign out?</p>

        <FormButton onClick={handleSignOut}>
          Sign Out
        </FormButton>
      </div>
    </div>
  );
}

export default SignOut;