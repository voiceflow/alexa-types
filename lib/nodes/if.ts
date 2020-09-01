import { DefaultNode, DefaultStep, NodeType } from './types';

export type StepData = {
  expressions: string[];
};

export type NodeData = {
  expressions: string[];
  nextIds: string[];
  elseId?: string;
};

export type Step = DefaultStep<NodeType.IF, StepData>;
export type Node = DefaultNode<NodeType.IF, NodeData>;
