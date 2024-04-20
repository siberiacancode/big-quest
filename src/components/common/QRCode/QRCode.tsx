'use client';

import { useQRCode } from 'next-qrcode';
import type { IQRCode } from 'next-qrcode/dist/useQRCode';

type QRCodeProps = IQRCode;

export const QRCode = (props: QRCodeProps) => {
  const QRCode = useQRCode();

  return <QRCode.SVG {...props} />;
};
