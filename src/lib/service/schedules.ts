export type ScheduleMeta = { value: string; label: string; start: Date };

const availableSchedules: ScheduleMeta[] = [
  {
    value: `svelte-summit-2021-spring`,
    label: "Svelte Summit Spring 2021",
    start: new Date("2021-04-25T14:00:00Z"),
  },
];

export default availableSchedules;
