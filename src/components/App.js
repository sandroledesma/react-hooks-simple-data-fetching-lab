// create your App component here
import React from "react";
import { useState, useEffect } from "react";

function App() {
    const [dogImage, setDogImage] = useState(null);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            setDogImage(data.message)
        })
        .catch(error => {
            console.error('Error fetching the dog image:', error);
        });
    }, []);

    return(
        <div>
        {dogImage ? (
            <img src={dogImage} alt="A Random Dog" />
        ) : (
            <p>Loading...</p>
        )}
        </div>
    );
}

export default App;

/* 
Explanation of Your Code
1. Imports:

    You import React, useState, and useEffect from the react library.

2. State Initialization:

    const [dogImage, setDogImage] = useState(null);

    Initializes the state to store the dog image URL. Initially, it is set to null.

3. useEffect Hook:

    useEffect is used to fetch the dog image from the API when the component is first rendered.
    
    The empty dependency array [] ensures that the effect runs only once, similar to componentDidMount.

4. Fetching Data:

    Inside the useEffect hook, a fetch request is made to the API.

    The response is converted to JSON and the image URL is stored in the state using setDogImage.

    A catch block is added to handle any potential errors during the fetch request.

5. Conditional Rendering:

    {dogImage ? (<img src={dogImage} alt="Random dog" />) : (<p>Loading...</p>)}

    This conditional expression checks if dogImage is null.

    If dogImage is null, it means the data is still being fetched, so "Loading..." is displayed.

    Once the image URL is set, the <img> tag is displayed with the dog image.

6. Additional Improvements

    Error Handling: Including the catch block in your fetch request helps handle any potential errors and log them, which can be useful for debugging.
*/