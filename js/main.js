function handleSubmit(event) {
  event.preventDefault();

  const initialX = document.getElementById('initial-x').value;
  const initialY = document.getElementById('initial-y').value;
  const initialDirection = document
    .getElementById('initial-direction')
    .value.toUpperCase();

  const moves = document.getElementById('moves').value.toUpperCase();
  const result = document.getElementById('result');

  const MovesInArray = Array.from(moves);

  let newX = Number(initialX);
  let newY = Number(initialY);
  let newDirection = initialDirection;

  for (let i = 0; i < MovesInArray.length; i++) {
    if (newDirection === 'N') {
      if (MovesInArray[i] === 'L') {
        newDirection = 'W';
      } else if (MovesInArray[i] === 'M') {
        newY = newY + 1;
      } else if (MovesInArray[i] === 'R') {
        newDirection = 'E';
      }
    } else if (newDirection === 'E') {
      if (MovesInArray[i] === 'L') {
        newDirection = 'N';
      } else if (MovesInArray[i] === 'M') {
        newX = newX + 1;
      } else if (MovesInArray[i] === 'R') {
        newDirection = 'S';
      }
    } else if (newDirection === 'S') {
      if (MovesInArray[i] === 'L') {
        newDirection = 'E';
      } else if (MovesInArray[i] === 'M') {
        newY = newY - 1;
      } else if (MovesInArray[i] === 'R') {
        newDirection = 'W';
      }
    } else if (newDirection === 'W') {
      if (MovesInArray[i] === 'L') {
        newDirection = 'S';
      } else if (MovesInArray[i] === 'M') {
        newX = newX - 1;
      } else if (MovesInArray[i] === 'R') {
        newDirection = 'N';
      }
    }
  }

  result.innerHTML = `${newX} ${newY} ${newDirection}`;
}
