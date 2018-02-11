module.exports = function(app) {
  const lists = [
    {
        id: 1,
        items: [],
        name: "Personal"
    },
    {
        id: 2,
        items: [],
        name: "Kids"
    },
    {
        id: 3,
        items: [],
        name: "Work"
    },
  ];
  const tasks = [
    {
        id: 1,
        name: "Make Dentist appt",
        complete: false,
        category: "Personal"
    },
    {
        id: 2,
        name: "Call Mom",
        complete: false,
        category: "Personal"
    },
    {
        id: 3,
        name: "E-mail Jim",
        complete: true,
        category: "Work"
    },
    {
        id: 4,
        name: "Help Jane with Science Project",
        complete: true,
        category: "Kids"
    },
    {
        id: 5,
        name: "Learn Angular",
        complete: false,
        category: "Work"
    },
    {
        id: 6,
        name: "Buy gift for upcoming birthday",
        complete: true,
        category: "Personal"
    },
    {
        id: 7,
        name: "Book trip to New York",
        complete: false,
        category: "Work"
    },
    {
        id: 8,
        name: "Wash Cars",
        complete: false,
        category: "Kids"
    }
  ];

  let listIndex = 0;
  let taskIndex = 0;

  // Get all lists
  app.get('/api/lists', (req, res) => {
    console.log("getting lists");
    res.json(lists);
  });

  // Get all tasks
  app.get('/api/tasks', (req, res) => {
    res.json(tasks);
  });

  // Create new list
  app.post('/api/lists', (req, res) => {
    const item = {
      id: listIndex++,
      name: req.body.name,
      items: []
    };
    lists.push(item);
    res.json(item);
  });

  // Create new task
  app.post('/api/tasks', (req, res) => {
    const item = {
      id: taskIndex++,
      name: req.body.name,
      complete: false,
      category: req.body.category
    };

    tasks.push(item);
    res.json(item);
  });

  // Toggle task status
  app.post('/api/toggle', (req, res) => {
    const { taskId } = req.body;

    const toggledTask = tasks.filter(task => task.id === taskId)[0];
    toggledTask.complete = !toggledTask.complete;
  });

  // Get specific list
  app.get('/api/lists/:list_id', (req, res) => {
    const listId = parseInt(req.params.list_id);
    const list = lists.filter(list => listId === list.id)[0];
    res.json(list);
  })

}
