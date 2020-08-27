import { DefaultNode, DefaultStep, NodeType } from './types';

/**
 * Related Amazon documentation for Cards
 *
 * https://developer.amazon.com/en-US/docs/alexa/custom-skills/include-a-card-in-your-skills-response.html
 * https://developer.amazon.com/en-US/docs/alexa/custom-skills/request-customer-contact-information-for-use-in-your-skill.html#permissions-card-for-requesting-customer-consent
 */

export enum CardType {
  SIMPLE = 'Simple',
  STANDARD = 'Standard',
  LINK = 'LinkAccount',
  PERMISSIONS = 'AskForPermissionsConsent',
}

export enum AlexaPermissions {
  GRANT_FULL_NAME = 'alexa::profile:name:read',
  GRANT_FIRST_NAME = 'alexa::profile:given_name:read',
  GRANT_EMAIL = 'alexa::profile:email:read',
  GRANT_PHONE_NUMBER = 'alexa::profile:mobile_number:read',
}

type BaseCardData = {
  cardType: CardType;
};

type AccountLinkCardData = BaseCardData;

type AskForPermissionsConsentCardData = BaseCardData & {
  permissions: Array<AlexaPermissions>;
};

type SimpleCardData = BaseCardData & {
  title: string;
  text: string;
};

type StandardCardData = SimpleCardData & {
  largeImageUrl: null | string;
  smallImageUrl: null | string;
};

export type StepData = StandardCardData | SimpleCardData | AccountLinkCardData | AskForPermissionsConsentCardData;

export type NodeData = {
  card: {
    type: CardType;
    title: string;
    text: string;
    image: {
      largeImageUrl: string;
      smallImageUrl: string;
    };
  };
  nextId?: string;
};

export type Step = DefaultStep<NodeType.START, StepData>;
export type Node = DefaultNode<NodeType.START, NodeData>;
