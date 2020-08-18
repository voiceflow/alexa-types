import { Version } from '@voiceflow/api-sdk';

import { Intent } from './intent';
import { AlexaPublishing, defaultAlexaPublishing } from './publishing';
import { AlexaSettings, defaultAlexaSettings } from './settings';
import { Slot } from './slot';

export * from './slot';
export * from './intent';
export * from './publishing';
export * from './settings';

export enum AlexaStage {
  DEV = 'DEV',
  LIVE = 'LIVE',
  REVIEW = 'REVIEW',
}

export type AlexaPlatformData = {
  slots: Slot[];
  intents: Intent[];

  settings: AlexaSettings;
  publishing: AlexaPublishing;

  status: {
    stage: AlexaStage;
  };
};

export type AlexaVersion = Version<AlexaPlatformData>;

export const defaultAlexaVersionData = ({
  slots = [],
  intents = [],
  settings,
  publishing,
  status: { stage = AlexaStage.DEV } = {} as any,
}: Partial<AlexaPlatformData>): AlexaPlatformData => ({
  slots,
  intents,
  settings: defaultAlexaSettings(settings),
  publishing: defaultAlexaPublishing(publishing),
  status: {
    stage,
  },
});
