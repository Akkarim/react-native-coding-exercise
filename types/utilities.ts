export type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

export type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

export type MissionInfo = {
  missionName: string;
  missionRocketName: string;
  missionRocketType: string;
  missionLaunchYear: string;
}
