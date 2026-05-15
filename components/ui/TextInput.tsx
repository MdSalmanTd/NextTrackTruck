type TextInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
};

export function TextInput({ label, value, onChange, type = "text" }: TextInputProps) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm text-neutral-400">{label}</span>
      <input
        required
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-lg border border-white/15 bg-neutral-950 px-3 py-2.5 text-white outline-none focus:border-white"
      />
    </label>
  );
}
