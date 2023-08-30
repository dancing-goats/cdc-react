import { IconProps } from ".";

export const CheveronDoubleLeft = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M12 7L7 12L12 17M18 7L13 12L18 17"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
};
