import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "~/components/context/auth";

export default function Dashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) navigate("/login");
  }, []);
  return <div>Dash</div>;
}
