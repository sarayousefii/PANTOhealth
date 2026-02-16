// src/components/map/MapView.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import MapView from "./MapView";

const mockStations = [
  { id: 1, name: "Berlin Hbf", city: "Berlin", lat: 52.525, lng: 13.369 },
  { id: 2, name: "Munich Hbf", city: "Munich", lat: 48.140, lng: 11.558 },
];

// Mock react-leaflet
jest.mock("react-leaflet", () => ({
  MapContainer: ({ children }) => <div data-testid="map">{children}</div>,
  TileLayer: () => <div>TileLayer</div>,
  Marker: ({ children, ...props }) => (
    <div data-testid="marker" onClick={props.eventHandlers?.click}>
      {children}
    </div>
  ),
  Popup: ({ children }) => <div>{children}</div>,
  useMap: () => ({ setView: jest.fn() }),
}));

describe("MapView Component", () => {
  test("renders map and markers", () => {
    render(<MapView stations={mockStations} selectedStation={null} />);

    expect(screen.getByTestId("map")).toBeInTheDocument();
    expect(screen.getAllByTestId("marker")).toHaveLength(mockStations.length);

    // matcher انعطاف‌پذیر برای متن
    expect(screen.getByText(/Berlin Hbf/i)).toBeInTheDocument();
    expect(screen.getByText(/Munich Hbf/i)).toBeInTheDocument();
  });

  test("renders MapZoom for selectedStation", () => {
    render(<MapView stations={mockStations} selectedStation={mockStations[0]} />);
    expect(screen.getByText(/Berlin Hbf/i)).toBeInTheDocument();
  });

  test("clicking on marker calls onSelect", () => {
    const onSelectMock = jest.fn();

    // MapView رو با onSelect props رندر می‌کنیم
    render(
      <MapView
        stations={mockStations}
        selectedStation={null}
        onSelect={onSelectMock}
      />
    );

    // simulate click روی marker اول
    fireEvent.click(screen.getAllByTestId("marker")[0]);

    // انتظار داریم onSelect فراخوانی شود
    expect(onSelectMock).toHaveBeenCalledWith(mockStations[0]);
  });
});
