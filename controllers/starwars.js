import { sith, planetKiller, planet, getApiData } from "../helpers/helpers.js";

const resolveStarship = async (vaderData) => {
  let starship;
  const starshipUrl = String(vaderData.results[0].starships);
  let value = await fetch(starshipUrl);
  const starshipData = await value.json();
  if (!starshipData.length) {
    return (starship = {});
  } else {
    starship = {
      name: starshipData.name,
      class: starshipData.starship_class,
      model: starshipData.model,
    };
  }
  return starship;
};

const resolveCrew = (deathStarData) => {
  let crew;
  let deathStarCrew = deathStarData.results[0].crew;
  if (
    deathStarCrew === "" ||
    deathStarCrew === "0" ||
    isNaN(parseInt(deathStarCrew))
  ) {
    return (crew = 0);
  } else {
    crew = parseInt(deathStarCrew.split(",").join(""));
  }
  return crew;
};

const resolveLeia = async (alderaanData) => {
  let isLeiaOnPlanet;
  let alderaanResidents = alderaanData.results[0].residents;
  for (let i = 0; i < alderaanResidents.length; i++) {
    let value = await fetch(alderaanResidents[i]);
    const data = await value.json();
    if (data.name.includes("Leia")) {
      isLeiaOnPlanet = true;
      return isLeiaOnPlanet;
    } else isLeiaOnPlanet = false;
  }
  return isLeiaOnPlanet;
};

// exposed function
export const showAttack = async (req, res) => {
  const vaderData = await getApiData(sith);
  const starship = await resolveStarship(vaderData);

  const deathStarData = await getApiData(planetKiller);
  const crew = resolveCrew(deathStarData);

  const alderaanData = await getApiData(planet);
  const isLeiaOnPlanet = await resolveLeia(alderaanData);

  res.send(JSON.stringify({ starship, crew, isLeiaOnPlanet }, null, 4));
};
