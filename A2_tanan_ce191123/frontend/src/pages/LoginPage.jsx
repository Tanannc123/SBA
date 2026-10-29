import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getErrorMessage } from "../api/http";
import { useAuth } from "../context/AuthContext";
import { homeFor } from "../components/menu";
import logo from "../assets/logo.svg";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginPage() {
  const { session, login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (session) return <Navigate to={homeFor(session.accountRole)} replace />;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email.trim() || !form.password) {
      setError("Please enter both email and password.");
      return;
    }
    if (!EMAIL_PATTERN.test(form.email.trim())) {
      setError("Email is not valid.");
      return;
    }
    setSubmitting(true);
    try {
      const account = await login(form.email.trim(), form.password);
      navigate(homeFor(account.accountRole), { replace: true }); // Admin and Staff land on different pages
    } catch (err) {
      setError(getErrorMessage(err)); // e.g. "Wrong email or password."
      setSubmitting(false);
    }
  };

  return (
    <div className="login-wrap">
      <div className="login-card">
        <div className="text-center mb-4">
          <img src={logo} alt="logo" />
          <h4 className="mt-3 mb-0">FUNewsManagementSystem</h4>
          <small className="text-muted">Staff and admin sign in</small>
        </div>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit} noValidate>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" value={form.email} onChange={handleChange} autoFocus />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={form.password} onChange={handleChange} />
          </Form.Group>
          <Button type="submit" className="btn-forest w-100" disabled={submitting}>
            {submitting ? "Signing in..." : "Sign in"}
          </Button>
        </Form>

        <div className="text-center mt-3">
          <Link to="/">Read the news without signing in</Link>
        </div>
      </div>
    </div>
  );
}
