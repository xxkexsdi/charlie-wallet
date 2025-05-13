document.querySelectorAll('.cta').forEach(button => {
    button.addEventListener('click', () => {
      alert("Redirecting to Sign-Up...");
    });
  });
  

  function purchaseExpressPass() {
    const price = 299;
    const userBalance = 1000; // Example user balance
  
    if (userBalance >= price) {
      alert(`Successfully purchased Express Supply Pass for ₱${price}.`);
    } else {
      alert('Insufficient balance.');
    }
  }

  function openModal() {
    document.getElementById('loginModal').style.display = 'flex';
  }
  
  function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
  }
  
  function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
  
    // Simulated login check
    if (username === 'admin' && password === '1234') {
      document.getElementById('welcomeMsg').innerText = `Welcome, ${username}!`;
      document.getElementById('authBtn').style.display = 'none';
      closeModal();
    } else {
      alert('Incorrect username or password.');
    }
  }
  

  function purchaseRobux(amount) {
    const prices = {
      80: 49,
      400: 249,
      800: 499
    };
  
    const price = prices[amount];
    const userBalance = 1000;  // Simulated balance
  
    if (userBalance >= price) {
      alert(`Successfully purchased ${amount} Robux for ₱${price}.`);
    } else {
      alert('Insufficient balance.');
    }
  }

  
  function purchaseExpressPass() {
    const price = 299;
    const userBalance = 1000;
  
    if (userBalance >= price) {
      alert(`Successfully purchased Express Supply Pass for ₱${price}.`);
    } else {
      alert('Insufficient balance.');
    }
  }
  

  function purchaseDragonClawHook() {
    const price = 599;
    const userBalance = 1000;
  
    if (userBalance >= price) {
      alert(`Successfully purchased Dragon Claw Hook for ₱${price}.`);
    } else {
      alert('Insufficient balance.');
    }
  }
  