// alert banner

const alertBanner = document.getElementById("alert");

alertBanner.innerHTML = 
  `<div class="alert-banner">
    <p><strong>Alert:</strong> You have unread messages!</p>
    <p class="alert-banner-close">x</p>
  </div>`
  alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
      alertBanner.style.display = "none"
    }
  })

// data for trafficChart
let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [700, 1350, 1000, 2000, 1500, 1700, 1390, 1879, 2207, 1500, 2500],
        // label: "null",
      backgroundColor: "rgba(230, 230, 250, 1)",
      borderColor: "rgba(169,169,169,1)",
      borderWidth: .5,
      lineTension: .5,
      radius: 1.2
    //   hoverBackgroundColor: "rgba(255,99,132,0.4)",
    //   hoverBorderColor: "rgba(255,99,132,1)",

    }]
  };

  // hourly data for trafficChart
  let hourlyData = {
    labels: ["5-6am", "6-7am", "7-8am", "8-9am", "9-10am", "10-11am", "11-noon", "12-1pm", "1-2pm", "2-3pm", "3-4pm"],
    datasets: [{
        data: [12, 130, 1000, 900, 1200, 1350, 300, 1500, 1375, 150, 900],
    }]
  };

  // weekly data for trafficChart
  let weeklyData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [{
        data: [1200, 13000, 100000, 90000, 120000, 135000, 30000, 150000, 137500, 15000, 90000, 25000],
    }]
  };

  // monthly data for trafficChart
  let monthlyData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
        data: [7200000, 4300000, 100000000, 90000, 1200000, 1350000, 30000, 150000, 13750000, 1500, 90000],
    }]
  };

// options for trafficChart
  let trafficOptions = {
    // backgroundColor: 'rgba(255,69,0,.9)',
    // maintainAspectRatio: false,
    fill: true,
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
      y: {
        // stacked: true,
        beginAtZero: true,
        // grid: {
        //   display: true,
        //   color: "rgba(204,204,255,.2)"
        },
      x:  {
        ticks: {
          // maxRotation: 90,
          // minRotation: 180
        }
      },
      plugins: {
          legend: {
              display: false
          }
      }
    }
  };

//   let trafficChart = new Chart(trafficCanvas, {
//       type: 'line',
//       data: trafficData,
//       options: trafficOptions
//   });
  
//create trafficChart
  new Chart('traffic-chart', {
    type: 'line',
    options: trafficOptions,
    data: trafficData
  });

// const lineChart = new Chart(ctx, {
//     type: 'line',
//     data: data,
// });



// const labels = 

// const data =

// const config =

// const myChart=new Chart(
//     ctx,
//     config
// );


// data for dailyChart
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

//create dailyChart
new Chart('daily-chart', {
    type: 'bar',
    options: dailyOptions,
    data: dailyData
  });


  // data for mobileChart
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: "Device",
        data: [4000, 1250, 1200],
        // background: '#7477BF',
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ],
        // borderWidth: 1
    }]
};

const mobileOptions = {
    aspectRatio: 1.9,
    plugins: {
        responsive: true,
        legend: {
            position: 'right',
            labels: {
                boxWidth: 18,
                fontStyle: 'bold'
            }
        }
    }
};

//create mobileChart
new Chart('mobile-chart', {
    type: 'doughnut',
    options: mobileOptions,
    data: mobileData
  });


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