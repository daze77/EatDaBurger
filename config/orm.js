const db = require('./connection')('hockey_db', 'Summer77')







function selectAll(){
    const sql = `SELECT * FROM burgers`
    return db.query(sql)
}


async function insertOne(name, devoured){
    const sql = `INSERT INTO burgers (burger_name, devoured) VALUES (?,?)`

    return db.query(sql, [name, devoured])
}

async function updateOne(name, devoured){
    const sql = `UPDATE burgers SET devoured = ? WHERE burger_name = "${name}"`

    return db.query(sql, [devoured])


}







module.exports = {selectAll, insertOne, updateOne}