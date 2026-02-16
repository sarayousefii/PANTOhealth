export default function StationList({ stations, selectedStation, onSelect }) {
  if (!stations || stations.length === 0) {
    return <div className="p-2 text-gray-500">No stations found</div>;
  }

  return (
    <ul className="overflow-y-auto h-[calc(100vh-100px)]">
      {stations.map((station) => (
        <li
          key={station.id}
          onClick={() => onSelect(station)}
          className={`p-2 cursor-pointer ${
            selectedStation?.id === station.id ? "bg-blue-100" : ""
          }`}
        >
          <strong>{station.name}</strong> - {station.city}
        </li>
      ))}
    </ul>
  );
}
