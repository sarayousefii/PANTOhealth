export function filterStations(stations, city) {
  if (!city) return stations;

  return stations.filter((station) =>
    station.city.toLowerCase().includes(city.toLowerCase())
  );
}
