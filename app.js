// List of Somali proverbs
const proverbs = [
    {
        english: "If you haven’t seen people, you haven’t seen trouble.",
        somali: "Aadmi la aragyaaba, dhib la arag.",
        explanation: "Life’s challenges often come from dealing with people and their complexities."
    },
    {
        english: "Misfortune stays close to one who has no guardian.",
        somali: "Baadi nimaan lahayn bay ag joogtaa.",
        explanation: "Without guidance or support, a person is more likely to encounter trouble or go astray."
    },
    {
        english: "Spilled milk is held after it has been spilled.",
        somali: "Caana daatay dabadood la qabay.",
        explanation: "Regretting or trying to fix something after it's too late is pointless."
    }
    // {
    //     english: "The mouth of a wise person is in their heart.",
    //     somali: "Afka qallad waa wadnaha.",
    //     explanation: "A wise person thinks carefully before speaking."
    // },
    // {
    //     english: "A person who travels will see more.",
    //     somali: "Qofka safarka u badan waa ogaysiinaya.",
    //     explanation: "Experiencing different places broadens one's perspective."
    // },
    // {
    //     english: "Patience is the key to relief.",
    //     somali: "Sabarka waa dalxiiska.",
    //     explanation: "Remaining calm and patient helps overcome difficulties."
    // }
];

// Get DOM elements
const proverbsContainer = document.getElementById("proverbs");
const searchInput = document.getElementById("search");
const noResultsMessage = document.getElementById("no-results");

// Function to render proverbs
function renderProverbs(filteredProverbs) {
    // Clear the current content
    proverbsContainer.innerHTML = "";

    // Render each proverb card
    filteredProverbs.forEach((proverb) => {
        const proverbCard = document.createElement("div");
        proverbCard.className = "proverb-card";
        proverbCard.innerHTML = `
            <div class="proverb-english">${proverb.english}</div>
            <div class="proverb-somali">${proverb.somali}</div>
            <div class="proverb-explanation">${proverb.explanation}</div>
        `;
        proverbsContainer.appendChild(proverbCard);
    });

    // Show "No Results" message if no proverbs match
    noResultsMessage.style.display = filteredProverbs.length === 0 ? "block" : "none";
}

// Initial render of all proverbs
renderProverbs(proverbs);

// Add event listener for search
searchInput.addEventListener("input", (event) => {
    const searchTerm = event.target.value.toLowerCase();

    // Filter proverbs by search term
    const filteredProverbs = proverbs.filter(
        (proverb) =>
            proverb.english.toLowerCase().includes(searchTerm) ||
            proverb.somali.toLowerCase().includes(searchTerm) ||
            proverb.explanation.toLowerCase().includes(searchTerm)
    );

    renderProverbs(filteredProverbs);
});
