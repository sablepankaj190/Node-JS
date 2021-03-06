const request = require('supertest')
const app = require('../src/app')
const Task = require('../src/models/task')
const { userOneId, userTwo, taskOne, userOne, setupDatabase } = require('./fixtures/db')

beforeEach(setupDatabase)

test('Should create new task for user', async () => {
    const response = await request(app)
        .post('/tasks')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            description: "Prepare nodejs interview questions"
        })
        .expect(201)

    const task = await Task.findById(response.body._id)
    expect(task).not.toBeNull()
    expect(task.completed).toBeFalsy()
})

test('Should list task for given user', async () => {
    const response = await request(app)
        .get('/tasks')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
    expect(response.body.length).toEqual(2)
})

test('Second user can not delete tasks of first user', async () => {
    const response = await request(app)
        .delete(`/tasks/${taskOne._id}`)
        .set('Authorization', `Bearer ${userTwo.tokens[0].token}`)
        .send()
        .expect(500)
    const task = await Task.findById(taskOne._id)
    expect(task).not.toBeNull()
})

