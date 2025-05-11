interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Logo = ({ size = 200, ...props }: LogoProps) => {
  return (
    <svg
      width={size}
      height={(size * 1) / 5}
      viewBox="0 0 1000 200"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="200"
        fontWeight="bold"
        fontFamily="Arial, Helvetica, sans-serif"
        letterSpacing="5"
      >
        LUCAS
      </text>
    </svg>
  );
};
