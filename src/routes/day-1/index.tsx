import { createFileRoute } from "@tanstack/react-router";

import FloatingMenu from "@/components/day-1/FloatingMenu";
import HomeIcon from "@/components/day-1/icons/house-solid.svg?react";
import MailIcon from "@/components/day-1/icons/envelope-solid.svg?react";
import ProfileIcon from "@/components/day-1/icons/user-solid.svg?react";
import SettingsIcon from "@/components/day-1/icons/gear-solid.svg?react";

export const Route = createFileRoute("/day-1/")({
  component: RouteComponent,
});

const menuItems = [
  { id: "home", icon: HomeIcon },
  { id: "mail", icon: MailIcon },
  { id: "profile", icon: ProfileIcon },
  { id: "settings", icon: SettingsIcon },
];

function RouteComponent() {
  return (
    <div className="Page-Container">
      <FloatingMenu
        menuItems={menuItems}
        onMenuItemClick={(item) => alert(item.id + " clicked")}
      />
    </div>
  );
}
