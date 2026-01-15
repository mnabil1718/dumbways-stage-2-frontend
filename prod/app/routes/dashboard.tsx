import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "~/context/auth";

export default function Dashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
    }
  }, [user, navigate]);

  return <div>Dashboard</div>;
}
