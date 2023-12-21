import bwipjs, { RenderOptions } from 'bwip-js/browser';
import React from 'react';

type BarcodeProps = {
  text: string;
  height?: number;
  width?: number;
  includetext?: boolean;
  barcolor?: string;
};

export default function Barcode({
  text = '',
  includetext = false,
  height = 64,
  width = 284,
  barcolor = '#000',
}: BarcodeProps) {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const opts: RenderOptions = {
      bcid: 'code128', // Barcode type
      text, // Text to encode
      scale: 2, // Scale factor
      width,
      height, // Barcode height, in millimeters
      includetext, // Show human-readable text
      textxalign: 'center', // Text horizontal alignment
      //paddingbottom: 15, // Padding bottom, in pixels
      monochrome: false,
      barcolor,
    };

    if (canvas !== null) {
      bwipjs.toCanvas(canvas, opts);
    }
  }, [height, includetext, text, width, barcolor]);

  return (
    <canvas
      ref={canvasRef}
      height={height}
      width={width}
      style={{ height, width }}
    />
  );
}
