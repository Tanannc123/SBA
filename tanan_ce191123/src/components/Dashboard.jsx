//Author: Pham Huynh Tan An_CE191123
import React from "react";

export default function Dashboard({ categories = [], news = [], users = [] }) {
    return (
        <div>
            <h2>Dashboard</h2>
            <div style={{ display: "flex", gap: "20px", marginTop: "15px" }}>
                <div style={{ padding: "15px", border: "1px solid #ccc", borderRadius: "8px", minWidth: "160px" }}>
                    <h4 style={{ margin: "0 0 8px 0" }}>Categories</h4>
                    <p style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}>{categories.length}</p>
                </div>
                <div style={{ padding: "15px", border: "1px solid #ccc", borderRadius: "8px", minWidth: "160px" }}>
                    <h4 style={{ margin: "0 0 8px 0" }}>News Articles</h4>
                    <p style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}>{news.length}</p>
                </div>
                <div style={{ padding: "15px", border: "1px solid #ccc", borderRadius: "8px", minWidth: "160px" }}>
                    <h4 style={{ margin: "0 0 8px 0" }}>Users</h4>
                    <p style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}>{users.length}</p>
                </div>
            </div>
        </div>
    );
}

