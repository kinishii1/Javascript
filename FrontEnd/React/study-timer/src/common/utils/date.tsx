export function toSecond(time: string | undefined | null): number {
  if (!time) {
    return 0;
  }
  const [hours, minutes, seconds] = time.split(":").map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}