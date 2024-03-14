const addPetLink = document.getElementById("addPetLink");
console.log(addPetLink);

addPetLink.addEventListener("click", openTextArea);

function openTextArea(event) {
  // let target = event.target;
  const textArea = document.querySelector(".newPetProfile");
  console.log(textArea);

  textArea.style.display = "block";
}

const newPetProfileButton = document.querySelector(
  ".createNewPetProfileButton"
);
console.log(newPetProfileButton);

newPetProfileButton.addEventListener("click", createNewPetProfile);

function createNewPetProfile(event) {
  const textArea = document.querySelector(".petName").value;
  console.log(textArea);

  const petList = document.querySelector(".petList");
  console.log(petList);

  const newPetProfileDiv = document.createElement("div");
  newPetProfileDiv.classList.add("card");
  const newPetProfileName = document.createElement("h1");
  newPetProfileName.textContent = textArea;

  newPetProfileDiv.appendChild(newPetProfileName);

  petList.appendChild(newPetProfileDiv);
}
