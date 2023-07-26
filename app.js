console.log("Let's get this party started!");

document.addEventListener('DOMContentLoaded', function() {
  // Get a reference to the form and the button for removing GIFs
  const form = document.querySelector('#myForm'); // Check the ID here
  const removeButton = document.getElementById('remove-gifs-button');

  // Add event listener to the form to handle GIF search submission
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const query = form.elements['search'].value.trim(); // Get the user's search query
    if (!query) return; // Do nothing if the search query is empty

    searchGif(query); // Call the function to fetch and display the GIF
    form.reset(); // Clear the search input after submission
  });

  // Add event listener to the remove button to clear GIFs
  removeButton.addEventListener('click', function() {
    removeGifs();
  });
});

// ... (previous code)

// ... (previous code)

// Function to fetch and display a GIF based on user's search query
function searchGif(query) {
    const apiKey = 'Mco7of1eQG7CEeYFO6oEpmipOWzRmVrL'; // Replace with your Giphy API key
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=1`;
  
    // Make an AJAX request using Axios
    axios.get(apiUrl)
      .then(response => {
        const gifData = response.data.data[0]; // Extract the first GIF from the response
  
        if (gifData) {
          const gifUrl = gifData.images.fixed_height.url; // Get the URL of the GIF
          appendGif(gifUrl); // Call the function to append the GIF to the page
        } else {
          console.log('No GIFs found for the given query.');
        }
      })
      .catch(error => {
        console.error('Error fetching GIF:', error);
      });
  }
  
  // ... (remaining code)
  
  
// Function to append the GIF to the page
function appendGif(gifUrl) {
  const gifContainer = document.getElementById('gif-container');

  // Create an img element and set its src attribute to the GIF URL
  const img = document.createElement('img');
  img.src = gifUrl;

  // Append the img element to the container
  gifContainer.appendChild(img);
}

// Function to remove all GIFs from the page
function removeGifs() {
  const gifContainer = document.getElementById('gif-container');
  gifContainer.innerHTML = ''; // Clear the container by setting its HTML content to an empty string
}
