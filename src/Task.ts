export enum Operator {
  ADD,
  SUB,
  DIV,
  MUL,
}

export interface Task {
  operands: number[];
  operator: Operator;
  solution: number;
}

export function createAddition(): Task {
  const op1 = createOperand(1);
  const op2 = createOperand(1);

  return {
    operands: [op1, op2],
    operator: Operator.ADD,
    solution: op1 + op2,
  };
}

function createOperand(digits: number) {
  return Math.floor(Math.random() * 10 ** digits);
}
