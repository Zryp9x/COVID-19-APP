<template>
        <div>
          <h2 class="texth">Current country data all around the world!</h2>
          <h3 class="texth">Click on country name to see specified data for each country.</h3><br><br>
        <table id="tab" class="display">
            <thead>
                <tr>
                    <th>Country</th>
                    <th>Total confirmed</th>
                    <th>New confirmed</th>
                    <th>Total deaths</th>
                    <th>New deaths</th>
                    <th>Total recovered</th>
                    <th>New recovered</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(country, index) in countries.Countries" :key=index>
                    <td><router-link v-bind:to="'/CountryInfo/' + countries.Countries[index].CountryCode">{{countries.Countries[index].Country}} <img class="img" v-bind:src="'https://www.countryflags.io/' + countries.Countries[index].CountryCode + '/flat/24.png'"></router-link></td>
                    <td>{{countries.Countries[index].TotalConfirmed}}</td>
                    <td>{{countries.Countries[index].NewConfirmed}}</td>
                    <td>{{countries.Countries[index].TotalDeaths}}</td>
                    <td>{{countries.Countries[index].NewDeaths}}</td>
                    <td>{{countries.Countries[index].TotalRecovered}}</td>
                    <td>{{countries.Countries[index].NewRecovered}}</td>
                </tr>
            </tbody>
        </table>
        <p></p>
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
    },
     updated () {
        $(document).ready(function(){
            $('#tab').DataTable({
                "order": [[ 1, "desc" ]],
                "scrollX": true,
                "pageLength": 25
            });
        });
     }
     }
</script>
