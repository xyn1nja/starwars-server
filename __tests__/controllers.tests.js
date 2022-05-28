// importing functions and variables
import { sith, planetKiller, planet, getApiData } from "../helpers/helpers.js";
import {
  resolveStarship,
  resolveCrew,
  resolveLeia,
} from "../controllers/starwars.js";

// declaring global variables to be used to store data later
let vaderData;
let deathStarData;
let alderaanData;

// fetching data and storing them in global variables so they do not have to be called multiple times
beforeAll(async () => {
  vaderData = await getApiData(sith);
  deathStarData = await getApiData(planetKiller);
  alderaanData = await getApiData(planet);
});

// testing the resolveStarship function
describe("Testing the resolveStarship function", () => {
  test("It should return starship as an object with data if a starship exists", async () => {
    const starship = await resolveStarship(vaderData);
    expect(typeof starship).toBe("object");
    expect(typeof starship.name).toBe("string");
    expect(typeof starship.class).toBe("string");
    expect(typeof starship.model).toBe("string");
  });

  test("It should return starship as an empty object if no starship exists", async () => {
    const mockVaderData = {
      results: [
        {
          starships: [],
        },
      ],
    };
    const starship = await resolveStarship(mockVaderData);
    expect(starship).toEqual({});
  });
});

// testing the resolveCrew function
describe("Testing the resolveCrew function", () => {
  test("It should return the number of crew on the starship as a number if there are crew", () => {
    const crew = resolveCrew(deathStarData);
    expect(typeof crew).toBe("number");
  });

  test("It should return the number of crew as 0 if no crew is onboard", () => {
    const mockData = ["", "hello", "&&", "0"];
    for (let i = 0; i < mockData.length; i++) {
      let mockDeathStarData = {
        results: [
          {
            crew: mockData[i],
          },
        ],
      };
      let crew = resolveCrew(mockDeathStarData);
      expect(crew).toEqual(0);
    }
  });
});

// testing the resolveLeia function
describe("Testing the resolveLeia function", () => {
  test("It should return whether Leia is on Alderaan as a boolean value", async () => {
    const isLeiaOnPlanet = await resolveLeia(alderaanData);
    expect(typeof isLeiaOnPlanet).toBe("boolean");
  });
});

// testing the showAttack function
describe("Testing the showAttack function", () => {
  test("It should return the information on the attack", async () => {
    const starship = await resolveStarship(vaderData);
    const crew = resolveCrew(deathStarData);
    const isLeiaOnPlanet = await resolveLeia(alderaanData);
    console.log({ starship, crew, isLeiaOnPlanet });
    expect(typeof { starship, crew, isLeiaOnPlanet }).toBe("object");
    expect(typeof { starship, crew, isLeiaOnPlanet }.starship).toBe("object");
    expect(typeof { starship, crew, isLeiaOnPlanet }.crew).toBe("number");
    expect(typeof { starship, crew, isLeiaOnPlanet }.isLeiaOnPlanet).toBe(
      "boolean"
    );
  });
});
