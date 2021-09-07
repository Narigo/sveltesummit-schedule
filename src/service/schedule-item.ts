interface Talk {
  name: string;
  link?: string;
}
export interface ScheduleItemWithTime extends Talk {
  time: string;
}
export interface ScheduleItemWithDuration extends Talk {
  duration: string;
}
export type ScheduleItems = ScheduleItemWithTime[] | ScheduleItemWithDuration[];
