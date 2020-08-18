import { Prompt, Voice } from '../types';

export enum Repeat {
  OFF = 'OFF',
  DIALOG = 'DIALOG',
  ALL = 'ALL',
}

export type AccountLinking = {
  scopes: string[] | string[][];
  domains: string[] | string[][];
  clientSecret?: string;
  accessTokenUrl?: string;
  authorizationUrl?: string;
  defaultTokenExpirationInSeconds?: string;
};

export type AlexaSettings = {
  events: null | string;
  accountLinking: null | AccountLinking;
  customInterface: boolean;
  resume: null | {
    prompt: null | Prompt;
    followPrompt: null | Prompt;
  };
  repeat: Repeat;
  errorPrompt: null | Prompt;
};

export const defaultAccountLinking = (accountLinking?: null | Partial<AccountLinking>): null | AccountLinking => {
  if (!accountLinking) return null;
  const { scopes = [], domains = [], clientSecret, accessTokenUrl, authorizationUrl, defaultTokenExpirationInSeconds } = accountLinking;
  return { scopes, domains, clientSecret, accessTokenUrl, authorizationUrl, defaultTokenExpirationInSeconds };
};

export const defaultPrompt = (prompt?: Prompt | null): null | Prompt => {
  if (!prompt || !prompt.content) return null;
  return {
    content: prompt.content,
    voice: prompt.voice || Voice.ALEXA,
  };
};

export const defaultAlexaSettings = ({
  events = null,
  customInterface = false,
  resume,
  repeat = Repeat.ALL,
  accountLinking,
  errorPrompt,
}: Partial<AlexaSettings> = {}): AlexaSettings => ({
  events,
  customInterface,
  resume: resume
    ? {
        prompt: defaultPrompt(resume.prompt),
        followPrompt: defaultPrompt(resume.followPrompt),
      }
    : null,
  repeat,
  accountLinking: defaultAccountLinking(accountLinking),
  errorPrompt: defaultPrompt(errorPrompt),
});
