import React, { useState } from "react";
import Login from "./components/Login";
import CategoryManagement from "./components/CategoryManagement";
import { initialCategories, initialNews, initialUsers } from "./data/mockData";

export default function App() {
    const [currentUser, setCurrentUser] = useState(null);
    const [activeTab, setActiveTab] = useState("dashboard");

    const [categories, setCategories] = useState(initialCategories);
    const [news, setNews] = useState(initialNews);
    const [users, setUsers] = useState(initialUsers);

    // Nếu chưa đăng nhập, hiển thị màn hình Login
    if (!currentUser) {
        return <Login users={users} onLoginSuccess={(user) => setCurrentUser(user)} />;
    }

    // Danh sách menu: Nếu là Staff (role !== 1) thì ẩn menu 'users'
    const menuList = ["dashboard", "category", "news", "settings"];
    if (currentUser.role === 1) {
        menuList.splice(3, 0, "users"); // Thêm 'users' vào danh sách nếu là Admin
    }

    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            {/* Sidebar Menu */}
            <div style={{ width: "220px", background: "#333", color: "#fff", padding: "15px" }}>
                <h3>FUNews Admin</h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {menuList.map((tab) => (
                        <li
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                padding: "10px",
                                cursor: "pointer",
                                background: activeTab === tab ? "#555" : "transparent",
                                marginBottom: "4px",
                                textTransform: "capitalize",
                            }}
                        >
                            {tab}
                        </li>
                    ))}
                </ul>
                <button onClick={() => { setCurrentUser(null); setActiveTab("dashboard"); }} style={{ marginTop: "20px", width: "100%" }}>
                    Logout
                </button>
            </div>

            {/* Main Content Area */}
            <div style={{ flex: 1, padding: "20px" }}>
                <header style={{ borderBottom: "1px solid #ccc", paddingBottom: "10px", marginBottom: "20px" }}>
          <span>
            Xin chào, <b>{currentUser.username}</b> ({currentUser.role === 1 ? "Admin" : "Staff"})
          </span>
                </header>

                {activeTab === "dashboard" && <div><h2>Dashboard</h2><p>Tổng số Categories: {categories.length}</p></div>}
                {activeTab === "category" && <CategoryManagement categories={categories} setCategories={setCategories} />}
                {activeTab === "news" && <div><h2>News Management</h2></div>}
                {activeTab === "users" && <div><h2>Users Management</h2></div>}
                {activeTab === "settings" && <div><h2>Settings</h2></div>}
            </div>
        </div>
    );
}