'use client';

import React from 'react';

export interface ActivityMedia {
  id: number;
  url: string;
  position: number;
  type: 'image' | 'video';
  ext: string;
  size: number;
  isAvatar: boolean;
}

export interface ActiveMediaFile {
  url: string;
  isAvatar: boolean;
}

export interface DeletedMediaArray {
  id: number;
  isAvatar: boolean;
}

export interface UploadedMediaArray {
  file: File;
  url: string;
  isAvatar: boolean;
}

export interface ActivityMediaContextParams {
  activityMedia: ActivityMedia[];
  setActivityMedia: (activityMedia: ActivityMedia[]) => void;
  activeMediaFile: ActiveMediaFile;
  setActiveMediaFile: (activeMediaFile: ActiveMediaFile) => void;
  deletedMediaArray: DeletedMediaArray[];
  setDeletedMediaArray: (deletedMediaArray: DeletedMediaArray[]) => void;
  uploadedMediaArray: UploadedMediaArray[];
  setUploadedMediaArray: (uploadedMediaArray: UploadedMediaArray[]) => void;
}

export const ActivityMediaContext = React.createContext<ActivityMediaContextParams>({
  activityMedia: [],
  setActivityMedia: () => {},
  activeMediaFile: { url: '', isAvatar: false },
  setActiveMediaFile: () => {},
  deletedMediaArray: [],
  setDeletedMediaArray: () => {},
  uploadedMediaArray: [],
  setUploadedMediaArray: () => {}
});
