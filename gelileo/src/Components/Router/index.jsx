import React from "react"; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideMenu from "../SideMenu";
import { Dashboard } from "../Dashboard";
import LoginPage from "../LoginPage";

const RoutersData = () => {
	const isLogedIn = false;
	return (
		<div className="">
			<div className="flex flex-1 overflow-hidden">
				<main className="flex-1 p-6 bg-gray-100 overflow-auto">
                <Router>
                    <Routes>
                        <Route path="/" element={<LoginPage />} /> 
                        <Route path="/dashboard" element={<Dashboard/>} />
                    </Routes>
                </Router>
				</main>
			</div>
		</div>
	);
};

export default RoutersData