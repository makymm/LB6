const fResult = document.getElementById('result');

function int(){
    const a = +document.getElementById('limit1').value;
    const b = +document.getElementById('limit2').value;
    const n = +document.getElementById('n').value;
    const acc = +document.getElementById('acc').value;
    let h = (b-a)/n;
    let sum = 0;
    let c = n-1;
    for(z = 1; z <= c ; z++){
        sum += (1 + Math.cos(z) + Math.sin(z));
    }
    let f = -Math.cos(b)-Math.sin(b)
    const result = (h*((((1+Math.cos(a)+Math.sin(a))+(1+Math.cos(b)+Math.sin(b)))/2) + sum))-((f/12)*(b-a)*h**2);
    fResult.innerHTML =+ result.toFixed(acc);

    createPoints(a, b, n);
    const ctx = document.getElementById('myChart');
      
    new Chart(ctx, {
        type: 'line',
        data: {
        labels: pointsArrX,
        datasets: [{
            label: 'y=1+cos(x)+sin(x) ',
            data: pointsArrY,
            fill: false,
        }]
        },
        options: {
            responsive: true,
            interaction: {
            intersect: false,
            axis: 'x'
            },
            plugins: {
            title: {
                display: true,
            }
            }
        }
    });
    function createPoints(a, b, n){
        pointsArrX = [];
        pointsArrY = [];
        pointsArrX.push(a);
        pointsArrY.push(foo(a));
        let p = (Math.abs(b) - Math.abs(a))/n;
        let point = a;
        while(point < b - p){
            point += p;
            pointsArrX.push(point.toFixed(3));
            pointsArrY.push(foo(point).toFixed(3));
        }
        pointsArrX.push(b);
        pointsArrY.push(foo(b));
        return pointsArrX, pointsArrY;
    };
    function foo(x){
        return 1+Math.cos(x)+Math.sin(x);
    };
};



