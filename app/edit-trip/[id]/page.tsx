import { EditTripScreen } from "@/features/trips/EditTripScreen";

type EditTripPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditTripPage({ params }: EditTripPageProps) {
  const { id } = await params;

  return <EditTripScreen editId={id} />;
}
