import { render, screen, fireEvent } from "@testing-library/react";
import StationList from "./StationList";


const mockStations = [
  { id: 1, name: "Berlin Hbf", city: "Berlin", lat: 52.525, lon: 13.369 },
  { id: 2, name: "Munich Hbf", city: "Munich", lat: 48.140, lon: 11.558 },
];

describe("StationList Component", () => {
  test("renders stations and responds to click", () => {
    const onSelect = jest.fn();
    render(
      <StationList
        stations={mockStations}
        selectedStation={null}
        onSelect={onSelect}
      />
    );

    // همه ایتم‌ها نمایش داده شدن
    expect(screen.getByText("Berlin Hbf")).toBeInTheDocument();
    expect(screen.getByText("Munich Hbf")).toBeInTheDocument();

    // شبیه‌سازی کلیک روی ایتم اول
    fireEvent.click(screen.getByText("Berlin Hbf"));
    expect(onSelect).toHaveBeenCalledWith(mockStations[0]);
  });

  test("shows 'No stations found' when stations empty", () => {
    const onSelect = jest.fn();
    render(
      <StationList stations={[]} selectedStation={null} onSelect={onSelect} />
    );
    expect(screen.getByText("No stations found")).toBeInTheDocument();
  });
});
