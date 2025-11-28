import sqlite3 from "sqlite3"
import path from 'path'

const mySqlite3 = sqlite3.verbose()

const db = new mySqlite3.Database(path.join(__dirname, '/links.db'))

db.run('CREATE TABLE IF NOT EXISTS link(linkOriginal VARCHAR(400), linkEncurtado VARCHAR(400))')

export default db