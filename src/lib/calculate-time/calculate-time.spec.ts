import calculateTime from "./calculate-time";

describe("calculateTime", () => {
  it("returns the string when start is 0 and no offset", () => {
    expect(calculateTime("02:30", 0, 0)).toBe("02:30");
  });
  it("adds the start time", () => {
    expect(calculateTime("02:30", 12 * 60, 0)).toBe("14:30");
  });
  it("can add an offset to a time", () => {
    expect(calculateTime("02:30", 12 * 60, 30)).toBe("15:00");
  });
});
