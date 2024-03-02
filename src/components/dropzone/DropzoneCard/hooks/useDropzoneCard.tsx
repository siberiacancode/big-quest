import React from 'react';
import { toast } from 'sonner';

import { useI18n } from '@/utils/contexts';

import type { FileType } from '../constants/types';

interface UseDropzoneCardProps {
  url: string;
  setFile: (props: File | undefined) => void;
  fileType: FileType;
}

export const useDropzoneCard = ({ url, setFile, fileType }: UseDropzoneCardProps) => {
  const [fileUrl, setFileUrl] = React.useState<string>(url);
  const i18n = useI18n();

  const handleFileChange = (files: File[]) => {
    setFileUrl(URL.createObjectURL(files[0]));
    setFile(files[0]);
  };

  const onError = () =>
    toast.error(i18n.formatMessage({ id: `dropzone.${fileType}.error` }), {
      cancel: { label: i18n.formatMessage({ id: 'toast.cancel.label' }) }
    });

  const deleteFile = () => {
    setFile(undefined);
    setFileUrl('');
  };

  return {
    state: { fileUrl },
    functions: { handleFileChange, onError, deleteFile }
  };
};
