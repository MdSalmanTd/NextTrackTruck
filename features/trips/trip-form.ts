import type { TripForm } from "@/types/domain";

export const emptyTrip: TripForm = {
  vehicle: "",
  date: "",
  fromLocation: "",
  toLocation: "",
  deposit: "",
  cost: "",
  comments: "",
};
