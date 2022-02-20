import feedparser, requests

cryptoNewsURL = "https://news.google.com/rss/topics/CAAqKAgKIiJDQkFTRXdvS0wyMHZNSFp3YWpSZlloSUZaVzR0UjBJb0FBUAE?ceid=IN:en&oc=3"

def all():
    feed = feedparser.parse(cryptoNewsURL)
    cryptoNews = []
    for i in range(10):
        title = feed['entries'][i]['title']
        link = requests.get(feed['entries'][i]['link']).url
        source = feed['entries'][i]['source']
        cryptoNews.append({'title':title, 'link':link, 'source':source})
    return cryptoNews