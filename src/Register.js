

 function register (client) {

    let name = prompt("Full Name: ")
    let phone = prompt("Phone Number: ")
    let password = prompt("Password: ")
    let balance = prompt("Initial Deposit: ")

    let newCustomer = {
        name: {name},
        phone: {phone},
        password:{password},
        balance: {balance},
        transactions: []
    }

    const result =  client.db("mongodb22").collection("customers").insertOne(newCustomer)
    console.log("Welcome :) ")

}

export default register;