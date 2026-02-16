export default function CityFilter({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Filter by city..."
      className="border p-2 w-full rounded mb-4"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
