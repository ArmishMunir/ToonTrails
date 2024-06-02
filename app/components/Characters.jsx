import Image from "next/image";

function Characters() {
  const characters = [
    {
      name: "Sugar Sprinkle",
      image: "/suger-sprinkle.jpg",
      about:
        "Sugar Sprinkle is a lively and sweet-loving character with a vibrant personality.",
    },
    {
      name: "Willow Whisperleaf",
      image: "/willow-whisperleaf.jpg",
      about:
        "Willow Whisperleaf is a forest guardian. He possess a deep connection with the flora and fauna of the forest.",
    },
    {
      name: "Marina Meriwisp",
      image: "/marina-meriwisp.jpg",
      about:
        "Marina Meriwisp is a spirited mermaid who can swim gracefully and have a power to communicate with marine creatures.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center px-[10%] py-[5%] bg-zinc-900">
      <h1 className="font-bold text-6xl pt-5 pb-[5%]">Characters</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {characters.map((character, index) => (
          <div
            className="relative bg-white shadow-md rounded-md p-4 m-2 cursor-pointer transition duration-300 transform hover:scale-105"
            key={index}
          >
            <Image
              src={character.image}
              alt={character.name}
              className="w-full h-auto rounded-md mb-2 opacity-80 hover:opacity-100"
              width={300}
              height={500}
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2 text-slate-900 font-mono">
                {character.name}
              </h3>
              <p className="text-xs text-gray-700">{character.about}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Characters;
