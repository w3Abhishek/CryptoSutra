import requests

api_url = 'https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd'

def getAll():
    response = requests.get(api_url)
    data = response.json()
    cryptoData = {
    'status': 200,
        'price' : 
            {
                'BTC' : data['data'][0]['metrics']['market_data']['price_usd'],
                'ETH' : data['data'][1]['metrics']['market_data']['price_usd'],
                'USDT' : data['data'][2]['metrics']['market_data']['price_usd'],
                'BNB' : data['data'][3]['metrics']['market_data']['price_usd'],
                'USDC' : data['data'][4]['metrics']['market_data']['price_usd'],
                'ADA' : data['data'][5]['metrics']['market_data']['price_usd'],
                'SOL' : data['data'][6]['metrics']['market_data']['price_usd'],
                'LUNA' : data['data'][7]['metrics']['market_data']['price_usd'],
                'DOGE' : data['data'][8]['metrics']['market_data']['price_usd'],
                'DOT' : data['data'][9]['metrics']['market_data']['price_usd'],
                'AVAX' : data['data'][10]['metrics']['market_data']['price_usd'],
                'BUSD' : data['data'][11]['metrics']['market_data']['price_usd'],
                'SHIB' : data['data'][12]['metrics']['market_data']['price_usd'],
                'MATIC' : data['data'][13]['metrics']['market_data']['price_usd'],
                'UST' : data['data'][14]['metrics']['market_data']['price_usd'],
                'ATOM' : data['data'][15]['metrics']['market_data']['price_usd'],
                'WBTC' : data['data'][16]['metrics']['market_data']['price_usd'],
                'DAI' : data['data'][17]['metrics']['market_data']['price_usd'],
                'CRD' : data['data'][18]['metrics']['market_data']['price_usd'],
                'LTC' : data['data'][19]['metrics']['market_data']['price_usd']
            }
        }
    return cryptoData