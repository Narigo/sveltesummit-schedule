import { isScheduleByTimes } from "$lib/service/is-schedule-by-times";
import type {
  ScheduleItems,
  ScheduleItemWithTime,
} from "../service/schedule-item";

function nf(d: number): string {
  return `${d < 10 ? "0" : ""}${d}`;
}

function addDurationToTime(duration: string, time: string): string {
  const [ah, am] = time.split(/:/).map((x) => parseInt(x, 10));
  const [dh, dm] = duration.split(/:/).map((x) => parseInt(x, 10));
  const h = Math.floor((am + dm) / 60) + dh + ah;
  const m = (am + dm) % 60;
  return `${h}:${nf(m)}`;
}

export default function getScheduleByTimes(
  schedule: ScheduleItems
): ScheduleItemWithTime[] {
  return isScheduleByTimes(schedule)
    ? schedule
    : schedule.reduce<ScheduleItemWithTime[]>((s, item, index) => {
        return [
          ...s,
          {
            name: item.name,
            link: item.link,
            time:
              index === 0
                ? "0:00"
                : addDurationToTime(item.duration, s[s.length - 1].time),
          },
        ];
      }, []);
}
