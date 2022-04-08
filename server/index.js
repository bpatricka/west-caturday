const express = require('express');
const cors = require('cors');
const port = 8000;
const {v4: uuidv4} = require('uuid').v4;
const {MongoClient} = require('mongodb');
const mongoDB = process.env.MONGODB || 'mongodb+srv://sadmin:aPKcFYq6EVqr33z@cluster0.jlhqz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const http = require('http');
require('dotenv').config({path:'../.env'});

///////    SERVER INIT    /////////
startServer = () => {
    const app = express();
    const server = http.createServer(app);
    // const io = require('socketio')(server, {
    //     cors: {
    //         origin: "http://localhost:3000"
    //     }
    // });

    const bodyParser = require('body-parser');
    const {res, req} = require('express');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(express.json());
    app.use(cors());

    server.listen(port, () => {
        console.log(`Server listening on PORT ${port}`);
    });

    app.get('/colleges', async (req, res) => {
        const client = new MongoClient(mongoDB);

        try{
            await client.connect();
            const db = client.db('userdb');

            const colleges = db.collection('colleges');
            const mycolleges = await colleges.find({});
            
            const mca = await mycolleges.toArray();
            res.send(mca);
        } catch(e) {
            console.log(e.stack);
        }
        finally{
            await client.close();
        }
    });

    app.get('/jobs', async (req, res) => {
        const client = new MongoClient(mongoDB);

        try{
            await client.connect();
            const db = client.db('userdb');

            const jobs = db.collection('jobs');
            const myjobs = await jobs.find({});

            const mja = await myjobs.toArray();
            res.send(mja);
        } catch(e) {
            console.log(e.stack);
        }
        finally{
            await client.close();
        }
    });

    app.get('/awards', async (req, res) => {
        const client = new MongoClient(mongoDB);

        try{
            await client.connect();
            const db = client.db('userdb');

            const awards = db.collection('awards');
            const myawards = await awards.find({});

            const mawa = await myawards.toArray();
            res.send(mawa);
        } catch(e) {
            console.log(e.stack);
        }
        finally{
            await client.close();
        }
    });

    app.get('/activities', async (req, res) => {
        const client = new MongoClient(mongoDB);

        try{
            await client.connect();
            const db = client.db('userdb');

            const activities = db.collection('activities');
            const myactivities = await activities.find({});

            const maa = await myactivities.toArray();
            res.send(maa);
        } catch(e) {
            console.log(e.stack);
        }
        finally{
            await client.close();
        }
    });

    app.get('/projects', async (req, res) => {
        const client = new MongoClient(mongoDB);

        try{
            await client.connect();
            const db = client.db('userdb');

            const projects = db.collection('projects');
            const myprojects = await projects.find({});

            const mpa = await myprojects.toArray();
            res.send(mpa);
        } catch(e) {
            console.log(e.stack);
        }
        finally{
            await client.close();
        }
    });
}
startServer();
