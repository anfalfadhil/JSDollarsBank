import register from "./Register.js"

console.log("Hello Dollars")


const {MongoClient} = import("mongodb")

async function main () {
    // const uri="mongodb+srv://mongodb22:mongodb22@cluster0.pc6ddwv.mongodb.net/?retryWrites=true&w=majority"
    // const client = new MongoClient(uri);  
    // try {
    //     await client.connect();
    //     // createDbs(client);
    //     // await listDatabases(client);
    //     await register(client)
    // } catch (e) {
    //     console.log(e)
    // } finally {
    //     await client.close();
    // }
    


}

main().catch(console.error);


async function listDatabases(client) {

    const  databasesList = await client.db().admin().listDatabases();
    console.log("databases")
    
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`)
    })

}

function createDbs (client) {
    client.db().createCollection("customers", function(err, result) {
    if (err) throw err;        
    console.log("Collection is created!");
    });
}

