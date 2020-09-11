import { DefaultNode, DefaultStep, NodeType } from './types';

export type StepData = {
  productID: string;
};

export type NodeData = {
  product_id?: string;
  cancel_product_id?: string;
  fail_id?: string;
  success_id?: string;
};

export type Step = DefaultStep<NodeType.PAYMENT, StepData>;
export type Node = DefaultNode<NodeType.PAYMENT, NodeData>;
