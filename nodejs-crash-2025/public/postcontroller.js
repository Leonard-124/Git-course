
 // const posts = [
//  {id:1, title: 'Post One'},
 // {id:2, title: 'Post Two'},
 // ]
 // export const getPosts = () => posts;

 const video = document.getElementById('di');
 const plapausebtn = document.getElementById('plpase');
 plapausebtn.addEventListener('click', () => {
    if(video.paused){
        video.play();
        plapausebtn.textContent = 'Pause';
    }
 });
 video.addEventListener('ended', () => {
    plapausebtn.textContent = 'Play';
 });

for (let i = 0; i<=8; i++) {
    console.log(video[i]);
};

function bye() {
    document.getElementById('pye').innerHTML = 'We serve you the best'
}
////////////////////////////////////////////////////////////////
fetch('/api/data')//Make a GET request to the '/api/data' endpoint on your backend
.then(response => {
    if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
}
return response.json(); //Parse the response body as JSON
})
.then(data => {
    console.log('Data from backend:',data);
    //Update your frontend UI with the received data
})
.catch(error => {
    console.error('Error fetching data:',error);
});
//Example of a POST request to send data to the backend
const newData = {name: 'John Doe', age: 30};
fetch('/api/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',// Tell the server you're sending JSON data
    },
    body: JSON.stringify(newData),//Convert your Javascrypt object to a JSON string
})
    .then(response => response.json())
    .then(data => {
        console.log('Response from server:', data);
        //Handle the server's response
    })
    .catch(error => {
        console.error('Error sending data:', error);
    });

