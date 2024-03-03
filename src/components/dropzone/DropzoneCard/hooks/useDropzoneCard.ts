import { toast } from 'sonner';

import { useI18n } from '@/utils/contexts';

import type { FileType } from '../constants/types';

interface UseDropzoneCardProps {
  onChange: (props: File | undefined) => void;
  type: FileType;
}

export const useDropzoneCard = ({ onChange, type }: UseDropzoneCardProps) => {
  const intl = useI18n();

  const onError = () =>
    toast.error(intl.formatMessage({ id: `dropzone.${type}.error` }), {
      cancel: { label: intl.formatMessage({ id: 'toast.cancel.label' }) }
    });

  const deleteFile = () => {
    onChange(undefined);
  };

  return {
    functions: { onError, deleteFile }
  };
};
