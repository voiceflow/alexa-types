import { DefaultNode, DefaultStep, NodeType } from './types';

export enum ReminderType {
  SCHEDULED_ABSOLUTE = 'SCHEDULED_ABSOLUTE',
  SCHEDULED_RELATIVE = 'SCHEDULED_RELATIVE',
  TIME = 'timer',
  SCHEDULED = 'scheduled',
}

export type StepData = {
  reminder: {
    name: string;
    reminderType: ReminderType;
    text: string;
    hours: string;
    minutes: string;
    seconds: string;
    date: string;
    timezone: string;
    recurrence?: { byDay: string; freq: string };
    recurrenceBool: boolean;
  };
};

export type NodeData = {
  fail_id?: string;
  success_id?: string;
} & StepData;

export type Step = DefaultStep<NodeType.REMINDER, StepData>;
export type Node = DefaultNode<NodeType.REMINDER, NodeData>;
