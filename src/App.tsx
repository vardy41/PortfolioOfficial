import { Layout } from "../src/Layout";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";

function App() {
	return (
		<Layout>
			<Home />
			<About />
			<Skills />
			<Projects />
		</Layout>
	);
}

export default App;
