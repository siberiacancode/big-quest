/**
 * Generated by orval v6.27.1 🍺
 * Do not edit manually.
 * BQ
 * ## API BQ
 * OpenAPI spec version: 1.0
 */

export type ActivityControllerGetPublicActivitysStatus =
  (typeof ActivityControllerGetPublicActivitysStatus)[keyof typeof ActivityControllerGetPublicActivitysStatus];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ActivityControllerGetPublicActivitysStatus = {
  DRAFT: 'DRAFT',
  MODERATION: 'MODERATION',
  EDITING: 'EDITING',
  PUBLISHED: 'PUBLISHED',
  CLOSED: 'CLOSED'
} as const;
