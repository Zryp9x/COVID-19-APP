<template>
    <div class="row">
          <div class="col-md-6">
              <h4 class="dataText">Total confirmed:</h4>
              <p class="data">{{countries.Global.TotalConfirmed}} <img class="img" src="src/css/img/virus.png" width="40px" height="40px" style="margin-bottom:10px;"></p>
              <h4 class="dataText">Total deaths:</h4>
              <p class="data">{{countries.Global.TotalDeaths}} <img class="img" src="src/css/img/cross.png" width="40px" height="40px" style="margin-bottom:10px;"></p>
              <h4 class="dataText">Total recovered:</h4>
              <p class="data">{{countries.Global.TotalRecovered}} <img class="img" src="src/css/img/heart.png" width="40px" height="40px" style="margin-bottom:10px;"></p>
          </div>
          <div class="col-md-6">
              <h4 class="dataText">New confirmed:</h4>
              <p class="data">{{countries.Global.NewConfirmed}} <img class="img" src="src/css/img/virus.png" width="40px" height="35px" style="margin-bottom:10px;"></p>
              <h4 class="dataText">New deaths:</h4>
              <p class="data">{{countries.Global.NewDeaths}} <img class="img" src="src/css/img/cross.png" width="40px" height="35px" style="margin-bottom:10px;"></p>
              <h4 class="dataText">New recovered:</h4>
              <p class="data">{{countries.Global.NewRecovered}} <img class="img" src="src/css/img/heart.png" width="40px" height="40px" style="margin-bottom:10px;"></p>
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
