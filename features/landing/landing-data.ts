export const primaryNavLinks = [
  { href: "/features", label: "Features" },
  { href: "/solutions", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const landingFeatures = [
  {
    eyebrow: "Operations",
    title: "Trip dashboard",
    desc: "Track active, completed, and delayed trips with the details dispatch needs at a glance.",
    accent: "bg-slate-950",
  },
  {
    eyebrow: "Planning",
    title: "Add and edit trips",
    desc: "Log origin, destination, vehicle, cost, and notes in one workflow built for fast updates.",
    accent: "bg-slate-800",
  },
  {
    eyebrow: "People",
    title: "Driver visibility",
    desc: "Keep driver records tied to every trip so ownership and accountability stay clear.",
    accent: "bg-slate-700",
  },
  {
    eyebrow: "History",
    title: "All trips view",
    desc: "Review the full trip archive, search by route or vehicle, and keep records ready for audit.",
    accent: "bg-slate-900",
  },
  {
    eyebrow: "Access",
    title: "Role-based views",
    desc: "Owners, admins, and drivers see the views they need without unnecessary noise.",
    accent: "bg-slate-950",
  },
  {
    eyebrow: "Reporting",
    title: "Export-ready records",
    desc: "Keep data structured for reporting, finance review, and monthly reconciliation.",
    accent: "bg-slate-800",
  },
  {
    eyebrow: "Mobility",
    title: "Mobile-first workflows",
    desc: "Fast forms and compact summaries make it practical to work from the yard or the road.",
    accent: "bg-slate-700",
  },
  {
    eyebrow: "Performance",
    title: "Calm, responsive UI",
    desc: "A light app shell keeps the experience quick for teams checking trips throughout the day.",
    accent: "bg-slate-900",
  },
] as const;

export const landingSteps = [
  {
    n: "01",
    title: "Create the account",
    desc: "Register the operation once and set access for the people who need it.",
  },
  {
    n: "02",
    title: "Log the first trip",
    desc: "Capture the truck, route, date, cost, and notes in one focused form.",
  },
  {
    n: "03",
    title: "Review the day",
    desc: "Use the dashboard and trip table to keep every move visible and traceable.",
  },
  {
    n: "04",
    title: "Export what finance needs",
    desc: "Share structured trip records without rebuilding reports by hand.",
  },
] as const;

export const heroStats = [
  { value: "128", label: "Active trips" },
  { value: "96%", label: "On-time rate" },
  { value: "14", label: "Vehicles online" },
  { value: "4 min", label: "Avg. update time" },
] as const;

export const heroTrips = [
  { route: "Lagos to Ibadan", vehicle: "Truck 08", status: "In transit", time: "ETA 14:40" },
  { route: "Port Harcourt depot", vehicle: "Truck 11", status: "Loading", time: "Next stop 10:30" },
  { route: "Abuja route 3", vehicle: "Truck 04", status: "Completed", time: "Closed 08:15" },
] as const;

export const tickerItems = [
  "Trip logging",
  "Route records",
  "Driver visibility",
  "Owner dashboard",
  "CSV export",
  "Mobile ready",
] as const;

export const solutionCards = [
  {
    title: "Fleet owners",
    desc: "Get an executive view of fleet activity, trip costs, and vehicle usage without spreadsheets.",
  },
  {
    title: "Dispatch teams",
    desc: "Keep the current load, route, and handoff state in one place so coordination stays tight.",
  },
  {
    title: "Drivers",
    desc: "See exactly what needs to be done next, with less back-and-forth on the phone.",
  },
] as const;

export const pricingPlans = [
  {
    name: "Starter",
    price: "Custom",
    description: "For a small fleet that wants a clean trip log and basic reporting.",
    items: ["Trip logging", "Driver records", "Dashboard summary"],
  },
  {
    name: "Operations",
    price: "Custom",
    description: "For teams that need permissions, exports, and a more complete workflow.",
    items: ["Role-based access", "Trip archive", "CSV export", "Priority support"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For operations with multiple depots, custom flows, and onboarding needs.",
    items: ["Multi-team setup", "Implementation support", "Custom reporting"],
  },
] as const;

export const companyValues = [
  {
    title: "Clear by default",
    desc: "The interface keeps the important trip details visible without forcing the team through extra clicks.",
  },
  {
    title: "Built for the field",
    desc: "Fast forms and responsive layouts make the product practical on busy days and mobile screens.",
  },
  {
    title: "Simple to extend",
    desc: "The data model is structured enough for growth, reporting, and future integrations.",
  },
] as const;

export const contactChannels = [
  { label: "Sales", value: "sales@tracktruck.io" },
  { label: "Support", value: "support@tracktruck.io" },
  { label: "Phone", value: "+234 800 000 0000" },
] as const;

export const landingStats = [
  { value: "10k+", label: "Trips ready" },
  { value: "24/7", label: "Access" },
  { value: "3 min", label: "Setup" },
] as const;
