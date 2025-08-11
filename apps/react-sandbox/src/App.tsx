import { UiSidebar, UiXstack } from "stencil-ui-react-library";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import HomePage from "./pages/Home";
import DashboardPage from "./pages/Dashboard";
import "./App.css";

export default function App() {
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<>
			<UiXstack style={{ alignItems: "start" }}>
				<UiSidebar
					items={[
						{
							label: "Home",
							icon: "menu",
							active: location.pathname === "/",
							onClick: () => navigate("/"),
						},
						{
							label: "Dashboard",
							icon: "user",
							active: location.pathname === "/dashboard",
							onClick: () => navigate("/dashboard"),
						},
					]}
				/>

				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/dashboard" element={<DashboardPage />} />
				</Routes>
			</UiXstack>
		</>
	);
}
