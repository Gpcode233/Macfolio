import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Navbar, Welcome, Dock } from "#components";
import { Finder, Resume, Safari, Terminal, Text, Image, Contact } from "#windows/index";

gsap.registerPlugin(Draggable);

const App = () => {

  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Finder />
      <Safari />
      <Terminal />
      <Resume />
      <Text />
      <Image />
      <Contact />
    </main>
  );
};

export default App; 