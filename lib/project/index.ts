import { Project } from '@voiceflow/api-sdk';
import { Locale } from '@voiceflow/general-types';

import { AlexaProjectMemberData } from './member';
import { AlexaProduct } from './product';

export * from './product';
export * from './member';

export type AlexaProjectData = {
  products: Record<string, AlexaProduct>;
};

export type AlexaProject = Project<AlexaProjectData, AlexaProjectMemberData, Locale> & {
  platform: 'alexa';
};

export const defaultAlexaProjectData = ({ products = {} }: Partial<AlexaProjectData> = {}): AlexaProjectData => ({
  products,
});
