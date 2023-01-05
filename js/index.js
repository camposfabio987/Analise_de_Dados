let ctx = document.getElementById('chart').getContext('2d');
let chart = new Chart(ctx, {

    type: 'line',

    data: {
        labels:["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
        {
            label: "Usaram EPI's",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        },
        {
            label: "Não usaram EPI's",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [10, 20, 7, 2, 23, 30, 30],
        },
    
    
    
    ]
    },
    
    options: {}
});
