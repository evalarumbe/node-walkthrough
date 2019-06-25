const removeWhitespace = input => {
    // trim space off the ends
    let result = input.trim();

    // collapse duplicate spaces
    result = result.replace(/\s+/g, ' ');

    console.log(result);
}

const capitalizeInitial = input => {
    // for tomorrow :)
    console.log(input);
}

capitalizeInitial("here's a test");