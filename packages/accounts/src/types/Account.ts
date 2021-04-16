export type Details = {
  key: string;
  value: string | number;
};

export type Status = {
  date: string;
  period: string;
};

export type Account = {
  id: string;
  vendor: string;
  type: string;
  details?: Details[];
  status?: Status[];
};
