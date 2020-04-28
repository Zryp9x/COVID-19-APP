<template>
        <div>
            <h2 class="texth">NEWS</h2>
            <div v-for="(item, index) in news.rss.channel[0].item" :key=index>  
                <h2>{{news.rss.channel[0].item[index].title[0]}}</h2>
                <p>{{news.rss.channel[0].item[index].description[0]}}</p>
                <p>{{news.rss.channel[0].item[index].link[0]}}</p>
                <p>{{news.rss.channel[0].item[index].pubDate[0]}}</p>
                <hr><hr><hr><hr><hr>
            </div>
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