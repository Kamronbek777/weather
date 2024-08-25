document.getElementById('currency-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const fromCurrency = document.getElementById('from').value.trim();
    const toCurrency = document.getElementById('to').value.trim();
    const amount = document.getElementById('amount').value.trim();

    if (!fromCurrency || !toCurrency || !amount) {
        document.getElementById('result').innerText = 'Please fill in all fields.';
        return;
    }

    const url = `https://currency-converter-pro1.p.rapidapi.com/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '76c32ed611msh9f6ccd8000fa29ep1cc9eajsn5022ec4e5435',
            'x-rapidapi-host': 'currency-converter-pro1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json(); // Parse the JSON response
        document.getElementById('result').innerText = `Converted Amount: ${result.result} ${toCurrency}`;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('result').innerText = 'An error occurred. Please try again later.';
    }
});
