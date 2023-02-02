import Card from "@/components/atoms/Card";
import CustomModal from "@/components/atoms/CustomModal";
import LinkText from "@/components/atoms/LinkText";
import Router from "next/router";
import { useState } from "react";
import verifyUser from "../helper/verifyUser";

const Signup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleSifnUp = async (e) => {
    e.preventDefault();
    const body = {
      email: e.target.email.value,
      name: e.target.username.value,
      password: e.target.password.value,
    };
    const response = await fetch(
      "https://staging-be-ecom.techserve4u.com/api/user/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const responseData = await response.json();
    if (responseData.isOtpSend) {
      setEmail(responseData.email);
      setIsModalOpen(true);
    } else {
      console.log(responseData);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      otp: e.target.OTP.value,
      email: email,
    };
    const response = await fetch(
      "https://staging-be-ecom.techserve4u.com/api/user/verifyotp",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const responseData = await response.json();
    verifyUser(responseData);
    setIsModalOpen(false);
    Router.push("/");
  };
  return (
    <>
      <div id="loginpage">
        <Card>
          <h2>Sign Up</h2>
          <form autoComplete="off" onSubmit={handleSifnUp}>
            <input type="text" name="username" placeholder="Name" required />
            <input
              type="email"
              // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
              name="email"
              placeholder="Email"
            />
            <input
              type="password"
              // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              required
              name="password"
              placeholder="Password"
            />
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account?{" "}
            <LinkText path="signin" title="Sign In"></LinkText>
          </p>
        </Card>
      </div>
      <CustomModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <form autoComplete="off" id="otpForm" onSubmit={handleSubmit}>
          <input
            type="text"
            name="OTP"
            placeholder="OTP"
            required
            minLength="6"
            maxLength="6"
          />
          <button type="submit">Submit</button>
        </form>
      </CustomModal>
    </>
  );
};

export default Signup;
