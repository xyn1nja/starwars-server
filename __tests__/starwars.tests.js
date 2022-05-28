import { sith, planetKiller, planet, getApiData } from "../helpers/helpers.js";
import {
  resolveStarship,
  resolveCrew,
  resolveLeia,
  showAttack,
} from "../controllers/starwars.js";

let vaderData;
let deathStarData;
let alderaanData;
// let starship;
// let crew;
// let isLeiaOnPlanet;

beforeAll(async () => {
  vaderData = await getApiData(sith);
  deathStarData = await getApiData(planetKiller);
  alderaanData = await getApiData(planet);
  // starship = await resolveStarship(vaderData);
  // crew = resolveCrew(deathStarData);
  // isLeiaOnPlanet = await resolveLeia(alderaanData);
});

describe("resolveStarship", () => {
  test("It should return the starship object", async () => {
    const starship = await resolveStarship(vaderData);
    expect(typeof starship).toBe("object");
  });
});

describe("resolveCrew", () => {
  test("It should return the number of crew on the starship as a number", () => {
    const crew = resolveCrew(deathStarData);
    expect(typeof crew).toBe("number");
  });
});

describe("resolveLeia", () => {
  test("It should return whether Leia is on Alderaan as a boolean value", async () => {
    const isLeiaOnPlanet = await resolveLeia(alderaanData);
    expect(typeof isLeiaOnPlanet).toBe("boolean");
  });
});

describe("showAttack", () => {
  test("It should return the information on the attack", async () => {
    const starship = await resolveStarship(vaderData);
    const crew = resolveCrew(deathStarData);
    const isLeiaOnPlanet = await resolveLeia(alderaanData);
    expect(typeof { starship, crew, isLeiaOnPlanet }).toBe("object");
  });
});
