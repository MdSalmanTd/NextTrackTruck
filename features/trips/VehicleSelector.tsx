import Image from "next/image";

export function VehicleSelector({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm font-medium">Select Vehicle *</legend>
      <div className="grid grid-cols-2 gap-4">
        {[
          ["Truck1", "Truck 1", "/images/truck1.png"],
          ["Truck2", "Truck 2", "/images/truck2.png"],
        ].map(([vehicle, label, image]) => (
          <label key={vehicle} className="cursor-pointer">
            <input
              required
              type="radio"
              name="vehicle"
              value={vehicle}
              checked={value === vehicle}
              onChange={() => onChange(vehicle)}
              className="peer sr-only"
            />
            <span className="block overflow-hidden rounded-lg border border-white/15 peer-checked:border-white">
              <Image
                src={image}
                alt={label}
                width={240}
                height={128}
                className="h-32 w-full bg-black object-contain p-3 opacity-75 peer-checked:opacity-100"
              />
            </span>
            <span className="mt-2 block text-center text-sm text-neutral-300">{label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
