const router = require("express").Router();
const { getTasks, createTask, updateTask, deleteTask,
getSingleTask, deleteAllTasks, findDoneTasks,
findPendingTasks, findLateTasks, findProcessingTasks,
findNotAssignedTasks, patchTask} = require("../controllers/task");

router.get("/task/pending", findPendingTasks);
router.get("/task/late", findLateTasks);
router.get("/task/processing", findProcessingTasks);
router.get("/task/notassigned", findNotAssignedTasks);

router.patch("/task/:taskID", patchTask);
router.get("/task/done", findDoneTasks);
router.delete("/task", deleteAllTasks);
router.get("/task/:taskID", getSingleTask);
router.delete("/task/:taskID", deleteTask);
router.put("/task/:taskID", updateTask);
router.post("/task", createTask);
router.get("/task", getTasks);
router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

module.exports = router;
