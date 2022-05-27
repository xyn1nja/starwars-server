import { sith, planetKiller, planet, getApiData } from "../helpers/helpers.js";

describe("Retrieving data from external API", () => {
  test("It should return the correct data for Darth Vader", async () => {
    const data = await getApiData(sith);
    const result = data.results[0];
    await expect(getApiData(sith)).resolves;
    expect(result.name).toEqual("Darth Vader");
    expect(result.starships);
  });

  test("It should return the correct data for the Death Star", async () => {
    const data = await getApiData(planetKiller);
    const result = data.results[0];
    await expect(getApiData(planetKiller)).resolves;
    expect(result.name).toEqual("Death Star");
    expect(result.crew);
  });

  test("It should return the correct data for the planet Alderaan", async () => {
    const data = await getApiData(planet);
    const result = data.results[0];
    await expect(getApiData(planet)).resolves;
    expect(result.name).toEqual("Alderaan");
    expect(result.residents);
  });
});
