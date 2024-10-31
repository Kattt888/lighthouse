const needle = require('needle');

// Example with a simpler website
needle.get('http://example.edu', (error, response, body) => {
  console.log('Requesting http://example.edu:');
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
});

// Test for a non-existent domain
needle.get('http://nonexistentdomain12345.com', (error, response, body) => {
  console.log('\nRequesting http://nonexistentdomain12345.com:');
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
});

// Test for a valid domain but a missing page
needle.get('https://www.google.com/fdsafsafsa.html', (error, response, body) => {
  console.log('\nRequesting https://www.google.com/fdsafsafsa.html:');
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);



});
