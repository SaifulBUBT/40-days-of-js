//fetch API example to make a GET request
// fetch(URL, options)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));

// -2. Using async/await syntax
async function fetchData(url) { 
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        
    }catch (error) {
        console.error('Error:', error);
    }
}  

//fetchData('https://jsonplaceholder.typicode.com/users');


// -3. Using a function to fetch data from a URL
async function fetchPosts(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }   
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

// fetchPosts()

// -4. fetch using params
async function fetchPostsWithComments() {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    const queryParams = {
        _embed: 'comments', 
        _limit: 5
    };

    try {
        const queryString = new URLSearchParams(queryParams).toString();
        // console.log(queryString);
        const urlWithParams = `${url}?${queryString}`;
        // console.log(urlWithParams);
        const response = await fetch(urlWithParams);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }       
        const data = await response.json();
        console.log(data);
        
        

    } catch (error) {
        console.error('Error:', error);
    }
  
}

fetchPostsWithComments()