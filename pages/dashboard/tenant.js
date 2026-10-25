import { useEffect, useState } from "react";
import { useAuth } from "../../useAuth";
import { getTenantData } from "../../housingService";

export default function Tenant() {
  const { address } = useAuth();
  const [data, setData] = useState(null);

  useEffect(() => {
    getTenantData(address).then(setData);
  }, [address]);

  if (!data) {
    return <div style={{ padding: 40 }}>Loading...</div>;
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Tenant Portal</h1>

      <p>Name: {data.name}</p>
      <p>Unit: {data.unit}</p>
      <p>Status: {data.status}</p>
      <p>Balance: {data.balance}</p>
    </div>
  );
}
