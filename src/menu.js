function createMenu() {
    console.log("createMenuCalled");
    const contentDiv = document.getElementById("content")
    contentDiv.innerHTML = ''; 
  const teaSection = document.createElement("section");
  teaSection.classList.add("tea-section"); 
  contentDiv.appendChild(teaSection);

  const teaList = document.createElement("ul");
  teaSection.appendChild(teaList);

  const teaItems = [
    { name: "Masala Chai", description: "A traditional Indian tea made with a blend of spices, including cardamom, cinnamon, ginger, and cloves, brewed with black tea and milk." }, // Add descriptions later
    { name: "Cardamom Chai", description: "A fragrant tea made with crushed cardamom pods, brewed with black tea and milk, offering a unique and aromatic flavor." },
    { name: "Ginger Chai", description: "A spicy and warming tea made with fresh ginger slices, brewed with black tea and milk, perfect for a soothing experience." },
    { name: "Tulsi Chai", description: "A herbal tea made with holy basil (tulsi) leaves, brewed with black tea and milk, known for its calming and health benefits." },
    { name: "Elaichi Chai", description: "A sweet and aromatic tea made with cardamom powder, brewed with black tea and milk, offering a delightful flavor." },
    { name: "Kesar Chai", description: "A luxurious tea made with saffron strands, brewed with black tea and milk, giving a rich and exotic taste." },
    { name: "Adrak Chai", description: "A robust tea made with crushed ginger, brewed with black tea and milk, providing a spicy kick and soothing properties." },
    { name: "Chai Latte", description: "A creamy and frothy tea made with a blend of spices, black tea, and steamed milk, perfect for a modern twist on traditional chai." },
  ];

  for (const teaItem of teaItems) {
    const listItem = document.createElement("li");
    listItem.textContent = teaItem.name;
    teaList.appendChild(listItem);

    const descriptionParagraph = document.createElement("p");
descriptionParagraph.classList.add("tea-description"); // Optional class for styling
descriptionParagraph.textContent = teaItem.description;
teaList.appendChild(descriptionParagraph);
  }
}
export default createMenu;