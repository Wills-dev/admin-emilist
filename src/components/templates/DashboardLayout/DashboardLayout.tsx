"use client";

import { useState } from "react";

import Header from "@/components/organisms/Header/Header";
import Sidebar from "@/components/organisms/Siderbar/Sidebar";
import Container from "@/components/atoms/Container/Container";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="lg:ml-64">
        <Header toggleSidebar={toggleSidebar} />
        <main className="pt-20">
          <Container>{children}</Container>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
