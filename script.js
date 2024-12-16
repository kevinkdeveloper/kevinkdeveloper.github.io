const increaseButton = document.getElementById('increaseButton');
const decreaseButton = document.getElementById('decreaseButton');
const counterDisplay = document.getElementById('counter');
const tickerSymbol = document.getElementById('tickerSymbol')
const stockPrice = document.getElementById('stockPrice')

let counter = 0;

increaseButton.addEventListener('click', function() {
    counter++;
    counterDisplay.textContent = counter;
});

decreaseButton.addEventListener('click', function() {
    counter--;
    counterDisplay.textContent = counter;
});

async function fetchStockPrice() {
    const symbol = document.getElementById('symbol').value; // Get the stock symbol from input
    const apiKey = 'ctc0mrhr01qvslqvjhn0ctc0mrhr01qvslqvjhng'; // Replace with your Finnhub API key
    
    // Fetch stock price from Finnhub API
    const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.c) {
            // Display the current price
            document.getElementById('stockPrice').textContent = `Current price of ${symbol}: $${data.c}`;
        } else {
            document.getElementById('stockPrice').textContent = 'Error fetching stock data. Please check the symbol.';
        }
    } catch (error) {
        document.getElementById('stockPrice').textContent = 'Failed to fetch stock data. Please try again later.';
    }
}