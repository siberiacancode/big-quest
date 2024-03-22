import { toast } from 'sonner';

import { useI18n } from '@/utils/contexts';

import type { FileType } from '../constants/types';

interface UseDropzoneCardProps {
  type: FileType;
}

export const useDropzoneCard = ({ type }: UseDropzoneCardProps) => {
  const i18n = useI18n();

  const onError = () =>
    toast.error(i18n.formatMessage({ id: `dropzone.${type}.error` }), {
      cancel: { label: i18n.formatMessage({ id: 'button.close' }) }
    });

  return {
    functions: { onError }
  };
};
