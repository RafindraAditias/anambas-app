import React, { useEffect, useState } from "react";

const Approval = () => {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    fetch("/api/registrations")
      .then((response) => response.json())
      .then((data) => setRegistrations(data));
  }, []);

  const handleApprove = (id) => {
    fetch(`/api/approve/${id}`, { method: "POST" })
      .then(() => {
        setRegistrations((prev) => prev.filter((reg) => reg.id !== id));
      });
  };

  const handleCancel = (id) => {
    fetch(`/api/cancel/${id}`, { method: "POST" })
      .then(() => {
        setRegistrations((prev) => prev.filter((reg) => reg.id !== id));
      });
  };

  return (
    <div>
      <h1>Pendaftaran Menunggu Persetujuan</h1>
      <ul>
        {registrations.map((reg) => (
          <li key={reg.id}>
            {reg.username}
            <button onClick={() => handleApprove(reg.id)}>Approve</button>
            <button onClick={() => handleCancel(reg.id)}>Cancel</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Approval;
