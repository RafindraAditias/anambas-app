"use client"
import { checkPermission } from "@/lib/roles";
import Approval from "./approval";

const Dashboard = ({ userRole }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      {checkPermission(userRole, 'canApprove') && (
        <div>
        <Approval />
          <button>Approve Registrations</button>
        </div>
      )}
      {checkPermission(userRole, 'canRegister') && (
        <button>Register Admin</button>
      )}
      {checkPermission(userRole, 'canViewReports') && (
        <button>View Reports</button>
      )}
    </div>
  );
};

export default Dashboard;
