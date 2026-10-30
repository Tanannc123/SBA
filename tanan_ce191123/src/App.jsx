import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import CategoryManagement from "./components/CategoryManagement";
import NewsManagement from "./components/NewsManagement";
import UserManagement from "./components/UserManagement";
import { initialCategories, initialNews, initialUsers } from "./data/mockData";

export default function App() {
    const [currentUser, setCurrentUser] = useState(null);
    const [activeTab, setActiveTab] = useState("dashboard");

    // Khởi tạo state từ localStorage, nếu chưa có thì lấy từ mockData.js
    const [categories, setCategories] = useState(() => {
        const saved = localStorage.getItem("categories");
        return saved ? JSON.parse(saved) : initialCategories;
    });
    const [news, setNews] = useState(() => {
        const saved = localStorage.getItem("news");
        return saved ? JSON.parse(saved) : initialNews;
    });
    const [users, setUsers] = useState(() => {
        const saved = localStorage.getItem("users");
        return saved ? JSON.parse(saved) : initialUsers;
    });

    // Đồng bộ vào localStorage mỗi khi dữ liệu thay đổi
    useEffect(() => {
        localStorage.setItem("categories", JSON.stringify(categories));
    }, [categories]);

    useEffect(() => {
        localStorage.setItem("news", JSON.stringify(news));
    }, [news]);

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    // Hàm khôi phục lại dữ liệu ban đầu từ mockData.js
    const handleResetMockData = () => {
        if (window.confirm("Bạn có chắc chắn muốn khôi phục về dữ liệu ban đầu trong mockData.js?")) {
            localStorage.removeItem("categories");
            localStorage.removeItem("news");
            localStorage.removeItem("users");
            setCategories(initialCategories);
            setNews(initialNews);
            setUsers(initialUsers);
            alert("Đã khôi phục dữ liệu ban đầu thành công!");
        }
    };

    // Nếu chưa đăng nhập, hiển thị màn hình Login
    if (!currentUser) {
        return <Login users={users} onLoginSuccess={(user) => setCurrentUser(user)} />;
    }

    // Danh sách menu: Nếu là Staff (role !== 1) thì ẩn menu 'users'
    const menuList = currentUser.role === 1
        ? ["dashboard", "category", "news", "users", "settings"]
        : ["dashboard", "category", "news", "settings"];

    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            {/* Sidebar Menu */}
            <div style={{ width: "220px", background: "#333", color: "#fff", padding: "15px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}>
                    <img src="/logo.jpg" alt="FUNews Logo" style={{ width: "36px", height: "36px", borderRadius: "4px", objectFit: "cover" }} />
                    <h3 style={{ margin: 0 }}>FUNews Admin</h3>
                </div>
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
                <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #ccc", paddingBottom: "10px", marginBottom: "20px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <img src="/logo.jpg" alt="FUNews Logo" style={{ width: "36px", height: "36px", borderRadius: "4px", objectFit: "cover" }} />
                        <span style={{ fontSize: "18px", fontWeight: "bold" }}>FUNews Management System</span>
                    </div>
                    <span>
                        Xin chào, <b>{currentUser.username}</b> ({currentUser.role === 1 ? "Admin" : "Staff"})
                    </span>
                </header>

                {activeTab === "dashboard" && (
                    <Dashboard categories={categories} news={news} users={users} />
                )}
                {activeTab === "category" && <CategoryManagement categories={categories} setCategories={setCategories} />}
                {activeTab === "news" && <NewsManagement news={news} setNews={setNews} categories={categories} />}
                {activeTab === "users" && <UserManagement users={users} setUsers={setUsers} />}
                {activeTab === "settings" && (
                    <div>
                        <h2>Settings</h2>
                        <p>Hệ thống quản lý tin tức FUNews - Phiên bản 1.0</p>
                        <hr style={{ margin: "20px 0" }} />
                        <h3>Khôi phục dữ liệu gốc</h3>
                        <p>Nếu bạn muốn xóa các dữ liệu đã thêm/sửa/xóa và quay lại dữ liệu mặc định ban đầu trong <code>mockData.js</code>:</p>
                        <button
                            onClick={handleResetMockData}
                            style={{
                                padding: "8px 16px",
                                backgroundColor: "#dc3545",
                                color: "#fff",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                        >
                            Khôi phục dữ liệu gốc từ mockData.js
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}