import { useAuth } from "../useAuth";

export default function Login() {
  const { login } = useAuth();

  const handleLogin = async () => {
    await login();
    window.location.href = "/dashboard";
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Login to AHUT77</h1>
      <button
        onClick={handleLogin}
        style={{ marginTop: 20, padding: "10px 20px" }}
      >
        Login with Web3Auth
      </button>
    </div>
  );
}
