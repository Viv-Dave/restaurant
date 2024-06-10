function createAboutContent() {
    const contentDiv = document.getElementById("content");
    console.log("createAboutContent called");

    // Clear existing content to avoid duplicates
    contentDiv.innerHTML = '';

    // Create heading element
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to OpenCHAI: Your authentic Indian Tea Haven";
    contentDiv.appendChild(heading);

    // Create paragraph element
    const paragraph1 = document.createElement("p");
    paragraph1.textContent = "At OpenCHAI, we believe in offering a unique and authentic tea experience that celebrates the rich heritage of Indian chai. Nestled in the heart of the city, our tea shop is a sanctuary for tea lovers and those seeking a serene escape from the hustle and bustle.";
    contentDiv.appendChild(paragraph1);

    const paragraph2 = document.createElement("p");
    paragraph2.textContent = "Our menu features a wide array of vegetarian delights, meticulously crafted to complement our signature teas. Each cup of chai is brewed to perfection, using the finest spices and ingredients sourced directly from India. Whether you're a chai connoisseur or a curious newcomer, our friendly staff is here to guide you through a memorable tea journey.";
    contentDiv.appendChild(paragraph2);

    const paragraph3 = document.createElement("p");
    paragraph3.textContent = "Join us at OpenCHAI to unwind, relax, and savor the flavors of India in every sip. From our cozy ambiance to our carefully curated selection of teas and snacks, we are dedicated to providing an exceptional experience that warms your heart and soul.";
    contentDiv.appendChild(paragraph3);

    //Adding a location
    const location = document.createElement("h5");
    location.textContent = "Location: Bandra Bandstand (Next to Salman Khan's Shirtless Balcony)";

    //Adding Links
    const facebook = document.createElement("a");
    facebook.textContent = "Facebook";
    facebook.href = "Facebook"; // Replace with actual menu page URL
    contentDiv.appendChild(facebook);

    const twitter = document.createElement("a");
    twitter.textContent = "Twitter";
    twitter.href = "menu.html"; // Replace with actual menu page URL
    contentDiv.appendChild(twitter);
    const Instagram = document.createElement("a");
    Instagram.textContent = "Instagram";
    Instagram.href = "menu.html"; // Replace with actual menu page URL
    contentDiv.appendChild(Instagram);

}

export default createAboutContent