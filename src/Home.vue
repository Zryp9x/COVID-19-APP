<template>
    <div class="row">
          <div class="col-md-6">
              <h4 class="dataText">Total confirmed:</h4>
              <p class="data">{{countries.Global.TotalConfirmed}}</p>
              <h4 class="dataText">Total deaths:</h4>
              <p class="data">{{countries.Global.TotalDeaths}}</p>
              <h4 class="dataText">Total recovered:</h4>
              <p class="data">{{countries.Global.TotalRecovered}}</p>
          </div>
          <div class="col-md-6">
              <h4 class="dataText">New confirmed:</h4>
              <p class="data">{{countries.Global.NewConfirmed}}</p>
              <h4 class="dataText">New deaths:</h4>
              <p class="data">{{countries.Global.NewDeaths}}</p>
              <h4 class="dataText">New recovered:</h4>
              <p class="data">{{countries.Global.NewRecovered}}</p>
          </div>
      </div>
</template>

<script>
export default {
  data () {
    return {
      countries: []
    };
  },
    created: function() {
      fetch("https://api.covid19api.com/summary")
      .then(response => response.json())
      .then((data) =>{
        this.countries = data;
      })
    }
  };
</script>
