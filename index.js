const express = require('express')

const app = express()

const request = require('request-promise')
const cheerio = require('cheerio')

app.use(express.json())


app.get('/dolar', async (req, res) => {
    //url do site que vamos pegar os dados
    const URL = 'https://ptax.bcb.gov.br/ptax_internet/consultarUltimaCotacaoDolar.do'
    //pegando a estrutura do site
    const response = await request(URL)
    //fazendo o cheerio carregar o corpo do site
    let $ = cheerio.load(response)
    //pegando os dados do site
    dolar = $('td[align=right]').first().text()
    data = $('td[align=CENTER]').text()

    res.json({
        dolar,
        data
    })
})

app.listen(3000)