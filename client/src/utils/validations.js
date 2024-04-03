const validations = (inputs) => {
    const errors = {};
    const onlyTextRegex = /^[a-zA-Z\s]+$/;
    const onlyNumbersAndDashes = /^[0-9-]+$/;
    const dobFormatRegex = /^\d{4}-\d{2}-\d{2}$/;
    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    const imageExtensionRegex = /\.(jpg|jpeg|png)$/;

    //Name validations
    if (!inputs.driver_name) {
        errors.driver_name = "Name is required."
    } else if (!onlyTextRegex.test(inputs.driver_name)) {
        errors.driver_name = "Please, introduce a valid name."
    } else if (inputs.driver_name.length === 1) {
        errors.driver_name = "A name should be longer than that."
    } else if (inputs.driver_name.length > 25) {
        errors.driver_name = "That name is too long and you know it."
    }

    //Lastname validations
    if (!inputs.lastname) {
        errors.lastname = "Your driver needs a lastname."
    } else if (!onlyTextRegex.test(inputs.lastname)) {
        errors.lastname = "Please, introduce a valid lastname."
    } else if (inputs.lastname.length === 1) {
        errors.lastname = "Please introduce a longer lastname."
    } else if (inputs.lastname.length > 20) {
        errors.lastname = "Lastname is too long. Keep it short and sweet."
    }    

    //Nationality validations
    if (!inputs.nationality) {
        errors.nationality = "Your driver needs  a nationality."
    } else if (inputs.nationality.length < 5) {
        errors.nationality = "Nationality is too short."
    }

    //Birthdate validations
    if (inputs.dob.length === 0) {
        errors.dob = "Please introduce your driver's date of birth. Format: YYYY-MM-DD"
    } else if (!onlyNumbersAndDashes.test(inputs.dob)) {
        errors.dob = "Only numbers and dashes, please."
    } else if (!dobFormatRegex.test(inputs.dob) || inputs.dob.length !== 10) {
        errors.dob = "Invalid format."
    } else {
        const [year, month, day] = inputs.dob.split('-').map(Number);

        if (month < 1 || month > 12) {
            errors.dob = "Please enter a valid month.";
        } else {
            const totalDays = new Date(year, month, 0).getDate();
            if (day < 1 || day > totalDays) {
                errors.dob = `Please enter a valid day.`;
            }
        }
    }

    //Image validations
    if (!inputs.image) {
        errors.image = "Please, include a picture for your driver."
    } else if (!urlRegex.test(inputs.image)) {
        errors.image = "Please, insert a valid URL"
    } else if (!imageExtensionRegex.test(inputs.image)) {
        errors.image = "Only .jpg, .jpeg and .png are allowed."
    }

    //Description validations
    if (!inputs.description) {
        errors.description = "Please, describe your driver briefly."
    } else if(inputs.description.length < 15) {
        errors.description = "That's not enough."
    } else if (inputs.description.length > 2500) {
        errors.description = "Keep your description under 500 characters."
    }

    //Teams validations
    if (inputs.teams.length === 0) {
        errors.teams = "Select at least one team."
    } else if (inputs.teams.length > 16) {
        errors.teams = "Those are way too many teams for one single driver"
    }

    return errors;
}

export default validations;