import React from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { useGetActivitiesQuery } from '@/utils/api';
import { useI18n } from '@/utils/contexts';

const DEFAULT_ACTIVITIES_LIMIT = '10';
const DEFAULT_ACTIVITIES_PAGE = '1';

export const useActivityCard = ({ params }: { params: { organizationId: string } }) => {
  const i18n = useI18n();
  const router = useRouter();

  const [infoDialogOpen, setInfoDialogOpen] = React.useState(false);
  const [editDialogOpen, setEditDialogOpen] = React.useState(false);
  const [isEditPending, startEditTransition] = React.useTransition();

  const getActivityResponse = useGetActivitiesQuery({
    config: {
      params: {
        limit: DEFAULT_ACTIVITIES_LIMIT,
        current: DEFAULT_ACTIVITIES_PAGE,
        ...params
      },
      cache: 'no-store'
    }
  });

  const onEdit = () => {
    toast.success(i18n.formatMessage({ id: 'toast.editAddress' }), {
      cancel: { label: i18n.formatMessage({ id: 'button.close' }) }
    });

    setEditDialogOpen(false);
    startEditTransition(() => router.refresh());
  };

  const onEditClick = () => setEditDialogOpen(true);
  const onEditCloseClick = () => setEditDialogOpen(false);

  const onInfoClick = () => setInfoDialogOpen(true);
  const onInfoCloseClick = () => setInfoDialogOpen(false);

  return {
    state: {
      activities: getActivityResponse.data?.rows ?? [],
      isActivitiesLoading: getActivityResponse.isPending,
      infoDialogOpen,
      editDialogOpen,
      isLoading: isEditPending
    },
    functions: {
      onEdit,
      onEditClick,
      onEditCloseClick,
      onInfoClick,
      onInfoCloseClick
    }
  };
};
