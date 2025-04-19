"use client";

import { Button } from "@/components/ui/button";
import Window from "@/components/window";
import Animation from "@/components/animation";
const carList = [
  {
    id: 1,
    name: "Car 1",
    content: {
      brand: "Toyota",
      model: "Corolla",
      year: 2020,
      color: "Red",
      price: 20000,
    },
  },
  {
    id: 2,
    name: "Car 2",
    content: {
      brand: "Ford",
      model: "Mustang",
      year: 2020,
      color: "Red",
      price: 20000,
    },
  },
  {
    id: 3,
    name: "Car 3",
    content: {
      brand: "Chevrolet",
      model: "Camaro",
      year: 2020,
      color: "Red",
      price: 20000,
    },
  },
];

export default function Home() {

  return (
    <div className="p-8 space-y-4">
      {carList.map((car) => (
        <Window
          key={car.id}
          trigger={
            <Button className="car-button transform hover:scale-105 transition-transform">
              {car.name}
            </Button>
          }
          title={car.name}
        >
          <p>{car.content.brand}</p>
          <p>{car.content.model}</p>
          <p>{car.content.year}</p>
          <p>{car.content.color}</p>
          <p>{car.content.price}</p>
        </Window>
      ))}

      <Animation />
    </div>
  );
}
