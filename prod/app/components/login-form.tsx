import { useState } from "react";
import { useAuth } from "../context/auth";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useNavigate } from "react-router";

export function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  function handleLogin() {
    login({
      id: "1",
      email,
    });

    navigate("/dashboard");
  }

  return (
    <form>
      <h1 className="text-center font-medium mb-10">Log into Your Account</h1>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        placeholder="ex: example@gmail.com"
        className="mb-3"
        required
      />
      <Input
        type="password"
        placeholder="Enter password..."
        className="mb-3"
        required
      />
      <Button
        type={"submit"}
        className="w-full cursor-pointer"
        onClick={handleLogin}
        disabled={!email}
      >
        Login
      </Button>
    </form>
  );
}
