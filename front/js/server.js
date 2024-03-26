document.getElementById('btn1').addEventListener('click', fetchData1);
document.getElementById('btn2').addEventListener('click', fetchData2);
document.getElementById('btn3').addEventListener('click', fetchData3);
document.getElementById('btn4').addEventListener('click', fetchData4);

function fetchData1() {
    axios
        .get('http://localhost:3000/allowed')
        .then(response => {
            const result1 = document.getElementById('result1');
            result1.innerText = JSON.stringify(response.data);
            })
        .catch(error => console.error(error.message));
}

function fetchData2() {
    axios
        .get('http://localhost:3000/not-allowed')
        .then(response => {
            const result2 = document.getElementById('result2');
            result2.innerText = JSON.stringify(response.data);
            })
        .catch(error => console.error(error.message));
}

function fetchData3() {
    axios
        .put('http://localhost:3000/preflight', {Headers: 'Content-Type: application/json'})
        .then(response => {
            const result3 = document.getElementById('result3');
            result3.innerText = JSON.stringify(response.data);
            })
        .catch(error => console.error(error.message));
}

function fetchData4() {
    axios
        .get('http://localhost:3000/credential', {withCredentials: true})
        .then(response => {
            const result4 = document.getElementById('result4');
            result4.innerText = JSON.stringify(response.data);
            })
        .catch(error => console.error(error.message));
}