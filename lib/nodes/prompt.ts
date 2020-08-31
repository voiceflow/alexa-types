import { NoMatches, Prompt } from '@/types';

import { DefaultNode, DefaultStep, NodeType } from './types';

export type StepData = {
  reprompt: Prompt | null;
  noMatches: NoMatches;
};

export type NodeData = {
  reprompt?: string;
  noMatches?: string[];
  randomize?: boolean;
  interactions: []; // dummy value to allow the InteractionHandler to handle Prompts like an Interaction
};

export type Step = DefaultStep<NodeType.PROMPT, StepData>;

export type Node = DefaultNode<NodeType.PROMPT, NodeData>;
