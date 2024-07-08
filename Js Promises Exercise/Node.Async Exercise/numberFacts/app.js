document.getElementById('get-facts').addEventListener('click', async () => {
    const baseURL = 'http://numbersapi.com';
    
    // Generate 10 random numbers
    const randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1).join(',');
  
    try {
      const response = await fetch(`${baseURL}/${randomNumbers}?json`);
      const data = await response.json();
      const factsContainer = document.getElementById('facts-container');
      factsContainer.innerHTML = '';  // Clear previous facts
  
      Object.values(data).forEach(fact => {
        const factElement = document.createElement('div');
        factElement.className = 'fact';
        factElement.innerText = fact;
        factsContainer.appendChild(factElement);
      });
    } catch (error) {
      console.log("Error:", error);
    }
  });
  
