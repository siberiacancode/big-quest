'use client';

import React from 'react';

import type {
  ActiveMediaFile,
  ActivityMedia,
  DeletedMediaArray,
  UploadedMediaArray
} from './ActivityMediaContext';
import { ActivityMediaContext } from './ActivityMediaContext';

export interface ActivityMediaProviderProps {
  children: React.ReactNode;
  defaultActivityMedia?: ActivityMedia[];
  defaultActiveMediaFile?: ActiveMediaFile;
}

export const ActivityMediaProvider = ({
  children,
  defaultActivityMedia = [],
  defaultActiveMediaFile = { url: '', isAvatar: false }
}: ActivityMediaProviderProps) => {
  const [activityMedia, setActivityMedia] = React.useState<ActivityMedia[]>(defaultActivityMedia);
  const [activeMediaFile, setActiveMediaFile] =
    React.useState<ActiveMediaFile>(defaultActiveMediaFile);
  const [deletedMediaArray, setDeletedMediaArray] = React.useState<DeletedMediaArray[]>([]);
  const [uploadedMediaArray, setUploadedMediaArray] = React.useState<UploadedMediaArray[]>([]);

  const value = React.useMemo(
    () => ({
      activityMedia,
      activeMediaFile,
      deletedMediaArray,
      uploadedMediaArray,
      setActivityMedia,
      setActiveMediaFile,
      setDeletedMediaArray,
      setUploadedMediaArray
    }),
    [activityMedia, activeMediaFile, deletedMediaArray, uploadedMediaArray]
  );

  return <ActivityMediaContext.Provider value={value}>{children}</ActivityMediaContext.Provider>;
};
