// alert icon

let alertListUl = document.getElementById('alertListUl');
let bellSVG = document.getElementById('bell-icon');
let show;

bellSVG.addEventListener('click', () => {
  if (show) {
    alertListUl.className = "activeAlert";
    show = false;
  } else {
    alertListUl.className = "activeAlert display-alerts";
    show = true;
  }
});

let alertClear = document.querySelectorAll('.alert-clear');
let activeAlerts = alertClear.length;
let greenAlert = document.getElementById('green-alert');

for (let i=0; i<alertClear.length; i++) {
  alertClear[i].addEventListener('click', (e) => {
    let alert = e.target;
    alert.parentNode.style.display = 'none';
    activeAlerts--;
    if (activeAlerts == 0) {
      greenAlert.style.display= 'none';
      // alertBox.style.display = 'none';
    }
  });
}

// alert banner

const alertBanner = document.getElementById("alert");

alertBanner.innerHTML = 
  `<div class="alert-banner">
    <p><strong>Alert:</strong> You have unread messages!</p>
    <p class="alert-banner-close">&#9747;</p>
  </div>`
  alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
      alertBanner.style.display = "none"
    }
  })

// Line Chart
// Variables for traffic-nav

const trafficNav = document.querySelectorAll('.traffic-nav');
const trafficNavLinks = document.querySelectorAll('.traffic-nav-link');
const trafficChart = document.querySelector('#traffic-chart').getContext('2d');

