import { tasksRepo } from 'helpers';

export default handler;

function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return getTasks();
        case 'POST':
            return createTask();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    function getTasks() {
        const tasks = tasksRepo.getAll();
        return res.status(200).json(tasks);
    }
    
    function createTask() {
        try {
            tasksRepo.create(req.body);
            return res.status(200).json({});
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }
}
