import React from 'react';
import { cn } from "@/lib/utils";

interface NavItem {
  icon: LucideIcon;
  label: string;
}

interface BottomNavItemProps {
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

interface BottomNavigationProps {
  items: NavItem[];
  activeItem: string;
  onItemClick: (label: string) => void;
}

const BottomNavItem: React.FC<BottomNavItemProps> = ({ icon: Icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={cn(
      "flex flex-col items-center justify-center flex-1 py-2 text-sm font-medium transition-colors",
      isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
    )}
  >
    <Icon className="w-6 h-6 mb-1" />
    <span>{label}</span>
  </button>
);

const BottomNavigation: React.FC<BottomNavigationProps> = ({ items, activeItem, onItemClick }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border">
      <div className="flex justify-around">
        {items.map((item) => (
          <BottomNavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            isActive={activeItem === item.label}
            onClick={() => onItemClick(item.label)}
          />
        ))}
      </div>
    </nav>
  );
};

BottomNavigation.displayName = "BottomNavigation";
export default BottomNavigation;


