import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "../components/cors/DeshBord/Sidebar";
import { Outlet } from "react-router-dom";


const Dashboard = () => {
  const { loading: authLoading } = useSelector((state) => state.auth);
  const { loading: profileLoading } = useSelector((state) => state.profile);

  if (profileLoading || authLoading) {
    return <div className="mt-10">Loading...</div>;
  }

  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)]">
      <Sidebar />
      <div className="h-[calc(100vh-3.5rem)] overflow-auto w-full">
        <div className="mx-auto w-10/12 max-w-[1000px] my-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



