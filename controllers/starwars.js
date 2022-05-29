// import helper variables and functions
import { sith, planetKiller, planet, getApiData } from "../helpers/helpers.js";

// takes the Darth Vader data and handles the logic to return the desired values as an object
export const resolveStarship = async (vaderData) => {
  // declare a variable to be used later
  let starship;

  // assign Darth Vader's starship's API endpoint to a variable as a string (regardless if it exists)
  const starshipUrl = String(vaderData.results[0].starships);

  // implement logic to check if there is a starship used by Darth Vader
  // if a starship does not exist, return starship as an empty object
  // if a starship exists, fetch and return starship as an object containing the relevant data
  if (!starshipUrl.length) {
    return (starship = {});
  } else {
    try {
      let value = await fetch(starshipUrl);
      const starshipData = await value.json();
      starship = {
        name: starshipData.name,
        class: starshipData.starship_class,
        model: starshipData.model,
      };
      return starship;
      // handling errors
    } catch (err) {
      console.log(err);
    }
  }
};

// takes the Death Star data and handles the logic to return the desired values as an object
export const resolveCrew = (deathStarData) => {
  // declare a variable to be used later
  let crew;

  // assign the value of the Death Star crew to a variable
  let deathStarCrew = deathStarData.results[0].crew;

  // implement logic to check if there is any crew on the Death Star
  // if there is no crew, return crew with value of 0 (number) assigned
  // if there is crew, return number of crew as a number
  if (
    deathStarCrew === "" ||
    deathStarCrew === "0" ||
    deathStarCrew === 0 ||
    isNaN(parseInt(deathStarCrew))
  ) {
    return (crew = 0);
  } else {
    crew = parseInt(deathStarCrew.split(",").join(""));
  }
  return crew;
};

// takes the Alderaan data and handles the logic to return the desired values as a boolean value
export const resolveLeia = async (alderaanData) => {
  // declare a variable to be used later
  let isLeiaOnPlanet;

  // assign the API endpoints of Alderaan's residents to a variable
  let alderaanResidents = alderaanData.results[0].residents;

  // check if there are any residents on Alderaan
  // if there are no residents on Alderaan, return isLeiaOnAlderaan as false (boolean)
  // if there are residents on Alderaan, fetch and loop through each resident's data to see if one of them is Leia
  // if Leia is one of the residents on Alderaan, return isLeiaOnAlderaan as true (boolean)
  if (!alderaanResidents.length) {
    return (isLeiaOnPlanet = false);
  } else {
    for (let i = 0; i < alderaanResidents.length; i++) {
      try {
        let value = await fetch(alderaanResidents[i]);
        const data = await value.json();
        if (data.name.includes("Leia")) {
          return (isLeiaOnPlanet = true);
        } else isLeiaOnPlanet = false;
        return isLeiaOnPlanet;
        // handling errors
      } catch (err) {
        console.log(err);
      }
    }
  }
};

// controller function to send attack details derived from the Darth Vader data, Death Star data, and Alderaan data as a response (json object)
export const showAttack = async (req, res) => {
  try {
    const vaderData = await getApiData(sith);
    const starship = await resolveStarship(vaderData);
    const deathStarData = await getApiData(planetKiller);
    const crew = resolveCrew(deathStarData);
    const alderaanData = await getApiData(planet);
    const isLeiaOnPlanet = await resolveLeia(alderaanData);
    res.json({ starship, crew, isLeiaOnPlanet });
    // handling errors
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
