import { IconProps } from ".";

export const Close = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M7 7L17 17M17 7L7 17" stroke="#333333" strokeLinecap="round" />
    </svg>
  );
};
