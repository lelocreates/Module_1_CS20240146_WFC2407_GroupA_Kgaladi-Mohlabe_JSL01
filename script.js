function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
        /*petID needs to take "pet_" followed by a variety of numbers and letters 
        - used a regular expression for this*/
    let petID = /^pet_\d+[a-zA-Z]+$/; 
//used .test to check where the input contained the pattern specified
    if (petID.test(input)) {
        result = 'Valid Syntax 🟢';
    } else {
        result = 'Invalid Syntax 🔴';
    }

    document.getElementById('result').innerText = result;
}


