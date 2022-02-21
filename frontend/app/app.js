var register_section =`<form action="#" class="registration" onsubmit="register()">
                    <h2 class="regis">Registration Form</h2>
                    <input type="text" placeholder="Name" id="name">
                    <input type="email" placeholder="email" id="email">
                    <input type="text" placeholder="Username" id="username">
                    <input type="password" placeholder="Password" id="pw">
                    <input type="submit" value="REGISTER">
                    <button onclick="showLogin()" class="login">LOGIN</button>
                    </form>`
var login_section = `<form action="#" class="registration" onsubmit="login()">
                    <h2 class="regis">Login Form</h2>
                    <input type="text" placeholder="Username" id="username">
                    <input type="password" placeholder="Password" id="pw">
                    <input type="submit" value="LOGIN">
                    <button class="login" onclick="showRegister(); loadDashboard();">REGISTER</button>
                    </form>`

function showLogin(){
    document.getElementById("reg_container").innerHTML = login_section;
}
function showRegister(){
    document.getElementById("reg_container").innerHTML = register_section;
}

function showSettings(){
    var userData = {
        name : "Abhishek Verma",
        username : "abhishek",
        email : "abhishek@droidmaze.com"
    };
    var name = userData['name'];
    var username = userData['username']
    var email = userData['email']
    var settings_section = `<form action="#" class="update">
                            <input type="text" id="upd-name" value="${name}" placeholder="Name">
                            <input type="email" id="upd-email" value="${email}" placeholder="email">
                            <input type="text" id="upd-username" value="${username}" placeholder="Username">
                            <input type="password" id="old-pw" placeholder="Old Password">
                            <input type="text" id="new-pw" placeholder="New Password">
                            <input type="text" id="cfm-pw" placeholder="Confirm Password">
                            <br>
                            <input type="submit" value="UPDATE">
                        </form>
                        <div class="del-reset">
                            <button class="reset">RESET</button>
                            <button class="del">DELETE</button>
                        </div>`
    document.getElementById("update-menu").innerHTML = settings_section;
}
function loadDashboard(){
    var response = {status_code : 200}
    if(response['status_code'] == 200)
    {

        var dashboard_html = `<div class="container">
                                <nav class="navigation">
                                    <div class="burger-menu">
                                        <div class="burgerLine"></div>
                                    </div>
                                    <div class="nav-btn-box">
                                        <a href="#" class="square">
                                            <div class="sqr"></div>
                                            <div class="sqr"></div>
                                            <div class="sqr"></div>
                                            <div class="sqr"></div>
                                        </a>
                                        <a href="#" class="wallet"></a>
                                        <a href="#" class="graph" onclick="showNews()">
                                            <div class="line1"></div>
                                            <div class="line2"></div>
                                            <div class="line3"></div>
                                        </a>
                                        <a href="#" class="cube">
                                            <svg fill="white" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;">
                                                <path d="M256,0L31.528,112.236v287.528L256,512l224.472-112.236V112.236L256,0z M234.277,452.564L74.974,372.913V160.81
                                                        l159.303,79.651V452.564z M101.826,125.662L256,48.576l154.174,77.087L256,202.749L101.826,125.662z M437.026,372.913
                                                        l-159.303,79.651V240.461l159.303-79.651V372.913z"/>
                                            </svg>
                                        </a>
                                        <div class="account" onclick="showSettings()">
                                            <div class="circle"></div>
                                            <div class="rect"></div>
                                        </div>
                                    </div>
                                    <a href="#" class="log-out"></a>
                                </nav>
                                <div class="dash-board-container">
                                    <div class="db-box">
                                        <h1 class="overview">Overview</h1>
                                        <div class="acc-search-box">
                                            <div class="search">
                                                <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 488.4 488.4" style="enable-background:new 0 0 488.4 488.4;">
                                                    <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6
                                                            s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2
                                                            S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7
                                                            S381.9,104.65,381.9,203.25z"/>
                                                </svg>
                                            </div>
                                            <div class="bell">
                                                <svg viewBox="0 0 16 16" class="bi bi-bell">
                                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                                                </svg>
                                            </div>
                                            <div class="acc">
                                                <div class="avatar">
                                                    <div class="account">
                                                        <div class="circle"></div>
                                                        <div class="rect"></div>
                                                    </div>
                                                </div>
                                                <h3 class="name">Chote</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="portfolio-asset">
                                        <div class="portfolio">
                                            <h2 class="pf-heading">Portfolio</h2>
                                            <div class="graph"></div>
                                        </div>
                                        <div class="asset">
                                            <h2 class="asset-heading">Assets</h2>
                                            <div class="asset-box">
                                                <a href="#" class="asset1 assetSize"></a>
                                                <a href="#" class="asset2 assetSize"></a>
                                                <a href="#" class="asset3 assetSize"></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="update-menu" id="update-menu">  
                                    </div>
                                    <div class="news-container">
                                    <h1 class="news-head">News</h1>
                                    <hr>
                                    <div class="news-section">
                                        <div class="featured-img"></div>
                                    </div>
        </div>
                                </div>
                            </div>`
            document.getElementById("main_container").innerHTML = dashboard_html;
            }
    else{
        document.getElementById("warning").innerHTML = `<p class="loginFailWarn">Invalid username or password.</p>`;
    }
}
function showContainer(){
    var login_section = `<div class="login-box">
                        <div class="header">
                            <h4 class="coinsutra">CoinSutra</h4>
                        </div>
                        <div class="titleBox">
                            <h1 class="title">Welcome to<br> CryptoSutra</h1>
                            <p class="LTP">Learn | Trade | Practice</p>
                        </div><div id="reg_container">
                        <form action="#" class="registration">
                            <h2 id="regis" class="regis">Registration Form</h2>
                            <div class="fields">
                                <input type="text" placeholder="Name" id="name">
                                <input type="email" placeholder="email" id="email">
                                <input type="text" placeholder="Username" id="username">
                                <input type="password" placeholder="Password" id="pw">
                            </div>
                            <div class="user-login">
                                <input type="text" placeholder="Username" class="username">
                                <input type="password" placeholder="Password" class="loginpw">
                            </div>
                            <input type="submit" value="REGISTER">
                            <div class="hr-line"></div>
                            <button onclick="showLogin()" href="#" class="login">Login</button>
                        </form>
                        </div>
                    </div>`
                    document.getElementById("main_container").innerHTML = login_section;
}

