import type { User } from "@/types/domain";

export function getNavigationLinks(user: User) {
  const links = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/add-trip", label: "Add Trip" },
  ];

  if (user.role === "admin" || user.role === "owner") {
    links.push({ href: "/all-trips", label: "Trips Data" });
  }

  return links;
}
