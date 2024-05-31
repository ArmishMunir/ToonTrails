import Image from "next/image";

function Maps() {
  const maps = [
    {
      name: "Candy Land",
      image: "/candy-land.jpg",
      description:
        "This candy land includes thrilling candy world, navigating paths, puzzles to recover the stolen. candy crystal and defeat shadow blot army.",
    },
    {
      name: "Forest",
      image: "/forest.jpg",
      description:
        "There is a magical world of an ancient tree navigating paths, hidden nature-themed puzzles to recover the stolen candy crystal and defeat shadow blot army.",
    },
    {
      name: "Atlantic City",
      image: "/atlantic-city.jpg",
      description:
        "Setting on an underwater journey, various sea creatures, navigating signs, water-themed puzzles to recover blue candy crystalcrystal, and defeat underwater army of shawdow blot army.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center px-[10%] py-[5%]">
      <h1 className="font-bold text-6xl pt-5 pb-[5%]">Maps</h1>

      <div className="grid grid-cols-3 gap-4">
        {maps.map((map, index) => (
          <div
            className="relative bg-white shadow-md rounded-md p-4 m-2 cursor-pointer transition duration-300 transform hover:scale-105"
            key={index}
          >
            <Image
              src={map.image}
              alt={map.name}
              className="w-full h-auto rounded-md mb-2 opacity-80 hover:opacity-100"
              width={300}
              height={500}
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2 text-slate-900 font-mono">
                {map.name}
              </h3>
              <p className="text-xs text-gray-700">{map.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Maps;
