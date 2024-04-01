export type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

export type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

export type MissionInfo = [
  launchesPast: {
    id: string;
    mission_id: string;
    mission_name: string;
    launch_year: string;
    rocket: {
      rocket_name: string;
      rocket_type: string;
    };
  }
];
