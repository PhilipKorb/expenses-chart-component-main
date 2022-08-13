//find higher amount var
var higher = 0;

//fetch getting data
fetch("../data.json").then(function(resp){
  return resp.json();
}).then(function(data) {

  //looping trought
  for (let index = 0; index < data.length; index++) {
    //verify higher
    if (higher < data[index].amount) {
      higher = data[index].amount;

      //removing higherclass while looping to find higher amount
      $('.bar__fill').removeClass('higher');
      //creating divs with higher class
      $('.bar__fild').append(`<div class="bar__item"><div class="bar__info"><h4>$${data[index].amount}</h4></div><div class="bar__fill higher" style="height: ${data[index].amount}%"></div><p>${data[index].day}</p></div>`);
    } else {
      //creating divs with normal class
      $('.bar__fild').append(`<div class="bar__item"><div class="bar__info"><h4>$${data[index].amount}</h4></div><div class="bar__fill" style="height: ${data[index].amount}%"></div><p>${data[index].day}</p></div>`);
    }
  }
})
