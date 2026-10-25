import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [provider, setProvider] = useState(null);
  const [address, setAddress] = useState(null);

  const login = async () => {
    // Web3Auth relies on browser APIs, so load it only on the client
    const { getProvider } = await import("./provider");
    const prov = await getProvider();
    setProvider(prov);

    const signer = await prov.getSigner();
    const addr = await signer.getAddress();
    setAddress(addr);
  };

  const logout = () => {
    setProvider(null);
    setAddress(null);
  };

  return (
    <AuthContext.Provider value={{ provider, address, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
