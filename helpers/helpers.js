const apiSearch = "https://swapi.dev/api/";

const sith = "darth vader";
const planetKiller = "death star";
const planet = "alderaan";

const getApiData = async (name) => {
  let value;
  if (name === sith) {
    value = await fetch(`${apiSearch + "people/?search=" + name}`);
  } else if (name === planetKiller) {
    value = await fetch(`${apiSearch + "starships/?search=" + name}`);
  } else if (name === planet) {
    value = await fetch(`${apiSearch + "planets/?search=" + name}`);
  }
  const data = await value.json();
  return data;
};

export { apiSearch, sith, planetKiller, planet, getApiData };
