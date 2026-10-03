import { afterAll, beforeAll, expect, test } from "vitest";

//

beforeAll(() => {
  console.log("before");
});
afterAll(() => {
  console.log("after");
});

test("get all employees", async () => {
  expect(2 + 2).toBe(4);
});
