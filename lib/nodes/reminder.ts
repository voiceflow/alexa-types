import { DefaultNode, DefaultStep, NodeType } from './types';

export enum ReminderType {
  SCHEDULED_ABSOLUTE = 'SCHEDULED_ABSOLUTE',
  SCHEDULED_RELATIVE = 'SCHEDULED_RELATIVE',
}

export enum ReminderClientType {
  TIME = 'timer',
  SCHEDULED = 'scheduled',
}

type Reminder = {
  name: string;
  type: ReminderType;
  text: string;

  time: {
    h: string;
    m: string;
    s: string;
  };
  date: string;
  timezone: string;
  recurrence?: { byDay?: string; freq: string };
  recurrenceBool: boolean;
};

export type StepData<T> = {
  reminder: T;
};

export type NodeData = {
  fail_id?: string;
  success_id?: string;
} & StepData<Omit<Reminder, 'recurrenceBool' | 'name'>>;

export type Step = DefaultStep<NodeType.REMINDER, StepData<Reminder>>;
export type Node = DefaultNode<NodeType.REMINDER, NodeData>;