function isValidUrl(url) {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url);
  }

  console.log(isValidUrl("https://www.google.com")); 
console.log(isValidUrl("ftp://ftp.example.com")); 
console.log(isValidUrl("invalid url")); 
