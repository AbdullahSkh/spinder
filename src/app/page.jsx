import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import { WavyBackground } from "./components/ui/Wavybackground";

export default function Home() {
  return (
    <div className="flex flex-row">

      <Navbar />
      <Searchbar />


    </div>
  );
}