function showNews() {
    var newsData = [{"link":"https://www.ndtv.com/business/pig-butchering-crypto-scam-know-about-this-scam-where-fraudsters-use-romance-as-a-hook-to-lure-people-into-bogus-investments-2778656","source":{"href":"https://www.ndtv.com","title":"NDTV Profit"},"title":"Pig Butchering Crypto Scam: A Deep-Dive Into This Scam Where Fraudsters Use Romance As A Hook To Lure People Into Bogus Investments - NDTV Profit"},{"link":"https://cryptopotato.com/market-watch-bitcoin-plummets-to-a-2-week-low-at-38k/","source":{"href":"https://cryptopotato.com","title":"CryptoPotato"},"title":"Market Watch: Bitcoin Plummets to a 2-Week Low at $38K - CryptoPotato"},{"link":"https://zycrypto.com/finders-fintech-panel-forecasts-ada-will-top-2-79-this-year-as-major-update-to-cardano-plutus-scripts-goes-live/","source":{"href":"https://zycrypto.com","title":"ZyCrypto"},"title":"Finder\u2019s Fintech Panel Forecasts $ADA Will Top $2.79 This Year As Major Update To Cardano Plutus Script Goes Live - ZyCrypto"},{"link":"https://cointelegraph.com/news/bitcoin-price-dips-below-38k-as-crypto-sentiment-nears-extreme-fear","source":{"href":"https://cointelegraph.com","title":"Cointelegraph"},"title":"Bitcoin price dips below $38K as crypto sentiment nears 'extreme fear' - Cointelegraph"},{"link":"https://u.today/ethereum-co-founder-welcomes-another-bear-market","source":{"href":"https://u.today","title":"U.Today"},"title":"Ethereum Co-Founder Welcomes Another Bear Market - U.Today"},{"link":"https://www.financialexpress.com/market/bitcoin-whales-crypto-criminals-are-now-among-the-biggest-holders-of-cryptocurrencies-says-report/2439430/","source":{"href":"https://www.financialexpress.com","title":"The Financial Express"},"title":"Bitcoin whales: Crypto criminals are now among the biggest holders of cryptocurrencies, says report - The Financial Express"},{"link":"https://news.bitcoin.com/veteran-trader-peter-brandt-warns-bitcoins-price-corrections-lengthy/","source":{"href":"https://news.bitcoin.com","title":"Bitcoin News"},"title":"Veteran Trader Peter Brandt Warns Bitcoin's Price Corrections Can Be Lengthy \u2013 Markets and Prices Bitcoin News - Bitcoin News"},{"link":"https://cointelegraph.com/news/web3-might-be-crypto-s-key-to-the-mainstream-market","source":{"href":"https://cointelegraph.com","title":"Cointelegraph"},"title":"Web3 might be crypto\u2019s key to the mainstream market - Cointelegraph"},{"link":"https://news.bitcoin.com/elon-musk-dogecoin-accepted-teslas-new-futuristic-diner-drive-in-theater/","source":{"href":"https://news.bitcoin.com","title":"Bitcoin News"},"title":"Elon Musk Reveals Dogecoin Will Be Accepted at Tesla's New Futuristic Diner, Drive-in Theater \u2013 Bitcoin News - Bitcoin News"},{"link":"https://news.bitcoin.com/uae-prepares-to-launch-nationwide-crypto-licensing-system-in-line-with-global-standards/","source":{"href":"https://news.bitcoin.com","title":"Bitcoin News"},"title":"UAE Prepares to Launch Nationwide Crypto Licensing System in Line With Global Standards \u2013 Regulation Bitcoin News - Bitcoin News"}]
    var news = JSON.parse(JSON.stringify(newsData))
    var i = 0;
    var newsEntries = "";
    console.log(news.length);
    while(i < news.length)
    {
    newsEntries += `<p class="news_entry"><a href="${news[i].link}" class="news_entries">${news[i].title}</a> - ${news[i].source.title}</p>`;
        i += 1;
    }
    document.getElementById("update-menu").innerHTML = newsEntries
}