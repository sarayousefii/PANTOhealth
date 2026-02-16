import { useState, useMemo } from "react";
import useStations from "./hooks/useStations";
import { filterStations } from "./utils/filterStations";
import MapView from "./components/map/MapView";
import StationList from "./components/stations/StationList";
import CityFilter from "./components/filter/CityFilter";

function App() {
  const { stations, loading, error } = useStations();
  const [cityFilter, setCityFilter] = useState("");
  const [selectedStation, setSelectedStation] = useState(null);

  const filteredStations = useMemo(() => {
    return filterStations(stations, cityFilter);
  }, [stations, cityFilter]);

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <div className="md:w-1/4 p-4 h-[50vh] md:h-auto overflow-y-auto bg-gray-50">
        <CityFilter value={cityFilter} onChange={setCityFilter} />
        <StationList
          stations={filteredStations}
          selectedStation={selectedStation}
          onSelect={setSelectedStation}
        />
      </div>

      {/* Map */}
      <div className="md:w-3/4 h-[50vh] md:h-auto">
        <MapView
          stations={filteredStations}
          selectedStation={selectedStation}
          onSelect={setSelectedStation}
        />
      </div>
    </div>
  );
}

export default App;
