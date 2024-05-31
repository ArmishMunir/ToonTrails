import Button from "./Button";
function Banner() {
  return (
    <div
      className="relative bg-cover bg-center h-[70vh]"
      style={{ backgroundImage: "url('/banner.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center gap-y-4">
        <p className="font-mono">
          Charming cartoon adventure in creative universe.
        </p>
        <h1 className="text-white text-9xl font-bold mb-6 typewriter-text">
          Toon Trails
        </h1>
        <div className="mt-[3%]" />
        <Button text="Download Now" />
      </div>
    </div>
  );
}

export default Banner;
