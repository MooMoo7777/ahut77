import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Welcome to AHUT77</h1>
      <p>The AHUT Housing Utility Token Web App</p>

      <Link href="/login">
        <button style={{ marginTop: 20, padding: "10px 20px" }}>
          Login
        </button>
      </Link>
    </div>
  );
}
