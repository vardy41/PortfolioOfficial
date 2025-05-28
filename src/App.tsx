import { Layout } from "../src/Layout";
import { NavBar } from "./components/ui/NavBar";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";

function App() {
	return (
		<Layout>
			<NavBar />
			<main>
				<Home />
				<About />
			</main>
			{/* Footer */}
		</Layout>
	);
}

export default App;
