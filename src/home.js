function createRestaurantContent() {
    const contentDiv = document.getElementById("content");
    console.log("createRestaurantContent called");

    // Clear existing content to avoid duplicates
    contentDiv.innerHTML = '';
    // Create heading element
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to OpenCHAI: Our unique Indian Tea Shop" // Replace with actual name
    contentDiv.appendChild(heading);

    // Create paragraph element
    const paragraph1 = document.createElement("p");
    paragraph1.textContent = "Welcome to OpenCHAI, where every cup tells a story. Nestled in the heart of the city, OpenCHAI brings you the finest selection of vegetarian Indian teas and coffees, crafted with love and tradition.";
    paragraph1.textContent = paragraph1.textContent;
    contentDiv.appendChild(paragraph1);

    //Create another paragraph with a sub-heading
    const storyHeading = document.createElement("h4");
    storyHeading.textContent = "Our Story";
    storyHeading.textContent = storyHeading.textContent;
    contentDiv.appendChild(storyHeading);

    //Create Paragraph for a brief story 
    const paragraph2 = document.createElement("p");
    paragraph2.textContent = "At OpenCHAI, we believe in the power of a good cup of tea to bring people together. Our journey began with a passion for creating unique and flavorful teas that not only tantalize the taste buds but also warm the soul. Inspired by the rich heritage of Indian tea culture, we set out to create a space where tea enthusiasts and newcomers alike can experience the magic of chai";
    paragraph2.textContent = paragraph2.textContent;
    contentDiv.appendChild(paragraph2);

    //Create another paragraph with a sub-heading
    const visitHeading = document.createElement("h4");
    visitHeading.textContent = "Visit Us";
    contentDiv.appendChild(visitHeading);

    const storyline = document.createElement("p");
    storyline.textContent = "Located conveniently in the heart of Chai Chowk, OpenCHAI is your go-to destination for a refreshing break, a cozy chat, or simply a moment of tranquility amidst the lively ambience of Bandra Bandstand";
    storyline.textContent = storyline.textContent;
    contentDiv.appendChild(storyline);
}

export default createRestaurantContent;
