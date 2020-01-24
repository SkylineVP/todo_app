import {User, Task, sequelize} from './db/models';
import {Model, Sequelize, DataType, DataTypes} from "sequelize";
import moment from "moment";
/*class Task extends Model {}
Task.init(
    {
        value: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        },
        deadline:{
            type:DataTypes.DATE,
            allowNull:false,
            validate:{
                isDate:true,
                isAfter: moment().format('YYYY-MM-DD')
            }
        },
        isDone:{
            type:DataTypes.BOOLEAN,
            defaultValue:false,
            allowNull:false
        }

    },
    {
        timestamps: true,
        sequelize
    });
Task.belongsTo(User);
User.hasMany(Task);
Task.sync();*/
//User.findByPk(46).then(data=>console.log(data.get()));
/*User.findAll().then(data=>{
    data.forEach(user=>{
        users.push(user.get());
    });
    console.log(users);
});*/

async function getAllUsersWithTasks() {
    try {
        const users = await User.findAll({
            include: [
                {
                    model: Task,
                    as:"tasks"}
            ],
            where:{

            }
        });
        return users.map(user => user.toJSON());
    } catch (e) {

    }

}
getAllUsersWithTasks().then(console.log);



function createUser({firstName, lastName, login, password, email}) {
    User.create()
}

async function getUser(id) {
    try {
        const user = await User.findByPk(id);
        if (user)
            return user.get();
    } catch (e) {
        console.error(e)
    }
}

async function updateUser(id, data) {
    try {
        const oldUser = await User.findByPk(id);
        const updatedUser = await oldUser.update(data);
        return updatedUser.get();

    } catch (e) {
        console.error(e);
    }
}

/*
getUser(2).then(console.log);

updateUser(2,{
    firstName:"Ronaldo"}).then(console.log);*/
