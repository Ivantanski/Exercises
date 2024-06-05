const BASE_API_URL = "https://rithm-jeopardy.herokuapp.com/api";
const NUM_CATEGORIES = 6;
const NUM_QUESTIONS_PER_CAT = 5;

let categories = [];

$(document).ready(function() {
    setupGame(); 

    $("#restart-btn").click(function() {
        setupGame(); 
    });
});

async function setupGame() {
    try {
        categories = await getCategories(NUM_CATEGORIES);
        const categoryPromises = categories.map(c => getCategory(c.id));
        const categoryData = await Promise.all(categoryPromises);

        const formattedCategories = categoryData.map(cat => ({
            title: cat.title,
            clues: getRandomClues(cat.clues, NUM_QUESTIONS_PER_CAT)
        }));

        fillTable(formattedCategories);
    } catch (error) {
        console.error("Error setting up the game:", error);
    }
}

async function getCategories(count) {
    try {
        const res = await axios.get(`${BASE_API_URL}/categories?count=${count * 10}`);
        const shuffled = _.shuffle(res.data);
        return shuffled.slice(0, count);
    } catch (error) {
        console.error("Error fetching categories:", error);
    }
}

async function getCategory(catId) {
    try {
        const res = await axios.get(`${BASE_API_URL}/category?id=${catId}`);
        return res.data;
    } catch (error) {
        console.error("Error fetching category:", error);
    }
}

function getRandomClues(clues, count) {
    const shuffled = _.shuffle(clues);
    return shuffled.slice(0, count);
}

function fillTable(categories) {
    $("#categories-row").empty();
    $("#questions-body").empty();

    categories.forEach(cat => {
        $("#categories-row").append(`<th>${cat.title}</th>`);
    });

    for (let i = 0; i < NUM_QUESTIONS_PER_CAT; i++) {
        const $row = $("<tr>");
        categories.forEach(cat => {
            const clue = cat.clues[i];
            const $cell = $("<td>").text("?").data("clue", clue);
            $row.append($cell);
        });
        $("#questions-body").append($row);
    }

    $("td").click(handleClick);
}

function handleClick(evt) {
    const $cell = $(evt.target);
    const clue = $cell.data("clue");

    if (!$cell.data("showing")) {
        $cell.text(clue.question);
        $cell.data("showing", "question");
    } else if ($cell.data("showing") === "question") {
        $cell.text(clue.answer);
        $cell.data("showing", "answer");
    }
}
