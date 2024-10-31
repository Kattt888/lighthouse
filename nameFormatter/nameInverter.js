const nameInverter = function (name) {
  //checking for undefined 
  if (name === undefined) {
    throw new Error('Name cannot be undefined.'); //throwing error message
  }
  
  if (name === "") {
    return "";
  }

  // trimming any spaces manually before or after the names
  let trimmedName = "";
  let inWord = false;
  for (let i = 0; i < name.length; i++) {
    if (name[i] !== ' ' || inWord) {
      if (name[i] !== ' ') {
        inWord = true;
        trimmedName += name[i];
      } else if (i < name.length - 1 && name[i + 1] !== ' ') {
        trimmedName += ' '; // adding a single space between words
      }
    }
  }
  trimmedName = trimmedName.trim(); // removing extra spaces at the end if added

  // checking if the name contains an honorific via looping through an array
  const honorifics = ["Dr.", "Mr.", "Mrs.", "Ms."];
  let honorific = "";
  let nameWithoutHonorific = trimmedName;

  for (let i = 0; i < honorifics.length; i++) {
    if (trimmedName.startsWith(honorifics[i])) {
      honorific = honorifics[i];
      nameWithoutHonorific = trimmedName.slice(honorific.length).trim(); // Remove honorific from the name
      break;
    }
  }

  // Dealing with a case where only an honorific is given - should return empty 
  if (nameWithoutHonorific === "") {
    return honorific === "" ? "" : "";
  }

  // Splitting the name into first and last parts
  const nameParts = nameWithoutHonorific.split(' ');

  if (nameParts.length === 1) {
    return honorific === "" ? nameParts[0] : `${honorific} ${nameParts[0]}`;
  }

  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  return honorific === "" ? `${lastName}, ${firstName}` : `${honorific} ${lastName}, ${firstName}`;
};

module.exports = nameInverter;
