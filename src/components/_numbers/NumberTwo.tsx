type NumberTwoProps = {
  fillColor?: string;
};

export default function NumberTwo({ fillColor = '#EBFFFD' }: NumberTwoProps) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="13" cy="13" r="10" fill="currentColor" />
      <path
        d="M16.2145 18H9.7025V17.12C13.1158 14.5067 14.8225 12.3307 14.8225 10.592C14.8225 9.86667 14.6145 9.31733 14.1985 8.944C13.7932 8.56 13.2438 8.368 12.5505 8.368C11.7505 8.368 10.9292 8.67733 10.0865 9.296V8.304C10.8118 7.728 11.6438 7.44 12.5825 7.44C13.4785 7.44 14.2465 7.712 14.8865 8.256C15.5265 8.78933 15.8465 9.552 15.8465 10.544C15.8465 12.4 14.2625 14.592 11.0945 17.12H16.2145V18Z"
        fill={fillColor}
      />
    </svg>
  );
}
