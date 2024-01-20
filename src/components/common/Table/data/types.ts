export type Application = {
  _id: string;
  organization: string;
  location: string;
  type: string;
  rate: number;
  days_amount: number;
  status: string;
};

// export type Application = {
//   id: string;
//   amount: number;
//   status: 'pending' | 'processing' | 'success' | 'failed';
//   email: string;
// };
