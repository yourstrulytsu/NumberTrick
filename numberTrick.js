    // Abraham Sayon
        // 2/2/2025
        
        // Prompt 
        let userNumber = parseInt(prompt("Choose any whole number:"));
        
        // The secret to getting 7 always
        let step1 = userNumber + 9; // Add 9
        let step2 = step1 * 2; // Multiply by 2
        let step3 = step2 - 4; // Subtract 4
        let step4 = step3 / 2; // Divide by 2
        let finalResult = step4 - userNumber; // Subtract original number
        
        // Show the final result
        alert("Your final number is: " + finalResult);
        
        // Out put of how it works for user
        document.write("<h2>Magic Trick Steps</h2>");
        document.write("<ul>");
        document.write("<li>You chose: " + userNumber + "</li>");
        document.write("<li>Added 9: " + step1 + "</li>");
        document.write("<li>Multiplied by 2: " + step2 + "</li>");
        document.write("<li>Subtracted 4: " + step3 + "</li>");
        document.write("<li>Divided by 2: " + step4 + "</li>");
        document.write("<li>Subtracted your original number: " + finalResult + "</li>");
        document.write("</ul>");
        
        // Display the final
        document.write("<h1>Lucky</h1>");
        document.write("<h2>" + finalResult + "</h2>");