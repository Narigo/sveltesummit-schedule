import getScheduleByTimes from "./get-schedule-by-times";
import scheduleWithDurations from "./__fixtures/schedule-with-durations";
import scheduleWithTimes from "./__fixtures/schedule-with-times";

describe("scheduleFromDurations", () => {
  it("returns empty list on empty list", () => {
    const result = getScheduleByTimes([]);
    expect(result).toEqual([]);
  });

  it("converts a real list of schedule items with durations", () => {
    const result = getScheduleByTimes(scheduleWithDurations);
    expect(result).toEqual(scheduleWithTimes);
  });
});
