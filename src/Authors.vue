<template>
        <div>
            <h2 class="texth">NEWS</h2>
            <p>{{news.rss.channel[0].title[0]}}</p>
            <p>{{news.rss.channel[0].link[0]}}</p>
            <p>{{news.rss.channel[0].description[0]}}</p>
            <p>{{news.rss.channel[0].item[0].title[0]}}</p>
            <p>{{news.rss.channel[0].item[0].description[0]}}</p>
            <p>{{news.rss.channel[0].item[0].link[0]}}</p>
            <p>{{news.rss.channel[0].item[0].pubDate[0]}}</p>
    </div>
</template>

<script>
import axios from "axios";
var parseString = require('xml2js').parseString;
export default {
  data () {
    return {
      news: []
    };
  },
    created: function() {
        axios.get('https://www.who.int/rss-feeds/news-english.xml')
        .then(response => {
            var self = this; 
            parseString(response.data, function (err, result) {
            self.news = result
            });        
        })
    }
  }
</script>