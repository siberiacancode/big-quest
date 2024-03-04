export interface ActivityProps {
  id: string;
  cover?: string;
  content?: string[];
  name: string;
  description?: string;
  ageLimit: number[];
  price: number;
  nutsCount: number;
  duration: number;
  replay: boolean;
  view: ActivityView;
  status: ActivityStatus;
  category: string;
  participants: number;
  likes: number;
  schedule?: Schedule[];
}
