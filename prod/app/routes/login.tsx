import { LoginForm } from "~/components/login-form";

export default function Login() {
  return (
    <div className="flex flex-1">
      <div className="max-w-sm mx-auto border rounded-md py-5 px-10">
        <LoginForm />
      </div>
    </div>
  );
}
