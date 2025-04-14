import Checkbox from "@/components/day-3/Checkbox";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/day-3/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [items, setItems] = useState([
    { id: 1, label: "Buy groceries", checked: false },
    { id: 2, label: "Contemplate existence", checked: true },
    { id: 3, label: "Learn SwiftUI", checked: false },
  ]);

  const handleCheckboxChange = (itemToChange: any) =>
    setItems((_items) =>
      items.map((item) => {
        if (item === itemToChange) {
          return { ...item, checked: !item.checked };
        }

        return item;
      })
    );

  return (
    <div className="page-container">
      <div className="list-container">
        {items.map((item) => (
          <Checkbox
            key={item.id}
            checked={item.checked}
            onChange={() => handleCheckboxChange(item)}
          >
            {item.label}
          </Checkbox>
        ))}
      </div>
    </div>
  );
}
