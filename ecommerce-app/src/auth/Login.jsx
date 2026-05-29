import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [role, setRole] =
    useState("user");

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = () => {
    if (role === "admin") {
      if (
        username === "admin" &&
        password === "admin123"
      ) {
        localStorage.setItem(
          "role",
          "admin"
        );

        localStorage.setItem(
          "username",
          username
        );

        alert(
          "Admin Login Success"
        );

        navigate(
          "/admin-home"
        );
      } else {
        alert(
          "Invalid Admin Credentials"
        );
      }
    } else {
      // USER LOGIN
      if (
        username.trim() &&
        password.trim()
      ) {
        localStorage.setItem(
          "role",
          "user"
        );

        localStorage.setItem(
          "username",
          username
        );

        localStorage.setItem(
          "userPassword",
          password
        );

        alert(
          "User Login Success"
        );

        navigate("/home");
      } else {
        alert(
          "Enter Username & Password"
        );
      }
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1>SYNTECH</h1>

        <select
          value={role}
          onChange={(e) =>
            setRole(
              e.target.value
            )
          }
          style={styles.input}
        >
          <option value="user">
            User
          </option>

          <option value="admin">
            Admin
          </option>
        </select>

        <input
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(
              e.target.value
            )
          }
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
          style={styles.input}
        />

        <button
          style={styles.btn}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: 350,
    padding: 30,
    borderRadius: 25,
    background:
      "rgba(255,255,255,.08)",
    backdropFilter:
      "blur(15px)",
    display: "flex",
    flexDirection:
      "column",
    gap: 15,
  },

  input: {
    padding: 12,
    borderRadius: 12,
    border: "none",
  },

  btn: {
    padding: 12,
    borderRadius: 12,
    background:
      "linear-gradient(90deg,#7c3aed,#3b82f6)",
    color: "white",
  },
};