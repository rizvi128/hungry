


function category() {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')

        .then(res => res.json())
        .then(data => categoryList(data.categories))
}
category()

const categoryList = categories => {
    const categoryDiv = document.getElementById('category');
    categories.forEach(category => {
        console.log(category);
        const divOfCategory = document.createElement('div');
        divOfCategory.className = 'categoryDiv'
        divOfCategory.innerHTML = `
        <img src ='${category.strCategoryThumb}'><p id="${category.strCategory}" >${category.strCategory}</p>`
        categoryDiv.appendChild(divOfCategory);

    })
}







function takeText() {
    const inputText = document.getElementById('inputText').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`)

        .then(res => res.json())
        .then(data => mealList(data.meals))
}

const mealList = meals => {
    const div = document.getElementById('resultDiv');
    const categoryDiv = document.getElementById('category');
    categoryDiv.style.display = "none";
    meals.forEach(meal => {
        console.log(meal);
        const divOfMeal = document.createElement('div');
        divOfMeal.className = 'mealDiv'
        divOfMeal.innerHTML = `
        <img src ='${meal.strMealThumb}'>
        <p>${meal.strMeal}</p>
        <button onclick="moreAboutMeal('${meal.strMeal}',${meal.strCategory})" id="DetailBtn">Details</button>`
        div.appendChild(divOfMeal);

    });
}
const moreAboutMeal = (name, description) =>{
    const resultDiv = document.getElementById('resultDiv');
    resultDiv.style.display ="none";
    const aboutDiv = document.getElementById('aboutDiv');
    aboutDiv.innerHTML = `<h1>'hello'</h1>
    <p>'${description}'</p>`
     
}
































    // for (let i = 0; i < mealList.length; i++) {
    //     const meal = mealList[i];
    //     const div = document.getElementById('resultDiv');
    //     console.log(meal);














    //         const mealDiv = document.createElement('div')

    //         mealDiv.innerHTML = `<h1>${meal.strMeal}</h1>`
    //         console.log(mealDiv);
    //         div.appendChild(mealDiv);

    //     }

    // }

