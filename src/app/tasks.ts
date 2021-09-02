export interface Task {
  name: string;
  list: string;
  priority: string;
  dateTime: string;
  status: boolean;
}

export const TaskList: Task[] = [
  {
    name: 'Walking with dog',
    list: 'Personal',
    priority: 'High',
    dateTime: '2021-08-12T16:04',
    status: false,
  },
  {
    name: 'TODO web App Design',
    list: 'Work',
    priority: 'High',
    dateTime: '2021-08-31T16:49',
    status: false,
  },
  {
    name: 'Work on Proposal Writing',
    list: 'College work',
    priority: 'Medium',
    dateTime: '2021-08-31T16:49',
    status: false,
  },
  {
    name: 'Compiler assignment',
    list: 'College work',
    priority: 'Medium',
    dateTime: '2021-08-31T16:49',
    status: false,
  },
  {
    name: 'Prepare PPT for e-commerce app',
    list: 'College work',
    priority: 'Low',
    dateTime: '2021-08-31T16:49',
    status: false,
  },
  {
    name: 'Prepare PPT for e-commerce app',
    list: 'College work',
    priority: 'Low',
    dateTime: '2021-08-31T16:49',
    status: false,
  },
  {
    name: 'Wireframming e-commerce app for sixth semester.',
    list: 'Work',
    priority: 'Low',
    dateTime: '2021-08-31T16:49',
    status: false,
  },
];
