const change_format = (numberString) => {
    const number = parseFloat(numberString);
    const formattedNumber = number.toLocaleString();
    return formattedNumber;
  };

export default change_format;