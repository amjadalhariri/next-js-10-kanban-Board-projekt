import { tasksRepo } from 'helpers';

export default handler;

function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return getTaskById();
        case 'PUT':
            return updateTask();
        case 'DELETE':
            return deleteTask();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    function getTaskById() {
        const task = tasksRepo.getById(req.query.id);
        return res.status(200).json(task);
    }

    function updateTask() {
        try {
            tasksRepo.update(req.query.id, req.body);
            return res.status(200).json({});
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }

    function deleteTask() {
        tasksRepo.delete(req.query.id);
        return res.status(200).json({});
    }
}
