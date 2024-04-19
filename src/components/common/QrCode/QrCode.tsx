'use client';

import { useQRCode } from 'next-qrcode';
import type { IQRCode } from 'next-qrcode/dist/useQRCode';

interface QrCodeProps extends IQRCode {}

export const QrCode = (props: QrCodeProps) => {
  const QRCode = useQRCode();

  return <QRCode.SVG {...props} />;
};