// hourly data for trafficChart
  const hourly = {
    labels: ["5-6am", "6-7am", "7-8am", "8-9am", "9-10am", "10-11am", "11-noon", "12-1pm", "1-2pm", "2-3pm", "3-4pm"],
    datasets: [{
        data: [1, 3, 18, 23, 4, 7, 3, 24, 13, 15, 22],
        backgroundColor: "rgba(171, 169, 212, .5)",
        borderWidth: 2,
        borderColor: "rgba(161, 161, 165, .3)", 
        lineTension: .25,
        radius: 1.9,
    }],
    options: {
      backgroundColor: 'rgba(255,69,0,.4)',
      responsive: true,
      maintainAspectRation: false,
      // aspectRatio: 1,
      fill: true,
      animation: {
        duration: 0
      },
      scales: {
        y: {
          beginAtZero: true,
          // min: 0,
          max: 25,
          grid: {
            display: true,
            color: "rgba(204,204,255,.4)",
          },
          ticks: {
            // maxRotation: 90,
            // minRotation: 180,
            stepSize: 5,
            color: "rgb(36,36,36)",
          },
        },
        x: {
          ticks: {
            color: "rgb(58,58,58)",
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    }
  };

   // daily data for trafficChart

  const daily = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{
        data: [112, 20, 80, 40, 70, 135, 147],
        backgroundColor: "rgba(171, 169, 212, .5)",
        borderWidth: 2,
        borderColor: "rgba(161, 161, 165, .3)", 
        lineTension: .25,
        radius: 1.9,
    }],
    options: {
      backgroundColor: 'rgba(255,69,0,.4)',
      responsive: true,
      maintainAspectRation: false,
      // aspectRatio: 1,
      fill: true,
      animation: {
        duration: 0
      },
      scales: {
        y: {
          max: 150,
          beginAtZero: true,
          // min: 0,
          ticks: {
            // maxRotation: 90,
            // minRotation: 180,
            stepSize: 25,
            color: "rgb(36,36,36)",
          },
          grid: {
            display: true,
            color: "rgba(204,204,255,.4)",
          },
        },
        x: {
          ticks: {
            color: "rgb(58,58,58)",
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    }
  };

  // weekly data for trafficChart

  const weekly = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [{
        // data: [1200, 13000, 100000, 90000, 120000, 135000, 30000, 150000, 137500, 15000, 90000, 25000],
         data: [400, 750, 1000, 900, 1200, 1350, 850, 974, 1015, 1300, 1410, 1500],
         backgroundColor: "rgba(171, 169, 212, .5)",
         borderWidth: 2,
         borderColor: "rgba(161, 161, 165, .3)", 
         lineTension: .25,
         radius: 1.9,
     }],
     options: {
       backgroundColor: 'rgba(255,69,0,.4)',
       responsive: true,
       maintainAspectRation: false,
       // aspectRatio: 1,
       fill: true,
       animation: {
         duration: 0
       },
       scales: {
         y: {
           max: 1500,
           beginAtZero: true,
           // min: 0,
           ticks: {
             // maxRotation: 90,
             // minRotation: 180,
             stepSize: 250,
             color: "rgb(36,36,36)",
           },
           grid: {
             display: true,
             color: "rgba(204,204,255,.4)",
           },
         },
         x: {
           ticks: {
             color: "rgb(58,58,58)",
           },
         },
       },
       plugins: {
         legend: {
           display: false,
         },
       },
     }
   };
 

  // monthly data for trafficChart

  const monthly = {
   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
        data: [720, 430, 1000, 1200, 1400, 1350, 1700, 2000, 2505, 1500, 900, 670],
        backgroundColor: "rgba(171, 169, 212, .5)",
        borderWidth: 2,
        borderColor: "rgba(161, 161, 165, .3)", 
        lineTension: .25,
        radius: 1.9,
    }],
    options: {
      backgroundColor: 'rgba(255,69,0,.4)',
      responsive: true,
      maintainAspectRation: false,
      // aspectRatio: 1,
      fill: true,
      animation: {
        duration: 0
      },
      scales: {
        y: {
          max: 2500,
          beginAtZero: true,
          // min: 0,
          ticks: {
            // maxRotation: 90,
            // minRotation: 180,
            stepSize: 500,
            color: "rgb(36,36,36)",
          },
          grid: {
            display: true,
            color: "rgba(204,204,255,.4)",
          },
        },
        x: {
          ticks: {
            color: "rgb(58,58,58)",
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    }
  };


// variables for line chart nav

const trafficHourlyLabel = hourly.labels;
const trafficHourlyData = hourly.datasets;
const trafficHourlyOptions = hourly.options;
const trafficHourlyScales = hourly.options.scales;

const trafficDailyLabel = daily.labels;
const trafficDailyData = daily.datasets;
const trafficDailyOptions = daily.options;
const trafficDailyScales = daily.options.scales;

const trafficWeeklyLabel = weekly.labels;
const trafficWeeklyData = weekly.datasets;
const trafficWeeklyOptions = weekly.options;
const trafficWeeklyScales = weekly.options.scales;

const trafficMonthlyLabel = monthly.labels;
const trafficMonthlyData = monthly.datasets;
const trafficMonthlyOptions = monthly.options;
const trafficMonthlyScales = monthly.options.scales;

const defaultLabel = monthly.labels;
const defaultData = monthly.datasets;
const defaultOptions = monthly.options;
const defaultScales = monthly.options.scales;

// create line chart

function createTrafficLineChart(labels, data, options, scales) {
  trafficLine = new Chart(trafficChart, {
    type: 'line',
    data: {
      labels: labels,
      datasets: data,
    },
    options: options,
  })
};

createTrafficLineChart(defaultLabel, defaultData, defaultOptions, defaultScales);

// select period of data to display - traffic nav

trafficNavLinks.forEach(item => {
  item.addEventListener('click', (e) => {

    
let navLinkActive = e.target;

    for (i = 0; i < trafficNavLinks.length; i++) {
      trafficNavLinks[i].classList.remove('active');
    };
  
    if (navLinkActive.innerText === 'Hourly') {
      trafficLine.destroy();
      createTrafficLineChart(trafficHourlyLabel, trafficHourlyData, trafficHourlyOptions, trafficHourlyScales);
      trafficLine.update();
      navLinkActive.classList.add('active');
    } else if (navLinkActive.innerText === 'Daily') {
      trafficLine.destroy();
      createTrafficLineChart(trafficDailyLabel, trafficDailyData, trafficDailyOptions, trafficDailyScales);
      trafficLine.update();
      navLinkActive.classList.add('active');
    } else if (navLinkActive.innerText === 'Weekly') {
      trafficLine.destroy();
      createTrafficLineChart(trafficWeeklyLabel, trafficWeeklyData, trafficWeeklyOptions, trafficWeeklyScales);
      trafficLine.update();
      navLinkActive.classList.add('active');
    } else {
      trafficLine.destroy();
      createTrafficLineChart(trafficMonthlyLabel, trafficMonthlyData, trafficMonthlyOptions, trafficMonthlyScales);
      trafficLine.update();
      navLinkActive.classList.add('active');
    }
  });
})


// data for dailyChart - bar
const dailyData = {
    labels: ["Su", "M", "T", "W", "R", "F", "Sa"],
    datasets: [{
        label: "Hits",
        data: [68, 112, 170, 122, 238, 200, 99],
        backgroundColor: '#7477BF',
        backgroundColor: ['rgba(116, 119, 191, 1)'],
        borderWidth: 1
    }]
};

const dailyOptions = {
    responsive: true,
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

//create dailyChart - bar
new Chart('daily-chart', {
    type: 'bar',
    options: dailyOptions,
    data: dailyData
  });


  // data for mobileChart - doughnut
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: "Device",
        data: [4000, 1250, 1200],
        // borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ],

    }]
    
};

const mobileOptions = {
    aspectRatio: 1.9,
    plugins: {
        responsive: true,
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
};

//create mobileChart - doughnut
new Chart('mobile-chart', {
    type: 'doughnut',
    options: mobileOptions,
    data: mobileData
  });

// autocomplete user text field

let userNames = ["Aussie", "Lily Pilly", "Guanabanita", "Razzleberry", "Muntry", "Guanabana", "Sprig", "Lava", "Sapphire", "Fifi", "Aquasparta", "Vesuvius", "Franklin", "Willy Wonka Wigglepants Kazam", "Prince Charming", "Beezra", "Mr. Truffe", "Snow White", "DaNiece", "Nestle Chocolate Chip", "Chit", "Raven", "Cloud", "Sunrise", "Marble", "Lickorice", "Grover", "Hazel", "Orchid",];
let sortedNames = userNames.sort();

let userInput = document.getElementById('userField');
const suggestedNames = document.querySelector('.listSuggestions');

userInput.addEventListener("keyup", (e) => {
  // loop through above array
      // Initially remove all elements (so if suer erases a letter or adds new letter then clean previous outputs)
    removeElements();
    // const listDisplay = document.getElementsByClassName('.listSuggestions');
    // listDisplay.style.visibility="visible";
  for (let i of sortedNames){
    // convert input to lowercase and compare with each string

    if (i.toLowerCase().startsWith(userInput.value.toLowerCase()) && userInput.value != "") {
      // create li Element
      suggestedNames.style.display = "block";
      let listItem = document.createElement("li");
      // One common class name
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onClick", "displayNames('"+i+"')");
      // Display matched part in bold
      let word = "<b>" + i.substr(0,userInput.value.length) + "</b>";
      word += i.substr(userInput.value.length);
      // display the value in array
      listItem.innerHTML = word;
      document.querySelector(".listSuggestions").appendChild(listItem);
    }
  }
});

function displayNames(value) {
  userInput.value = value;
  removeElements();
}

function removeElements(){
  // clear all the items
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  })
}


//send button

const form = document.getElementById('send-message');
const user = form.querySelector('input');
const message = form.querySelector('textarea');


form.addEventListener('submit', (e) => {
  e.preventDefault();
// if either field is empty prompt an error
  if (user.value.length < 1  || message.value.length < 1 ) {
    alert('Please ensure you have identified the recipient and provided the message you would like to submit.  Thank you!')
  } else {
  alert(`Your message has been submitted!`);
  }
})

// Settings - toggle switches and dropdown with save/cancel functionality

const emailToggle = document.querySelector('#toggleEmail');
const publicToggle = document.querySelector('#togglePublic');
const timezoneSet = document.querySelector('#timezone');
const saveButton = document.querySelector('#save');
const cancelButton = document.querySelector('#cancel');
let localStorage = window.localStorage;

window.onload = function () {
  if (localStorage.emailToggle == "true") {
    emailToggle.checked = true;
  } else {
    emailToggle.checked = false;
  }
  if (localStorage.publicToggle == "true") {
    publicToggle.checked = true;
  } else {
    publicToggle.checked = false;
  }
  if (localStorage.timezoneSet != null) {
    timezoneSet.value = localStorage.timezoneSet;
  }
};

saveButton.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.setItem("emailToggle", emailToggle.checked);
  localStorage.setItem("publicToggle", publicToggle.checked);
  localStorage.setItem("timezoneSet", timezoneSet.value);
  alert("Your settings are saved and ready for your return!  Come back soon!")
});

cancelButton.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.clear();
  alert("Your settings have been cancelled.  It's like you were never here and have no opinions on the matter. :)")
});
