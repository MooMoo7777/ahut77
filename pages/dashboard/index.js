import { useAuth } from "../../useAuth";
import Link from "next/link";

export default function Dashboard() {
  const { address, logout } = useAuth();

  return (
    <div style={{ padding: 40 }}>
      <h1>AHUT77 Dashboard</h1>

      <p>Your wallet address:</p>
      <p>{address}</p>

      <div style={{ marginTop: 30 }}>
        <Link href="/dashboard/tenant">
          <button style={{ marginRight: 20, padding: "10px 20px" }}>
            Tenant Portal
          </button>
        </Link>

        <Link href="/dashboard/admin">
          <button style={{ padding: "10px 20px" }}>
            Admin Portal
          </button>
        </Link>
      </div>

      <button
        onClick={logout}
        style={{ marginTop: 40, padding: "10px 20px" }}
      >
        Logout
      </button>
    </div>
  );
}
