import server from "../index.js";
import request from "supertest";

afterAll(() => {
  server.close();
});

describe("Testing API enpoints", () => {
  test("The /information endpoint should return the correct data", async () => {
    const res = await request(server).get("/information");
    expect(res.statusCode).toBe(200);
    expect(typeof res.body).toBe("object");
    expect(typeof res.body.starship).toBe("object");
    if (Object.keys(res.body.starship) !== 0) {
      expect(typeof res.body.starship.name).toBe("string");
      expect(typeof res.body.starship.class).toBe("string");
      expect(typeof res.body.starship.model).toBe("string");
      expect(typeof res.body.crew).toBe("number");
      expect(typeof res.body.isLeiaOnPlanet).toBe("boolean");
    } else {
      expect(res.body.starship).toEqual({});
    }
  });
});
