const { ObjectId } = require('mongodb');
const User = require("../models/user");

exports.successtoRedirect = (req, res) => {

    let id = req.user.id
    res.redirect(`http://localhost:3000/user/Dashboard?id=${id}`);

}

exports.fetchToken = async (req, res) => {
    if (req.body.uid.length > 0) {
        const objectId = new ObjectId(req.body.uid);
        const user = await User.findOne({ _id:objectId});
        const { name, accessToken } = user
        if(accessToken.length>0){
            res.json({  name, accessToken })
        }
    }
}

exports.login = (res) => {
    res.redirect(`http://localhost:3000/`);
}


// the last changes i made for logout
exports.logoutFunction = (req, res) => {
    req.logoutFunction(function (err) {
        if (err) { return next(err); }
        res.redirect(`http://localhost:3000/`);
    });
}

exports.DashBoardData= async (req, res) => {
    const _id = new ObjectId(req.body.id);
    const user = await User.findOne(
        {
            _id
        }
    )
    console.log("User : ",user," On ID : ",_id)
    if(user){
        res.send({Introduction:user.Introduction,AssignedMe:user.AssignedMe,Projects:user.Projects,ActivityStream:user.ActivityStream})
    }

}

