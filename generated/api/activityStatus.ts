/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * Big Quest
 * ## API Big Quest
 * OpenAPI spec version: 1.0
 */

/**
 * Статус
 */
export type ActivityStatus = (typeof ActivityStatus)[keyof typeof ActivityStatus];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ActivityStatus = {
  DRAFT: 'DRAFT',
  MODERATION: 'MODERATION',
  EDITING: 'EDITING',
  PUBLISHED: 'PUBLISHED',
  CLOSED: 'CLOSED'
} as const;
