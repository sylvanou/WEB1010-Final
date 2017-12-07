// no API key required for this API
const API_URL = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?'

const quote = document.querySelector('.quote-text')
const author = document.querySelector('.quote-author')
const newButt = document.querySelector('.quote-box')

function getQuote() {
    $.ajax({
        type: "GET",
        url: API_URL,
        dataType: 'json',
        success: function(data){
            console.log(data)
            console.log(data.quoteText)
            console.log(data.quoteAuthor)
            quote.textContent = (data.quoteText)
            author.textContent = (data.quoteAuthor)

        },
        error: function(error){
                console.log(error)
            }
        })
     }

getQuote()

newButt.addEventListener('click', function(e){
    getQuote()
})
