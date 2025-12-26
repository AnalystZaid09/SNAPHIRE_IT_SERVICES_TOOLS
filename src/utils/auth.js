// src/utils/auth.js
const TOKEN_KEY = "amazon_portal_token";
const USER_KEY = "amazon_portal_user";

/**
 * Fake auth - for real apps replace with API calls and secure tokens.
 */

export function login(username, password) {
  // simple demo credentials - replace as needed
  const demoUser = "admin";
  const demoPass = "admin123";

  if (!username || !password) return { ok: false, message: "Enter username & password" };

  if (username === demoUser && password === demoPass) {
    const token = Date.now().toString(36) + "-" + Math.random().toString(36).slice(2);
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify({ username }));
    return { ok: true };
  }

  // Optionally allow any credential for development:
  // const token = Date.now().toString(36) + "-" + Math.random().toString(36).slice(2);
  // localStorage.setItem(TOKEN_KEY, token);
  // localStorage.setItem(USER_KEY, JSON.stringify({ username }));
  // return { ok: true };

  return { ok: false, message: "Invalid credentials" };
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export function isAuthenticated() {
  return !!localStorage.getItem(TOKEN_KEY);
}

export function getUser() {
  const raw = localStorage.getItem(USER_KEY);
  try {
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
