import React, { useState, useEffect } from 'react';
import Keyboard from './Keyboard';
import { Task, createAddition } from './Task';

interface Props {}

const Trainer: React.FC<Props> = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTasks(
      Array(10)
        .fill({})
        .map(() => createAddition()),
    );
  }, []);

  return (
    <>
      <Keyboard />
    </>
  );
};

export default Trainer;
