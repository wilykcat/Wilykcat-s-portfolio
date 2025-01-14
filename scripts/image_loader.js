document.addEventListener("DOMContentLoaded", async () => {
    const imageContainer = document.getElementById("image-grid");
    const previewModal = document.getElementById("fullscreen-preview");
    const previewImage = document.getElementById("preview-image");
    const closePreviewButton = document.getElementById("close-preview");

    var x = 0;
    // Load images dynamically (mock API call or local logic)
    const images = [
        { src: "cheetah.jpg", description: "cheetah with green hair drawn on computer (not ai)" },
        { src: "dark elf.jpg", description: "two female dark elves exploring a desert" },
        { src: "original.jpg", description: "cartoon render of various characters" },
        { src: "troll.jpg", description: "unfinished render of a female troll art" },
        { src: "desert runner.jpg", description: " a native anime girl running through the desert holding a spear (not ai)" },
        { src: "dishu.jpg", description: " imaginary cartoon female lynx talking to you" },
        { src: "Dungeon Deserter render2.jpg", description: " anime girl with pink curly afro non-ai art" },
        { src: "sphynx.jpg", description: "a female khajiit with all of fur shaved except for her face" },
        { src: "panther.jpg", description: " a female anime panther girl wearing pink clothes" }
    ];
    images.forEach((image) => {
        console.log
        const imgWrapper = document.createElement("div");
        imgWrapper.classList.add("image-wrapper");

        const imgElement = document.createElement("img");
        imgElement.src = `pics/${image.src}`;
        imgElement.alt = image.description;
        imgElement.classList.add("art-image");

        const description = document.createElement("div");
        description.classList.add("description");
        description.textContent = image.description;

        imgElement.addEventListener("click", () => {
            previewImage.src =imgElement.src;
            previewModal.classList.remove("hidden");    
    });

        imgWrapper.appendChild(imgElement);
        imgWrapper.appendChild(description);
        imageContainer.appendChild(imgWrapper);
    });


    // Dynamically add images to the grid container
   

    // Close the preview when the close button is clicked
    closePreviewButton.addEventListener("click", () => {
        console.log("Close button clicked");
        previewModal.classList.add("hidden");
        previewImage.src = ""; // Clear image source
    });

    // Close the preview when clicking outside the image
    previewModal.addEventListener("click", (event) => {
        if (event.target === previewModal) {
            console.log("Close button clicked");
            previewModal.classList.add("hidden");
            previewImage.src = ""; // Clear image source
        }
    });
});