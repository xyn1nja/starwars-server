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

beforeAll(async () => {
  vaderData = await getApiData(sith);
  deathStarData = await getApiData(planetKiller);
  alderaanData = await getApiData(planet);
});

describe("resolveStarship", () => {
  test("It should return the starship object", async () => {
    const data = await resolveStarship(vaderData);
    expect(typeof data).toBe("object");
  });
});

describe("resolveCrew", () => {
  test("It should return the number of crew on the starship as a number", () => {
    const data = resolveCrew(deathStarData);
    expect(typeof data).toBe("number");
  });
});

describe("resolveLeia", () => {
  test("It should return whether Leia is on Alderaan as a boolean value", async () => {
    const data = await resolveLeia(alderaanData);
    expect(typeof data).toBe("boolean");
  });
});
