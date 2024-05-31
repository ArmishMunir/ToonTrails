"use client";
function Button(text) {
  const handleDownload = () => {
    try {
      const link = document.createElement("a");
      link.href = "/package.zip";
      link.download = "toontrails.zip";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error during download:", error);
    }
  };

  return (
    <button
      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white py-2 px-6 rounded-3xl animate-gradient transition duration-300 animate-pulse font-semibold font-mono cursor-pointer hover:animation-none"
      onClick={handleDownload}
      type="button"
    >
      {text}
    </button>
  );
}

export default Button;
