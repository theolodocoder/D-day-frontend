export interface EventItem {
  name: string;
  event: "Birthday" | "Anniversary";
  date: Date;
  status: "Sent" | "Pending";
}

export type Events = EventItem[];
