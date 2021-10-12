export type ScheduleMeta = {
  variant: "spring" | "fall";
  value: string;
  label: string;
  start: Date;
};

const availableSchedules: ScheduleMeta[] = [
  {
    variant: "spring",
    value: `svelte-summit-2021-spring`,
    label: "Svelte Summit Spring 2021",
    start: new Date("2021-04-25T14:00:00Z"),
  },
  {
    variant: "fall",
    value: `svelte-summit-2021-fall`,
    label: "Svelte Summit Fall 2021",
    start: new Date("2021-11-20T14:00:00Z"),
  },
];

export default availableSchedules;
