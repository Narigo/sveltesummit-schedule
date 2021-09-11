import type { ScheduleItems, ScheduleItemWithTime } from "./schedule-item";

export function isScheduleByTimes(
  schedule: ScheduleItems
): schedule is ScheduleItemWithTime[] {
  return schedule.length === 0 || !!(schedule[0] as ScheduleItemWithTime).time;
}
