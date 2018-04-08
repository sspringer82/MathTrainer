import { GET_TASK, getTaskSuccess } from './trainer.action';

const getTaskEpic = action$ =>
  action$.ofType(GET_TASK).pipe(
    mergeMap(action => {
      const operator1 = Math.floor(Math.random() * 10);
      const operator2 = Math.floor(Math.random() * 10);

      return Observable.of({
        operation: `${operator1} + ${operator2}`,
        result: operator1 + operator2,
      }).pipe(map(operation => getTaskSuccess));
    }),
  );
