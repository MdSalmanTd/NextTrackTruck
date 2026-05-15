export type User = {
  _id: number;
  fullname: string;
  email: string;
  contact: string;
  role: "driver" | "owner" | "admin";
};

export type Trip = {
  _id: string;
  driver: { fullname: string };
  vehicle: string;
  date: string;
  fromLocation: string;
  toLocation: string;
  deposit: number;
  cost: number;
  comments: string;
};

export type TripForm = {
  vehicle: string;
  date: string;
  fromLocation: string;
  toLocation: string;
  deposit: string;
  cost: string;
  comments: string;
};
