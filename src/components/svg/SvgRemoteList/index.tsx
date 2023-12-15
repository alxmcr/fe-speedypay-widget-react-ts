import SvgRemote from '../SvgRemote';

export default function SvgRemoteList() {
  const BASE_URL = 'http://localhost:5173/public';

  return (
    <div>
      <SvgRemote
        url={`${BASE_URL}/logos/Logo-Fitters.svg`}
        width={154}
        height={42}
      />
      <SvgRemote
        url={`${BASE_URL}/logos/Logo-Finberry.svg`}
        width={154}
        height={42}
      />
      <SvgRemote
        url={`${BASE_URL}/logos/Logo-Betsson.svg`}
        width={154}
        height={42}
      />
    </div>
  );
}
