import React, { useState } from "react";
import LoginImag from '../../assets/login.avif'

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to dashboard

    if (email !== "ajaymore@gmail.com" || password !== "1234321") {
        alert("Invalid email or password");
        return;
    }
    window.location.href = "/dashboard";
 
  };

return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card card-border-none shadow" style={{ width: "100%", maxWidth: "600px", border: 'none' }}>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6 d-none d-md-block">
                        <img src={LoginImag} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div className="col-12 col-md-6">
                        <h2>Login</h2>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button onClick={handleSubmit} className="btn btn-primary w-100 mt-3">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default LoginPage;
