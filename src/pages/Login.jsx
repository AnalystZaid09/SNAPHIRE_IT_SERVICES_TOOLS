// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/auth";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr(null);
    setLoading(true);

    // simulate brief delay for UX
    setTimeout(() => {
      const res = login(username.trim(), password);
      setLoading(false);
      if (res.ok) {
        navigate("/", { replace: true });
      } else {
        setErr(res.message || "Login failed");
      }
    }, 350);
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Sign in</h2>
        <p className="muted">Enter your portal credentials</p>

        <form onSubmit={onSubmit}>
          <label>
            Username
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
              autoFocus
            />
          </label>

          <label>
            Password
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </label>

          {err && <div className="form-error">{err}</div>}

          <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
            <button type="submit" className="btn" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </button>

            {/* <button
              type="button"
              className="btn btn-ghost"
              onClick={() => {
                // convenience dev shortcut: autofill demo credentials
                setUsername("admin");
                setPassword("admin123");
              }}
            >
              Use demo
            </button> */}
          </div>
        </form>

        <small className="muted" style={{ display: "block", marginTop: 12 }}>
          Note: This is client-side auth. For production.
        </small>
      </div>
    </div>
  );
}
