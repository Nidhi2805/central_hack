import { ReactNode } from "react";

interface AccentButtonProps {
  children: ReactNode;
}

export default function AccentButton({ children }: AccentButtonProps) {
  return (
    <button className="text-text bg-buttons-primary px-6 py-3 rounded-xl w-fit font-bold text-2xl">
      {children}
    </button>
  );
}
