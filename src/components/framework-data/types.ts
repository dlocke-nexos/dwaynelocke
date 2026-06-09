export type FunctionProfile = {
  id: string;
  label: string;
  purpose: string;
  activities: string[];
  metrics: string[];
};

export type StageProfile = {
  id: string;
  num: number;
  title: string;
  sub: string;
  capability: string;
  capabilityLocation: string;
  howWorkPerformed: string;
  operationalChange: string;
};

export type Intersection = {
  headline: string;
  operations: string[];
  metrics: string[];
};

export type StructureLayer = {
  id: string;
  title: string;
  sub?: string;
  body: string;
  split?: true;
  left?: { label: string; sub: string };
  right?: { label: string; sub: string };
};

export type FrameworkData = {
  structureLayers: StructureLayer[];
  functions: FunctionProfile[];
  evolutionStages: StageProfile[];
  intersections: Record<string, Record<string, Intersection>>;
};
