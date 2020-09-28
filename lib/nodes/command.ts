import { DefaultCommand, DefaultStep, NodeType } from './types';

export type StepData = {
  intent: string | null;
  diagramID: string | null;
  name: string;
};

export type Step = DefaultStep<NodeType.COMMAND, StepData>;

export type CommandData = {
  intent: string;
  diagramID: string;
};

export type Command = DefaultCommand<NodeType.COMMAND, CommandData>;
