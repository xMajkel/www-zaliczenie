var startDateInput = document.getElementById('start-date');
var endDateInput = document.getElementById('end-date');
var priceOutput = document.getElementById('price');
var selectElement = document.getElementById('car-type');
var daysElement = document.getElementById('days');

var prices = {
  standard: {
    day: 100,
    threeDays: 250,
    week: 500,
    month: 2000 
  },
  sport: {
    day: 200,
    threeDays: 500,
    week: 1000,
    month: 4000 
  },
  luxury: {
    day: 300,
    threeDays: 750,
    week: 1500,
    month: 6000 
  },
  suv: {
    day: 150,
    threeDays: 400,
    week: 800,
    month: 3000 
  },
  classic: {
    day: 250,
    threeDays: 600,
    week: 1200,
    month: 4500 
  },
};

function calculateDateDifference() {

  var startDate = new Date(startDateInput.value);
  var endDate = new Date(endDateInput.value);
  var selectedValue = selectElement.value;

  if (selectedValue === ''){
    priceOutput.textContent = "Wybierz typ pojazdu";
    priceOutput.style.color = 'black';
    return;
  }

  if (startDateInput.value === '') {
    priceOutput.textContent = "Wybierz datę początkową";
    priceOutput.style.color = 'black';
    return;
  }
  if (endDateInput.value === '') {
    priceOutput.textContent = "Wybierz datę końcową";
    priceOutput.style.color = 'black';
    return;
  }
  if (startDate > endDate) {
    priceOutput.textContent = "Błąd daty";
    priceOutput.style.color = 'red';
    return;
  } else {
    var differenceInTime = endDate.getTime() - startDate.getTime();
    var differenceInDays = differenceInTime / (1000 * 3600 * 24);
    daysElement.textContent = differenceInDays;
    priceOutput.textContent = calculatePrice(differenceInDays,selectedValue).toLocaleString('fr-FR')+ " zł";
    priceOutput.style.color = 'green';
    return;
  }
}

function calculatePrice(days,type){
  var price;
  if (days ==0){
    price =  0;
  }else if (days >= 30){
    price = prices[type]['month'] + calculatePrice(days-30,type);
  }else if(days >=7){
    price = prices[type]['week'] + calculatePrice(days-7,type);
  }else if(days>=3){
    price = prices[type]['threeDays'] + calculatePrice(days-3,type);
  }else{
    price = prices[type]['day'] *days;
  }
  return price;
}

setInterval(calculateDateDifference, 100);