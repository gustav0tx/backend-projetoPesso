const stringGerator = () => {

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    const charsArr = chars.split('')

    let urlShortened = ''
    
    for(let i = 0; i < 10; i++) {

        let randomIndex = Math.floor(Math.random() * 100)

        while (randomIndex > 61) {

            randomIndex = Math.floor(Math.random() * 100)

        }

        urlShortened = urlShortened + charsArr[randomIndex]

    }

    return urlShortened

}

export default stringGerator