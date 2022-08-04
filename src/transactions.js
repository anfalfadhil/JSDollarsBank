function currentUser(req, res) {
    const token = req.body.accessToken
    const user = JSON.parse(token);
    res.send(user);
}

function createTransaction(req, res){
    const trans = {
        "user": currentUser(),
        "amount": req.body.amount,
        "trans_type": "deposit"

    }




    client.db("mongodb22").collection("transactions").insertOne(trans)
    res.send("your transaction is successfull!! ")
}

module.exports= {
    currentUser,
    createTransaction
}