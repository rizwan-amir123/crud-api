const Task = require("../model/task");

const createTask = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
    return;
    }
    const task = new Task ({
         id: req.body.id,
         title: req.body.title,
         assignee: req.body.assignee,
         tag: req.body.tag,
         status: req.body.status,
    });
    task
        .save(task)
        .then(data => res.json(data))
        .catch (err => {
            res.status(500).send({
                message:err.message || "some error occured"
            });
        });
};

const getTasks = (req, res) => {
  Task
      .find()
      .then(data => res.json(data))
      .catch (err => {
          res.status(500).send({
              message:err.message || "some error occured"
          });
      });
};

const deleteTask = (req, res) => {
  Task.deleteOne(
    { _id: req.params.taskID }
  )
  .then(() => res.json({ message: "Todo Deleted" }))
  .catch((err) => res.send(err));
}

const getSingleTask = (req, res) => {
  const id = req.params.taskID;
  Task
      .findById(id)
      .then(data => {
        if (!data) {
          res.status(404).send({ message: "Not found Task with id " + id });
        }
        else {
          res.send(data);
        }
      })
      .catch (err => {
          res.status(500).send({
              message:err.message || "some error occured"
          });
      });
};

const deleteAllTasks = (req, res) => {
  Task.deleteMany(
    { }
  )
  .then(data => {
    res.send({ 
    message: `${data.deletedCount} Tutorials were deleted successfully!` 
  });
  })
  .catch(err => {
    res.status(500).send({
      message: 
      err.message || "error occured"
  });
});
};

const findDoneTasks = (req, res) => {
  Task.find({status: "done"})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: 
      err.message || "error occured"
  });
  });
};

const findPendingTasks = (req, res) => {
  Task.find({status: "pending"})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: 
      err.message || "error occured"
  });
  });
};

const findNotAssignedTasks = (req, res) => {
  Task.find({status: "not assigned"})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: 
      err.message || "error occured"
  });
  });
};

const findProcessingTasks = (req, res) => {
  Task.find({status: "processing"})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: 
      err.message || "error occured"
  });
  });
};

const findLateTasks = (req, res) => {
  Task.find({status: "late"})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: 
      err.message || "error occured"
  });
  });
};

const patchTask = (req, res) => {
  Task.findByIdAndUpdate(req.params.taskID, req.body,
    {new: true})
  .then(data => {
    if (!data) {
      res.status(404).send();
    }
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: 
      err.message || "error occured"
    });
  });
};

const updateTask = (req, res) => {
  Task
      .findOneAndUpdate(
        {_id: req.params.taskID},
        {
          $set: {
            id: req.body.id,
            title: req.body.title,
            assignee: req.body.assignee,
            tag: req.body.tag,
            status: req.body.status,
          },
        },
        {new: true},
      )
      .then(data => res.json(data))
      .catch (err => {
          res.status(500).send({
              message:err.message || "some error occured"
          });
      });
}; 

const findFrontendTasks = (req, res) => {
  Task.find({tag: "frontend"})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: 
      err.message || "error occured"
  });
  });
};

const findBackendTasks = (req, res) => {
  Task.find({tag: "backend"})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: 
      err.message || "error occured"
  });
  });
};

const findDevopsTasks = (req, res) => {
  Task.find({tag: "devops"})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: 
      err.message || "error occured"
  });
  });
};

module.exports = {
  findDevopsTasks,
  findFrontendTasks,
  findBackendTasks,
  findPendingTasks,
  findNotAssignedTasks,
  findLateTasks,
  findProcessingTasks,
  getTasks,
  patchTask,
  deleteAllTasks,
  createTask,
  findDoneTasks,
  getTasks,
  updateTask,
  getSingleTask,
  deleteTask,
};
