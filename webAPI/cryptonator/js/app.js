(function() {
    const btcExchange = document.getElementById('btcExchange');
    
    const getPrice = async () => {
        fetch('https://api.cryptonator.com/api/full/btc-usd')
            .then(res => {
                return res.json();
            })
            .then(data => {
                let output = '';
                let datas = data.ticker.markets;
                datas.map(result => {
                        output += `
                            <table>
                                <thead>
                                    <tr>
                                        <th scope="col" colspan="2">${result.market.toUpperCase()}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="datas">
                                        <td>Price</td>
                                        <td>Volume</td>
                                    </tr>
                                    <tr>
                                        <td>$${result.price.slice(0, 8)}</td>
                                        <td>${result.volume.toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </table>
                    `;  
                      
                    btcExchange.innerHTML = output;
                })
            })
            .catch(e => {
                console.log('Não foi possível se comunicar com o servidor: ', e)
            })
    }
    getPrice();
})();