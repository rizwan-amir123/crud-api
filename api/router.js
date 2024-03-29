const express = require('express');
const router = express.Router();
//const router = require("express").Router();
const { getTasks, createTask, updateTask, deleteTask,
getSingleTask, deleteAllTasks, findDoneTasks,
findPendingTasks, findLateTasks, findProcessingTasks,
findNotAssignedTasks, patchTask, findDevopsTasks, findBackendTasks, findFrontendTasks,
getAssignees, getAssigneeTasks} = require("../controllers/task");

router.patch("/task/:taskID", patchTask);
router.delete("/task", deleteAllTasks);
router.delete("/task/:taskID", deleteTask);
router.put("/task/:taskID", updateTask);
router.post("/task", createTask);

router.get("/assignees", getAssignees);
router.get("/assignee/:assignee/tasks", getAssigneeTasks);
router.get("/task/:taskID", getSingleTask);
router.get("/task", getTasks);
router.get("/task/status/done", findDoneTasks);
router.get("/task/status/pending", findPendingTasks);
router.get("/task/status/late", findLateTasks);
router.get("/task/status/processing", findProcessingTasks);
router.get("/task/status/unassigned", findNotAssignedTasks);

router.get("/task/tag/frontend", findFrontendTasks);
router.get("/task/tag/backend", findBackendTasks);
router.get("/task/tag/devops", findDevopsTasks);

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

module.exports = router;
