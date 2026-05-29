import { useNavigate } from "react-router-dom";

export default function RoleSelect() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Select Role</h1>

      <button onClick={() => navigate("/login/admin")}>Admin</button>
      <button onClick={() => navigate("/login/user")}>User</button>
    </div>
  );
}