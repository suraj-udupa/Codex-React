import React, { useState } from "https://esm.sh/react@18.2.0";
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";

function App() {
  const [formData, setFormData] = useState({ email: "", password: "", staySignedIn: true });
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.email || !formData.password) {
      setStatus("Please enter both an email address and password.");
      return;
    }

    setStatus(`Welcome back, ${formData.email}!`);
  };

  return (
    <div className="page">
      <div className="card">
        <header className="header">
          <div className="logo">Codex</div>
          <div className="greeting">
            <p className="eyebrow">Welcome back</p>
            <h1>Log in to your account</h1>
            <p className="subhead">Access your workspace from any mobile browser.</p>
          </div>
        </header>

        <form className="form" onSubmit={handleSubmit}>
          <label className="field">
            <span>Email address</span>
            <input
              type="email"
              name="email"
              inputMode="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="field">
            <span>Password</span>
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>

          <div className="actions">
            <label className="checkbox">
              <input
                type="checkbox"
                name="staySignedIn"
                checked={formData.staySignedIn}
                onChange={handleChange}
              />
              <span>Keep me signed in</span>
            </label>
            <a className="link" href="#forgot">Forgot password?</a>
          </div>

          <button type="submit" className="primary">Log in</button>
        </form>

        <div className="helper">
          <p>
            New to Codex? <a className="link" href="#create">Create an account</a>
          </p>
        </div>

        {status && <div className="status" role="status">{status}</div>}
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
