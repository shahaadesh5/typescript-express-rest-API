import { Request, Response  } from 'express'
// import { User } from '../models/users.models'

const getAllUsers = (req: Request, res: Response):Response => {

    console.log(req.params)
    return res.status(200).json({
        userName: "shahaadesh5",
        email : "test@123"
    })
}

export default getAllUsers;