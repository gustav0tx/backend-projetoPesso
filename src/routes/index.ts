import express from 'express'
import db from '../database'
import stringGerator from '../utils/stringGerator'

const routes = express.Router()

interface Ilink {
    originalUrl: string;
    shortenedUrl: string;
}

routes.post('/', (req, res) => {

    const originalUrl = req.body.originalUrl

    const shortenedUrl = stringGerator()

    db.run('INSERT INTO link(originalUrl, shortenedUrl) VALUES (?, ?);', [originalUrl, shortenedUrl], (err: Error) => {
        if (err) res.status(409).json(err.message)
        else res.status(201).json(shortenedUrl)
    })

})

routes.get('/:shotenedUrl', async (req, res) => {

    const shortenedUrl = req.params.shotenedUrl

    const url: Ilink = await new Promise((resolve, reject) => {

        db.get('SELECT originalUrl FROM link WHERE shortenedUrl = ?;', [shortenedUrl], (err: Error, row: Ilink) => {

            if (err) return reject(err.message)
            if (row) resolve(row)

        })

    })

    res.redirect(`${url.originalUrl}`)
    
})

export default routes