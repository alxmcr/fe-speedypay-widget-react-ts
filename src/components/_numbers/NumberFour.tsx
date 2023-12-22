type NumberFourProps = {
  colorText?: string;
  fillColor?: string;
};

export default function NumberFour({
  colorText = 'currentColor',
  fillColor = '#EBFFFD',
}: NumberFourProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} fill="none">
      <circle cx={13} cy={13} r={10} fill={colorText} />
      <path
        fill={fillColor}
        d="M10.455 14.496h3.84v-6.4l-3.84 6.4Zm4.8 3.504h-.96v-2.624H9.447v-.88l4.192-6.96h1.616v6.96h1.616v.88h-1.616V18Z"
      />
    </svg>
  );
}
