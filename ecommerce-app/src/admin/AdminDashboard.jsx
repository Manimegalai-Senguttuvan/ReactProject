import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>

      <Link to="/admin/products">Manage Products</Link>
    </div>
  );
}