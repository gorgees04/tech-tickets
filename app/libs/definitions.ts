export interface TicketData {
  title: string;
  description: string;
  category: string;
  priority: string;
  progress: number;
  status: string;
}

export interface TicketCard {
  id: string;
  title: string;
  description: string;
  category: string;
  priority: string;
  progress: number;
  status: string;
  createdAt: string;
}
