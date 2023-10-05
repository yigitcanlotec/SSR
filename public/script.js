

document.getElementById('myForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const done =  document.getElementById("done").checked ? true : false;
    console.log(done);
    const title = document.getElementById("title").value;
    const assignee = document.getElementById("assignee").value;
    // const query = `INSERT INTO todo (title, assignee, done) values (${title}, ${assignee}, ${done})`
    // console.log(query);

    //    await fetch('/submit', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json' 
    //         },
    //        body: {"test": 1}
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log('Data sent successfully:', data);
    //         // Handle the response data as needed
    //     })
    //     .catch(error => {
    //         console.error('Error sending data:', error);
    //     });
    
    
});