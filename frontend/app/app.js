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
                                    </div>
                                    <div class="portfolio-asset">
                                        <h2 class="asset-heading">Portfolio</h2>
                                        <div class="card1 cardsize">
                                            <h1 class="crypto-title">Portfolio value</h1>
                                            <h2 class="value" id="total-bal">Rs 0.0000</h2>
                                            <div class="bal">
                                                <h2>Balance: </h2>
                                                <h2 id="in-bal">20000</h2>
                                            </div>
                                        </div>
                                        <div class="card2 cardsize">
                                            <h1 class="crypto-title">Bitcoin</h1>
                                            <h2 class="value" id="total-bal">Rs 0.0000</h2>
                                        </div>
                                        <div class="card3 cardsize">
                                            <h1 class="crypto-title">Etherrum</h1>
                                            <h2 class="value" id="total-bal">Rs 0.0000</h2>
                                        </div>
                                        <div class="no-invest">
                                            <h1>No Investments Yet...</h1>
                                            <h3>Start investing now to learn and practice crypto</h3>
                                        </div>
                                    </div>

                                    <div class="transaction">
                                        <h2 class="trans">Transactions</h2>
                                        <div class="col-name">
                                            <h2>Coin</h2>
                                            <h2>Volume</h2>
                                            <h2>Price</h2>
                                        </div>
                                        <div class="trans-value">
                                            <h2 id="coin">Bitcoin</h2>
                                            <h2 id="volume">3.0000</h2>
                                            <h2 id="price">20000</h2>
                                        </div>
                                        <div class="no-trans-logo">
                                            <div class="trans-logo">
                                                <svg width="256" height="256" viewBox="0 0 256 256">
                                                    <!-- <desc>Created with Fabric.js 1.7.22</desc> -->
                                                    <defs>
                                                    </defs>
                                                    <g transform="translate(128 35) scale(0.72 0.72)">
                                                        <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)" >
                                                        <path d="M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 s 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(248,195,65); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                                        <path d="M 45 10 c -19.33 0 -35 15.67 -35 35 c 0 19.33 15.67 35 35 35 s 35 -15.67 35 -35 C 80 25.67 64.33 10 45 10 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(206,140,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                                        <polygon points="73.42,18.09 78.94,19.85 74.48,23.55 72.72,29.07 69.02,24.61 63.5,22.84 67.96,19.14 69.72,13.63 " style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,237,154); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                                                        <polygon points="81.31,35.82 83.27,38.73 79.76,38.81 76.85,40.77 76.77,37.26 74.81,34.35 78.32,34.27 81.24,32.31 " style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,237,154); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                                                        <path d="M 58.115 32.89 c 0 -4.284 -3.707 -7.769 -8.264 -7.769 h -3.369 v -3.717 h -6 v 3.717 h -8.597 v 39.758 h 8.597 v 3.717 h 6 v -3.717 h 3.369 c 4.557 0 8.264 -3.485 8.264 -7.77 v -7.341 c 0 -1.796 -0.651 -3.452 -1.744 -4.769 c 1.093 -1.317 1.744 -2.973 1.744 -4.769 V 32.89 z M 52.115 57.11 c 0 0.959 -1.037 1.77 -2.264 1.77 H 37.885 v -10.88 h 11.966 c 1.227 0 2.264 0.811 2.264 1.77 V 57.11 z M 52.115 40.231 c 0 0.959 -1.037 1.769 -2.264 1.769 H 37.885 V 31.121 h 11.966 c 1.227 0 2.264 0.81 2.264 1.769 V 40.231 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(248,195,65); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                                    </g>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="update-menu" id="update-menu"></div>
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