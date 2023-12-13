import './ButtonSolid.scss';

type ButtonSolidProps = {
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

export default function ButtonSolid({
  children,
  disabled = false,
  onClick,
}: ButtonSolidProps) {
  return (
    <button className="button-solid" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
