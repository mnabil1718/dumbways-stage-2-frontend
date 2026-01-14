import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "~/components/context/auth";
import { LoginForm } from "~/components/login-form";

export default function Login() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard", { replace: true });
    }
  }, [user, navigate]);

  return (
    <div className="flex-1 flex flex-col justify-center">
      <div className="max-w-sm mx-auto border rounded-md py-5 px-10">
        <LoginForm />
      </div>
    </div>
  );
}
