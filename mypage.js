function calculateBMIAndSuggestMeal() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    var bmi = weight / (height * height);
    var bmiResult = document.getElementById('bmiResult');
    var mealSuggestion = document.getElementById('mealSuggestion');
    

    if (isNaN(bmi)) {
        bmiResult.innerText = 'Please enter valid weight and height.';
        mealSuggestion.style.display = 'none';
        
    } else {
        bmiResult.innerText = 'Your BMI is: ' + bmi.toFixed(2);
        if (bmi < 18.5) {
            bmiResult.innerText += ' (Underweight)';
            mealSuggestion.innerHTML = '<p>Suggested Meal Plan: Focus on high-calorie, nutrient-dense foods.</p>';
            showDietTableunderweight();

        } else if (bmi >= 18.5 && bmi < 24.9) {
            bmiResult.innerText += ' (Normal)';
            mealSuggestion.innerHTML = '<p>Suggested Meal Plan: Maintain a balanced diet with a variety of foods.</p>';
            showDietTablenormalweight();
        } else if (bmi >= 24.9 && bmi < 29.9) {
            bmiResult.innerText += ' (Overweight)';
            mealSuggestion.innerHTML = '<p>Suggested Meal Plan: Reduce portion sizes and increase physical activity.</p>';
        } else if (bmi >= 29.9) {
            bmiResult.innerText += ' (Obese)';
            mealSuggestion.innerHTML = '<p>Suggested Meal Plan: Follow a low-calorie, high-protein diet and exercise regularly.</p>';
            showDietTableobeseweight();
        }
        mealSuggestion.style.display = 'block';
    }
}

function showDietTableunderweight() {
    var dietTable = document.getElementById('dietTable');
    dietTable.style.display = 'block';

    // Example data for the diet chart
    
    var dietData = [
        { meal: 'Pre workout', food: 'Bananas &  Almonds', calories:     300 },
        { meal: 'Breakfast', food: 'Greek Yoghurt & Whole grain cereal with milk', calories:     300 },
        { meal: 'Lunch', food: 'Brown Rice/Chicken breast', calories:      500 }
        ,{ meal: 'Evening snacks', food: 'Paneer/Sliced Cucumber', calories:      200 }
        ,{ meal: 'Dinner', food: 'Baked Salmon/Sweet Potato', calories:     500 }

        // Add more meal data as needed
    ];
    document.getElementById('dietTable').style.border = 'solid 5px black';

    // Populate the diet chart with data
    var tbody = dietTable.getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; // Clear existing rows
    dietData.forEach(function(meal) {
        var row = document.createElement('tr');
        var mealCell = document.createElement('td');
        var foodCell = document.createElement('td');
        var caloriesCell = document.createElement('td');
        mealCell.innerText = meal.meal;
        foodCell.innerText = meal.food;
        caloriesCell.innerText = meal.calories;
        row.appendChild(mealCell);
        row.appendChild(foodCell);
        row.appendChild(caloriesCell);
        tbody.appendChild(row);




        
    });
}


function showDietTablenormalweight() {
    var dietTable = document.getElementById('dietTable');
    dietTable.style.display = 'block';

    // Example data for the diet chart
    
    var dietData = [
        { meal: 'Pre workout', food: 'Flax Seed Smoothie', calories: 300 },
        { meal: 'Breakfast', food: 'Avocado toast / Poached Egg', calories: 450 },
        { meal: 'Lunch', food: 'Buddha bowl with Tahini sauce', calories: 400 }
        ,{ meal: 'Evening snacks', food: 'Greek Yogurt/Dark Chocolate', calories: 200 }
        ,{ meal: 'Dinner', food: 'Stir-fred tofu/Lemon-herb chicken breast', calories: 400 }

        // Add more meal data as needed
    ];

    // Populate the diet chart with data
    var tbody = dietTable.getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; // Clear existing rows
    dietData.forEach(function(meal) {
        var row = document.createElement('tr');
        var mealCell = document.createElement('td');
        var foodCell = document.createElement('td');
        var caloriesCell = document.createElement('td');
        mealCell.innerText = meal.meal;
        foodCell.innerText = meal.food;
        caloriesCell.innerText = meal.calories;
        row.appendChild(mealCell);
        row.appendChild(foodCell);
        row.appendChild(caloriesCell);
        tbody.appendChild(row);




        
    });
}


function showDietTableobeseweight() {
    var dietTable = document.getElementById('dietTable');
    dietTable.style.display = 'block';

    // Example data for the diet chart
    
    var dietData = [
        { meal: 'Pre workout', food: 'Coffee with Blueberries', calories: 80 },
        { meal: 'Breakfast', food: 'Oatmeal/Sugar free Yoghurt', calories: 60 },
        { meal: 'Lunch', food: 'Lentil soup with steamed veggies', calories: 90 }
        ,{ meal: 'Evening snacks', food: 'Carrot and Cucumber sticks with hummus ', calories: 190 }
        ,{ meal: 'Dinner', food: 'Sprouts and baked fish / Tofu and veggies', calories: 400 }

        // Add more meal data as needed
    ];

    // Populate the diet chart with data
    var tbody = dietTable.getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; // Clear existing rows
    dietData.forEach(function(meal) {
        var row = document.createElement('tr');
        var mealCell = document.createElement('td');
        var foodCell = document.createElement('td');
        var caloriesCell = document.createElement('td');
        mealCell.innerText = meal.meal;
        foodCell.innerText = meal.food;
        caloriesCell.innerText = meal.calories;
        row.appendChild(mealCell);
        row.appendChild(foodCell);
        row.appendChild(caloriesCell);
        tbody.appendChild(row);




        
    });
}
function menu() {
    let sidebar = document.getElementById("side-bar");
    sidebar.classList.add("active");
    sidebar.style.left = '0';
}

function clsemenu() {
    let sidebar = document.getElementById("side-bar");
    sidebar.classList.remove("active");
    sidebar.style.left = '-300px';
}