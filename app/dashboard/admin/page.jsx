"use client"

import { useEffect, useState } from 'react';
import Dashboard from "@/components/shared/Dashboard/Dasboard";

const DashboardPage = () => {
  const [userRole, setUserRole] = useState('superAdmin'); // Ganti ini untuk testing

  useEffect(() => {
    // Simulasi pengambilan role dari API setelah login
    // setUserRole(data.role);
  }, []);

  return <Dashboard userRole={userRole} />;
};

export default DashboardPage;
