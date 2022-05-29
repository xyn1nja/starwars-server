// defining constant variables
const apiSearch = "https://swapi.dev/api/";
const sith = "darth vader";
const planetKiller = "death star";
const planet = "alderaan";

// helper function to be used by controller functions
// this function calls the external API and returns data
const getApiData = async (name) => {
  let value;
  try {
    // if the argument passed into the function is "darth vader", fetch the data for Darth Vader
    // if the argument passed into the function is "death star", fetch the data for Death Star
    // if the argument passed into the function is "alderaan", fetch the data for Alderaan
    if (name === sith) {
      value = await fetch(`${apiSearch + "people/?search=" + name}`);
    } else if (name === planetKiller) {
      value = await fetch(`${apiSearch + "starships/?search=" + name}`);
    } else if (name === planet) {
      value = await fetch(`${apiSearch + "planets/?search=" + name}`);
    }
    // return the response from the API call as an object
    const data = await value.json();
    return data;
    // handling errors
  } catch (err) {
    console.log(err);
  }
};

export { apiSearch, sith, planetKiller, planet, getApiData };
