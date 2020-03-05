export Operator {
  ADD,
  SUB,
  DIV,
  MUL
};

export interface Task {
  operands: number[],
  operator: Operator,
}