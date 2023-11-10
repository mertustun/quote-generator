const quote_DOM = document.querySelector('#quote')
const author_DOM = document.querySelector('.author')
const quote_Button = document.querySelector('#quote-btn')

const quoteAPI_URL = "https://api.quotable.io/random"

quote_Button.addEventListener('click', getQuote)

async function getQuote(){
    document.body.classList.remove('fade')
    // fetch(quoteAPI_URL)
    // .then(response => response.json())
    // .then(item => {
    //     // console.log(item.content);
    //     // console.log(item.author);
    //     quote_DOM.textContent = item.content
    //     author_DOM.textContent = item.author
    //     document.body.classList.add('fade')
    // })
    // .catch(err){
    //    console.error(err)
    //  }

    /* fetch-then method used above. */

    try{
        const response = await fetch(quoteAPI_URL)
        const data = await response.json()
        // console.log(data.content);
        // console.log(data.author);
        quote_DOM.textContent = data.content
        author_DOM.textContent = data.author
        document.body.classList.add('fade')
    }
    catch(error){
        console.error(error)
    }

    // more readable method used here which is async func and await method. Each variable awaiting the other before progressing.
}

getQuote();