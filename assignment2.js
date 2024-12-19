// **Chapter 4**

// 1. Declare 3 variables in one statement.

let var1, var2, var3;

// 2. Declare 5 legal & 5 illegal variable names.

myVariable
_myVariable
$myVariable
myVariable1
my_variable

// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,______ and ______.For example $my_1stVariable
// c) Variables must begin with a ______, ______ or _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS ___

<h1>Rules for naming JS variables</h1>
<p>Variable names can only contain letters, numbers, dollar signs ($), and underscores (_). For example: <code>$my_1stVariable</code></p>
<p>Variables must begin with a letter, dollar sign ($), or underscore (_). For example: <code>$name</code>, <code>_name</code>, or <code>name</code></p>
<p>Variable names are case sensitive.</p>
p>Variable names should not be JavaScript keywords.</p>


// **Chapter5**

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
<script>
        function addNumbers() {
            let num1 = 5;
            let num2 = 10;
            
            let sum = num1 + num2;
            
            document.write("The sum of " + num1 + " and " + num2 + " is " + sum);
        }
    </script>

// 2. Repeat task1 for subtraction, multiplication, division & modulus.
Subtraction
<script>
        function subtractNumbers() {
            let num1 = 15;
            let num2 = 5;
            let difference = num1 - num2;
            document.write("The difference between " + num1 + " and " + num2 + " is " + difference + "<br>");
        }
    </script>

multiplication
<script>
        function multiplyNumbers() {
            let num1 = 4;
            let num2 = 3;
            let product = num1 * num2;
            document.write("The product of " + num1 + " and " + num2 + " is " + product + "<br>");
        }
    </script>

division
<script>
        function divideNumbers() {
            let num1 = 20;
            let num2 = 4;
            let quotient = num1 / num2;
            document.write("The quotient of " + num1 + " divided by " + num2 + " is " + quotient + "<br>");
        }
    </script>

Modulas
<script>
        function modulusNumbers() {
            let num1 = 29;
            let num2 = 5;
            let remainder = num1 % num2;
            document.write("The remainder of " + num1 + " divided by " + num2 + " is " + remainder + "<br>");
        }
    </script>

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.
<script>
        function performMathOperations() {
            let myVariable;
            
            document.write("Value after variable declaration is: " + myVariable + "<br>");
            
            myVariable = 5;
            
            document.write("Initial value: " + myVariable + "<br>");
            
            myVariable++;
            
            document.write("Value after increment is: " + myVariable + "<br>");
            
            myVariable += 7;
            
            document.write("Value after addition is: " + myVariable + "<br>");
            
            myVariable--;
            
            document.write("Value after decrement is: " + myVariable + "<br>");
            
            let remainder = myVariable % 3;
            
            document.write("The remainder is: " + remainder + "<br>");
        }
    </script>

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
<script>
        function calculateTicketCost() {
            let ticketPrice = 600;
            
            let numberOfTickets = 5;
            let totalCost = ticketPrice * numberOfTickets;
            
            document.write("Cost of one movie ticket is " + ticketPrice + " PKR.<br>");
            document.write("Cost of buying " + numberOfTickets + " tickets to a movie is " + totalCost + " PKR.");
        }
    </script>

// 5. Write a script to display multiplication table of any number in your browser. E.g
<script>
        function displayMultiplicationTable() {
            let number = prompt("Enter a number to display its multiplication table:");
            
            number = Number(number);
            
            if (isNaN(number)) {
                document.write("Please enter a valid number.");
                return;
            }
            
            document.write("<h2>Multiplication Table of " + number + "</h2>");
            document.write(number + " x 1 = " + (number * 1) + "<br>");
            document.write(number + " x 2 = " + (number * 2) + "<br>");
            document.write(number + " x 3 = " + (number * 3) + "<br>");
            document.write(number + " x 4 = " + (number * 4) + "<br>");
            document.write(number + " x 5 = " + (number * 5) + "<br>");
            document.write(number + " x 6 = " + (number * 6) + "<br>");
            document.write(number + " x 7 = " + (number * 7) + "<br>");
            document.write(number + " x 8 = " + (number * 8) + "<br>");
            document.write(number + " x 9 = " + (number * 9) + "<br>");
            document.write(number + " x 10 = " + (number * 10) + "<br>");
        }
    </script>

    // 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
    // a. Store a Celsius temperature into a variable.
    // b. Convert it to Fahrenheit & output “NNoC is NNoF”.
    // c. Now store a Fahrenheit temperature into a variable.
    // d. Convert it to Celsius & output “NNoF is NNoC”.

    <script>
        function convertTemperature() {
            let celsius = 30; 
            
            let fahrenheitFromCelsius = (celsius * 9/5) + 32;
            document.write(celsius + "°C is " + fahrenheitFromCelsius + "°F<br>");
            
            let fahrenheit = 86; 
            
            let celsiusFromFahrenheit = (fahrenheit - 32) * 5/9;
            document.write(fahrenheit + "°F is " + celsiusFromFahrenheit.toFixed(2) + "°C");
        }
    </script>

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser

<script>
        function checkout() {
            let priceItem1 = 500; 
            let priceItem2 = 300; 
            let quantityItem1 = 2; 
            let quantityItem2 = 3; 
            let shippingCharges = 100;
            
            let totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
            
            document.write("<h2>Shopping Cart Receipt</h2>");
            document.write("Price of item 1: " + priceItem1 + " PKR<br>");
            document.write("Quantity of item 1: " + quantityItem1 + "<br>");
            document.write("Price of item 2: " + priceItem2 + " PKR<br>");
            document.write("Quantity of item 2: " + quantityItem2 + "<br>");
            document.write("Shipping charges: " + shippingCharges + " PKR<br>");
            document.write("<strong>Total cost: " + totalCost + " PKR</strong>");
        }
    </script>

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
<script>
        function calculatePercentage() {
            let totalMarks = 500; 
            let marksObtained = 375; 
            
            let percentage = (marksObtained / totalMarks) * 100;
            
            document.write("<h2>Student Marks Percentage</h2>");
            document.write("Total Marks: " + totalMarks + "<br>");
            document.write("Marks Obtained: " + marksObtained + "<br>");
            document.write("Percentage: " + percentage.toFixed(2) + "%");
        }
    </script>

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
<script>
        function convertCurrency() {
            const usdToPkr = 104.80;
            const sarToPkr = 28.00;
            
            let usdAmount = 10;
            let sarAmount = 25;
            
            let totalPkr = (usdAmount * usdToPkr) + (sarAmount * sarToPkr);
            
            document.write("<h2>Currency Conversion</h2>");
            document.write("10 US Dollars and 25 Saudi Riyals in Pakistani Rupees: " + totalPkr.toFixed(2) + " PKR");
        }
    </script>

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

<script>
        function performArithmetic() {
            let number = 10; 
            
            let result = ((number + 5) * 10) / 2;
            
            document.write("<h2>Arithmetic Operations</h2>");
            document.write("Initial number: " + number + "<br>");
            document.write("Result after adding 5, multiplying by 10, and dividing by 2: " + result);
        }
    </script>

