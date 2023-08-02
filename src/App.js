import { Route, Routes } from "react-router-dom";
import {
	Home,
	About,
	Projects,
	GetStartedBadging,
	SelectProjectRepo,
	SuccessfullyBadged,
} from "./pages";
import {
	WhatIsDeiBadging,
	ApplicationProcess,
	DeiBadge,
	DeiFile,
} from "./components";
import { DataProvider } from "./contexts/DataContext";
import { DesktopProvider } from "./contexts/DesktopContext";

const App = () => {
	return (
		<>
			<DesktopProvider>
				<DataProvider>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/about" element={<About />}>
							<Route path="/about" element={<WhatIsDeiBadging />} />
							<Route
								path="/about/application-process"
								element={<ApplicationProcess />}
							/>
							<Route path="/about/dei-file" element={<DeiFile />} />
							<Route path="/about/dei-badge" element={<DeiBadge />} />
						</Route>
						<Route path="/badge" element={<GetStartedBadging />} />
						<Route path="/select-project" element={<SelectProjectRepo />} />
						<Route exact path="/projects" element={<Projects />} />
						<Route exact path="/project-badging-successfull/congratulations" 
						element={<SuccessfullyBadged />} 
						/>
						<Route path="*" element={<h1>Not Found</h1>} />
					</Routes>
				</DataProvider>
			</DesktopProvider>
		</>
	);
};

export default App;
