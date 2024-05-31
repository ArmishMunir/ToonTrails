function VideoSection() {
  return (
    <section className="grid grid-cols-2 gap-[10%] px-[5%] py-[5%]">
      <div>
        <h1 className="font-bold text-6xl pb-5">
          Adventure Awaits in Every Frame!
        </h1>
        <p className="font-mono pb-2 text-xl">
          With charming characters and engaging environments, Toon Trails
          provides an exciting cartoon adventure set in an engaging and creative
          universe.
        </p>
        <p className="font-mono pb-2 text-xl">
          The main problem revolves on the developing darkness that the evil
          Shadow Blot created and that is about to take over the vibrant and
          joyful toon world.
        </p>
      </div>

      <div>
        <video controls width="680" height="200">
          <source src="/trailer.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default VideoSection;
