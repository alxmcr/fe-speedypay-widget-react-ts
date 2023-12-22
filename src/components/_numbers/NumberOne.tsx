type NumberOneProps = {
  colorText?: string;
  fillColor?: string;
};

export default function NumberOne({
  colorText = 'currentColor',
  fillColor = '#EBFFFD',
}: NumberOneProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} fill="none">
      <circle cx={13} cy={13} r={10} fill={colorText} />
      <path
        fill={fillColor}
        d="M14.187 18h-.976V8.608L10.86 10.08V8.976l2.352-1.44h.976V18Z"
      />
    </svg>
  );
}
