const removeWhitespace = input => {
    // trim space off the ends
    let result = input.trim();

    // collapse duplicate spaces
    result = result.replace(/\s+/g, ' ');

    console.log(result);
}