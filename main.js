
var pieBtn = $("#pieBtn");
var barBtn = $("#barBtn");
var radarBtn = $("#radarBtn");

var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, 
{
    type: "bar",
    data: {
        labels: ['Work', 'MTG', 'Coding', 'Eating', 'Cat', 'Drumming'],
        datasets: [
        {
            label: "# of Votes",
            data: [5, 5, 5, 5, 5, 5],
            backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
        }
        ]
    },
    options: 
    {
        events: ["click", "mousemove"],
        maintainAspectRatio: false,
        scales: 
        {
            yAxes: 
            [
                {
                    ticks: 
                    {
                        beginAtZero: true
                    }
                }
            ]
        }
    }
});

$(barBtn).on("click", function()
{
    myChart.destroy();
    myChart = new Chart(ctx, 
    {
        type: "bar",
        data: 
        {
            labels: ['Work', 'MTG', 'Coding', 'Eating', 'Cat', 'Drumming'],
            datasets: 
            [{
                label: "# of Votes",
                data: [parseFloat($("#workInput").val()),
                        parseFloat($("#MTGInput").val()),
                        parseFloat($("#codingInput").val()),
                        parseFloat($("#eatingInput").val()),
                        parseFloat($("#catInput").val()),
                        parseFloat($("#drummingInput").val())],
                backgroundColor: 
                [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)"
                ],
                borderColor: 
                [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
                ],
                borderWidth: 1
            }]
        },
        options: 
        {
            events: ["click", "mousemove"],
            maintainAspectRatio: false,
            scales: 
            {
                yAxes: 
                [{
                    ticks: 
                    {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});

$(pieBtn).on("click", function()
{
    myChart.destroy();
    myChart = new Chart(ctx,
    {
        type: 'pie',
        data:
        {
            labels: ['Work', 'MTG', 'Coding', 'Eating', 'Cat', 'Drumming'],
            datasets:
            [{
                label: '# of Votes',
                data: [parseFloat($("#workInput").val()),
                        parseFloat($("#MTGInput").val()),
                        parseFloat($("#codingInput").val()),
                        parseFloat($("#eatingInput").val()),
                        parseFloat($("#catInput").val()),
                        parseFloat($("#drummingInput").val())],
                backgroundColor: 
                [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor:
                [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options:
        {
            events: ["click", "mousemove"],
            maintainAspectRatio: false,
            scales:
            {
                yAxes:
                [{
                    ticks:
                    {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});

$(radarBtn).on("click", function()
{
    myChart.destroy();
    myChart = new Chart(ctx,
    {
        type: 'radar',
        data:
        {
            labels: ['Work', 'MTG', 'Coding', 'Eating', 'Cat', 'Drumming'],
            datasets:
            [{
                label: '# of Votes',
                data: [parseFloat($("#workInput").val()),
                        parseFloat($("#MTGInput").val()),
                        parseFloat($("#codingInput").val()),
                        parseFloat($("#eatingInput").val()),
                        parseFloat($("#catInput").val()),
                        parseFloat($("#drummingInput").val())],
                backgroundColor: 
                [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor:
                [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options:
        {
            events: ["click", "mousemove"],
            maintainAspectRatio: false,
            scales:
            {
                yAxes:
                [{
                    ticks:
                    {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});

//Need to create a function to generate chart based on 'btn' press

// function chartType()
// {
//     if($(barBtn).click())
//     {
//         myChart.destroy();
//         myChart = new Chart(ctx, 
//         {
//             type: "bar",
//             data: 
//             {
//                 labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//                 datasets: 
//                 [{
//                     label: "# of Votes",
//                     data: [12, 19, 3, 21, 2, 3],
//                     backgroundColor: 
//                     [
//                     "rgba(255, 99, 132, 0.2)",
//                     "rgba(54, 162, 235, 0.2)",
//                     "rgba(255, 206, 86, 0.2)",
//                     "rgba(75, 192, 192, 0.2)",
//                     "rgba(153, 102, 255, 0.2)",
//                     "rgba(255, 159, 64, 0.2)"
//                     ],
//                     borderColor: 
//                     [
//                     "rgba(255, 99, 132, 1)",
//                     "rgba(54, 162, 235, 1)",
//                     "rgba(255, 206, 86, 1)",
//                     "rgba(75, 192, 192, 1)",
//                     "rgba(153, 102, 255, 1)",
//                     "rgba(255, 159, 64, 1)"
//                     ],
//                     borderWidth: 1
//                 }]
//             },
//             options: 
//             {
//                 events: ["click", "mousemove"],
//                 maintainAspectRatio: false,
//                 scales: 
//                 {
//                     yAxes: 
//                     [{
//                         ticks: 
//                         {
//                             beginAtZero: true
//                         }
//                     }]
//                 }
//             }
//         });
//     }
// }