// working with http requests

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((response) => response.json())
  .then((data) => console.log(data.name))
  .catch((error) => console.log(error));
