export interface Task {
  name: string;
  list: string;
  priority: string;
  dateTime: string;
}

export const TaskList: Task[] = [
  {
    name: 'Assignment',
    list: 'College',
    priority: 'Medium',
    dateTime: '2021-08-12T16:04',
  },
  {
    name: 'Reseach',
    list: 'Personal',
    priority: 'Medium',
    dateTime: '2021-08-31T16:49',
  },
];
