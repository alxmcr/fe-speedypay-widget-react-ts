import { useEffect, useState } from 'react';

interface SvgRemoteProps {
  url: string;
  width?: number;
  height?: number;
}

export default function SvgRemote({
  url,
  width = 24,
  height = 24,
}: SvgRemoteProps) {
  const [svgContent, setSvgContent] = useState<string>('');

  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then((content) => setSvgContent(content))
      .catch((error) => console.error(error));
  }, [url]);

  return (
    <>
      {svgContent && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      )}
    </>
  );
}
