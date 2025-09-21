fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Calculate average score, rounded down to whole number
    const totalScore = data.reduce((sum, item) => sum + item.score, 0);
    const average = Math.floor(totalScore / data.length);

    // Insert average into .total h1
    const totalElem = document.querySelector('.total');
    totalElem.textContent = ''; // Clear any existing content
    const avgSpan = document.createElement('span');
    avgSpan.className = 'average-score';
    avgSpan.textContent = average;
    totalElem.appendChild(avgSpan);

    // Add "of 100" after the average score
    const of100Span = document.createElement('span');
    of100Span.textContent = 'of 100';
    totalElem.appendChild(of100Span);
    
    // Render summary items
    const summaryDiv = document.querySelector('.summary');
    summaryDiv.innerHTML = '<h2>Summary</h2>' +
      data.map(item => `
        <div class="summary-item">
          <div>
            <img src="${item.icon}" alt="${item.category} icon" />
            <span>${item.category}</span>
          </div>
          <div><span class="score">${item.score}</span> / 100</div>
        </div>
      `).join('') +
      '<button>Continue</button>';
  });