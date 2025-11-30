import sqlite3 from "sqlite3"
import path from 'path'

const mySqlite3 = sqlite3.verbose()

const db = new mySqlite3.Database(path.join(__dirname, '/links.db'))

db.run('CREATE TABLE IF NOT EXISTS link(originalUrl VARCHAR(400) UNIQUE, shortenedUrl VARCHAR(400))')

export default db