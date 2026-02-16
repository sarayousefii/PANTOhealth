import { FaTrain } from "react-icons/fa"; 
import { motion } from "framer-motion"; 

export default function StationList({ stations, selectedStation, onSelect }) {
  if (!stations || stations.length === 0) {
    return (
      <div className="p-4 text-gray-400 text-center italic">
        No stations found
      </div>
    );
  }

  return (
    <ul className="overflow-y-auto h-[calc(100vh-150px)] space-y-3 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
      {stations.map((station) => {
        const isSelected = selectedStation?.id === station.id;

        return (
          <motion.li
            key={station.id}
            onClick={() => onSelect(station)}
            whileHover={{ scale: 1.03 }}
            layout
            className={`flex items-center justify-between p-4 cursor-pointer rounded-xl shadow-md transition-all
              ${isSelected ? "bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg" : "bg-white hover:shadow-lg"}`}
          >
            <div className="flex items-center gap-4">
              <FaTrain className={`text-2xl ${isSelected ? "text-white" : "text-blue-500"}`} />
              <div className="flex flex-col">
                <span className={`font-semibold ${isSelected ? "text-white" : "text-gray-800"}`}>
                  {station.name}
                </span>
                <span className={`text-sm ${isSelected ? "text-blue-100" : "text-gray-500"}`}>
                  {station.city}
                </span>
              </div>
            </div>
            {isSelected && (
              <span className="px-3 py-1 bg-white/30 text-white text-xs font-medium rounded-full">
                Selected
              </span>
            )}
          </motion.li>
        );
      })}
    </ul>
  );
}
