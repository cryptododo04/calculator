const bodyClass = "bg-purple-800 bg-gradient-to-br from-blue-300 bg-opacity-25";
const body = document.querySelector("body");

bodyClass.split().forEach(clase => body.classList.add(clase));

calcBodyClass = "max-w-lg rounded overflow-hidden shadow-2x1 bg-blue-700 bg-opacity-75 bg-gradient-to-tr  from-gray-800 flex";
const calcBody = querySelector(".calcBody")
calcBodyClass.split().forEach(clase => body.classList.add(clase));


outputClass = "flex flex-col 2-3/4 h-12 justify-center items-end m-1 bg-gray-300 text-gray-900 font-semibold px-2 border border-black hover:border-gray-500 rounded";
const output = querySelector(".output")
outputClass.split().forEach(clase => output.classList.add(clase));
