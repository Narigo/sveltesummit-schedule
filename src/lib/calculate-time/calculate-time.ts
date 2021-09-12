function nf(n: number): string {
  return `${n}`.padStart(2, "0");
}

function formatTime({
  hours,
  minutes,
}: {
  hours: number;
  minutes: number;
}): string {
  return `${nf(hours)}:${nf(minutes)}`;
}

export default function calculateTime(
  time: string,
  start: number,
  offsetInMinutes: number
): string {
  const [h, m] = time.split(/:/).map((x) => parseInt(x, 10));
  const offsetTimeInMinutes = h * 60 + m + offsetInMinutes + start;
  const hourWithOffset = Math.floor(offsetTimeInMinutes / 60) % 24;
  const minsWithOffset = offsetTimeInMinutes % 60;
  return formatTime({ hours: hourWithOffset, minutes: minsWithOffset });
}
