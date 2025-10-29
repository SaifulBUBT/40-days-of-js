//fetch API example to make a GET request
// fetch(URL, options)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));

// -2. Using async/await syntax
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Response status", response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

//fetchData('https://jsonplaceholder.typicode.com/users');

// -3. Using a function to fetch data from a URL
// async function fetchPosts() {
//   const url = "https://jsonplaceholder.typicode.com/posts";
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error("Network response was not ok " + response.statusText);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

async function fetchPosts() {
  const API_URL = "http://localhost:3000/posts";

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok", response.statusText);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

//fetchPosts();

// -4. fetch using params
async function fetchPostsWithComments() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  //   http://localhost:3000/posts/?views=201
  //   http://localhost:3000/posts/?_limit=2
  //   http://localhost:3000/posts/?_embed=comments

  const queryParams = {
    _embed: "comments",
    _limit: 5,
  };

  try {
    const queryString = new URLSearchParams(queryParams).toString();
    // console.log(queryString);
    const urlWithParams = `${url}?${queryString}`;
    // console.log(urlWithParams);
    const response = await fetch(urlWithParams);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

//fetchPostsWithComments();

async function fetchPostsWithParams() {
  const url = "http://localhost:3000/posts/";
  const queryParams = {
    _embed: "comments",
    views: 160,
  };

  const queryString = new URLSearchParams(queryParams).toString();
  console.log(queryString);
  const urlWithParams = `${url}?${queryString}`;
  console.log(urlWithParams);

  try {
    const response = await fetch(urlWithParams);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

//fetchPostsWithParams();

// Create post

// async function createPost(postData) {
//   const API_URL = "http://localhost:3000/posts";
//   try {
//     const response = await fetch(API_URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(postData),
//     });
//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// const newPostData = {
//   id: crypto.randomUUID(),
//   title: "How to use fetch() API for POST?",
//   views: 0,
// };

// const createdPostResult = createPost(newPostData);
// console.log(createdPostResult);

//update a post

async function updatePost(postData) {
  const post_id = "4b9d7b5c-4a6d-4149-988e-7536ed90a518";
  const API_URL = `http://localhost:3000/posts/${post_id}`;

  try {
    const response = await fetch(API_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

const updateData = {
  title: "hello world!",
  views: 10,
};
//updatePost(updateData);

//partial update
async function partialUpdatePost(postData) {
  const postId = "a9057951-215e-4da2-9793-af29719d0e33";
  const API_URL = `http://localhost:3000/posts/${postId}`;

  try {
    const response = await fetch(API_URL, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

const data = {
  views: 50,
};
//partialUpdatePost(data);

//delete post
async function deletePost(postId) {
  const API_URL = `http://localhost:3000/posts/${postId}`;

  try {
    const response = await fetch(API_URL, {
      method: "DELETE",
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
//deletePost("a9057951-215e-4da2-9793-af29719d0e33");

//fetch() - uses Custom-Headers
async function login(userData) {
  const API_URL = "http://localhost:3000/login";

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer secret-token",
        "Custom-Header": "Learn 40 days of JS",
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error("Response not ok", response.status);
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

login({ userName: "Apolo", password: "apo8907" });
login({ userName: "saiful", password: "1234" });
