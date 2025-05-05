"use client";

import React, { useState } from "react";

export default function PasswordProtectedContent() {
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const correctPassword = process.env.NEXT_PUBLIC_USE_KEY

    const handlePasswordSubmit = () => {
        if (password === correctPassword) {
            setIsAuthenticated(true);
        } else {
            alert("Incorrect password. Please try again.");
        }
    };

    return (
        <div className="w-full p-4">
            {!isAuthenticated ? (
                <div className="flex flex-col items-center">
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-2 border rounded mb-4"
                    />
                    <button
                        onClick={handlePasswordSubmit}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Submit
                    </button>
                </div>
            ) : (
                <div className="mt-4 p-4  rounded">
                    <p>
                        6476490923 <br/>
                        2032-17 Anndale Dr，north York，ON M2N
                    </p>
                </div>
            )}
        </div>
    );
}