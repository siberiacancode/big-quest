export type ActivityActionType = 'add' | 'edit' | 'info';

export interface ActivityMediaProps {
  id: number;
  url: string;
  position: number;
  type: 'image' | 'video';
  ext: string;
  size: number;
  isAvatar: boolean;
}

export interface ActivityProps {
  id: string;
  media: ActivityMediaProps[];
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
