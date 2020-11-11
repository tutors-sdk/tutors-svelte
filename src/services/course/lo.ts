import type { Topic } from "./topic";

export interface Student {
  name: string;
  github: string;
}

export interface WeekType {
  title: string;
  type: string;
  date: string;
}

export interface Calendar {
  title: string;
  weeks: WeekType[];
}

export interface VideoIdentifier {
  service: string;
  id: string;
}

export interface VideoIdentifiers {
  videoid: string;
  videoIds: VideoIdentifier[];
}

export interface Lo {
  properties: { [prop: string]: string };
  enrollment: { students: Student[] };
  calendar: any;
  version: string;
  type: string;
  shortTitle: string;
  title: string;
  img: string;
  video: string;
  videoids?: VideoIdentifiers;
  pdf: string;
  summary: string;
  contentMd: string;
  route: string;
  id: string;
  hide: boolean;
  los: Lo[];
  parent: Topic;
}
