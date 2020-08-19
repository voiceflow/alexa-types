import { DefaultNode, DefaultStep, NodeType } from './types';

declare namespace Nodes.Flow {
  export type StepData = { diagramID: string };

  export type NodeData = {
    diagram_id: string;
    variable_map?: {
      inputs?: [string, string][];
      outputs?: [string, string][];
    };
    nextId?: string | null;
  };

  export type Step = DefaultStep<NodeType.FLOW, StepData>;
  export type Node = DefaultNode<NodeType.FLOW, NodeData>;
}
