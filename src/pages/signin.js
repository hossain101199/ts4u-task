import Card from "@/components/atoms/Card";
import LinkText from "@/components/atoms/LinkText";
import Router from "next/router";
import verifyUser from "../helper/verifyUser";

const signin = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      password: e.target.password.value,
      email: e.target.email.value,
    };
    const response = await fetch(
      "https://staging-be-ecom.techserve4u.com/api/user/signin",
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
    Router.push("/");
  };
  return (
    <div id="loginpage">
      <Card>
        <h2>Sign In</h2>
        <form autoComplete="off" onSubmit={handleSubmit}>
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
          <button type="submit">Sign In</button>
        </form>
        <p>
          Don’t have an account?{" "}
          <LinkText path="signup" title="Sign Up"></LinkText>
        </p>
      </Card>
    </div>
  );
};
export default signin;
