import { Layout } from "../src/Layout";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";

function App() {
	return (
		<Layout>
			<Home />
			<About />
			<Skills />
		</Layout>
	);
}

export default App;
