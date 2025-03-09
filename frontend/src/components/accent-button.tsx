import { ButtonHTMLAttributes, ReactNode } from "react";

interface AccentButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function AccentButton({
  children,
  ...props
}: AccentButtonProps) {
  return (
    <button
      {...props}
      className={`text-text bg-buttons-primary px-6 py-3 rounded-xl w-fit font-bold text-2xl transition-colors duration-100 hover:bg-buttons-secondary ${props.className}`}
    >
      {children}
    </button>
  );
}
