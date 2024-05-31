import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import VideoSection from "./components/VideoSection";
import Characters from "./components/Characters";
import Maps from "./components/Maps";
export default function Home() {
  return (
    <main className="flex flex-col">
      {/* navbar */}
      <Navbar />
      {/* Banner */}
      <Banner />
      {/* Video Section */}
      <VideoSection />
      {/* Game Characters */}
      <Characters />
      {/* Maps */}
      <Maps />
    </main>
  );
}
