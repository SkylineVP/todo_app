import {User} from '../db/models'
export async function createUser(req,res,next) {
    try {
    const createdUser=await User.create(req.userValue,{

    });
    if (createdUser){
        const data=createdUser.get();
        delete data.password;
       return  res.status(201).send(data)
    }
    }
    catch (e) {
        next(e)
    }

}
export async function updateUser(req,res,next) {
    try {
        const [updatedRowsCount,updatedUsers]= await User.update(req.userValue,{
            where:{
            id:req.params.userId
            },
            returning:true
        });
        if(updatedRowsCount) {
            const data=updatedUsers[0].get();
            delete data.password;
           return  res.status(201).send(data)
        }
    }
    catch (e) {
        next(e)
    }

}
export async function deleteUser(req,res,next) {
    try {
        const deletedRows= await User.destroy({
            where: {
                id:req.params.userId
            }

        });
        if (deletedRows) {
            return res.status(200).send(`${deletedRows}`);
        }
    } catch (e) {
        next(e)
    }

}

export async function getUserById( req, res, next ) {
    try {
        const user = await User.findByPk(req.params.userId);
        if (user) {
            const data = user.get();
            return res.status(200).send(data);
        } else res.status(404);
    } catch (e) {
        next(e)
    }

}