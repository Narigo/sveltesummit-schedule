import calculateTime from "./calculate-time";

describe("calculateTime", () => {
  it("returns the string when start is 0 and no offset", () => {
    expect(
      calculateTime({
        time: "02:30",
        startInMinutes: 0,
        offsetInMinutes: 0,
      })
    ).toBe("02:30");
  });
  it("adds the start time", () => {
    expect(
      calculateTime({
        time: "02:30",
        startInMinutes: 12 * 60,
        offsetInMinutes: 0,
      })
    ).toBe("14:30");
  });
  it("can add an offset to a time", () => {
    expect(
      calculateTime({
        time: "02:30",
        startInMinutes: 12 * 60,
        offsetInMinutes: 0,
      })
    ).toBe("15:00");
  });
});
