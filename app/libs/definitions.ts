export interface TicketData {
  title: string;
  description: string;
  category: string;
  priority: string;
  progress: number;
  status: string;
}

export interface TicketCard {
  _id: string;
  title: string;
  description: string;
  category: string;
  priority: string;
  progress: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface SolvedCard {
  _id: string;
  title: string;
  description: string;
  category: string;
  priority: string;
  progress: number;
  status: string;
  createdTime: "2023-12-22T02:25:49.368Z";
  editedTime: "2023-12-22T02:25:49.368Z";
  createdAt: string;
}
