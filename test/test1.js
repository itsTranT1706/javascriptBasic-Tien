// // alert('hello world and everyone');
// <!DOCTYPE html>
// <html>
// <body>
// <h1>HTML DOM Events</h1>
// <h2>The onclick Event</h2>

// <p>The onclick event triggers a function when an element is clicked on.</p>
// <p>Click to trigger a function that will output "Hello World":</p>

// <button onclick="myFunction()">Click me</button>

// <p id="demo"></p>

// <script>
// function myFunction() {
//   document.getElementById("demo").innerHTML = "Hello World";
// }
// </script>

// </body>
// </html>

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
        return response.json()
    })
    .then(function (json) {
        console.log(json)
    })



fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
.then(function (response) {
    return response.json()
})
.then(function (json) {
    console.log(json)
})