//Get all the countries from Asia continent /region using Filter function

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () 
{ var data = JSON.parse(this.response); 
    const asia = data.filter((data) => data.region == "Asia");

    console.log(asia);
    // console.log(data);
};
xhr.send();

//Get all the countries with a population of less than 2 lakhs using Filter function

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () 
{ var data = JSON.parse(this.response); 
    const population = data.filter((data) => data.population < 200000);

    console.log(population);
    // console.log(data);
};
xhr.send();

// Print the following details name, capital, flag using forEach function

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () 
{ var data = JSON.parse(this.response); 
    data.forEach(data => {
        console.log(data.name);
        console.log(data.capital);
        console.log(data.flag);
    });
};
xhr.send();

// Print the total population of countries using reduce function

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () 
{ var data = JSON.parse(this.response); 
    let curr = data.population;
    const totalPop = data.reduce(function(total, curr)
    {   return total += +curr;
    }, 0);

    console.log(totalPop);
};
xhr.send();

// Print the country which uses US Dollars as currency.

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () 
{ var data = JSON.parse(this.response); 
    data.filter((data) => {
        if(data.currencies[0].name == "United States dollar")
            console.log(`The country name is ${data.name}`);
            
    });

};
xhr.send();
