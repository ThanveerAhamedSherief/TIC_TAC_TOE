const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const boxs = document.querySelectorAll('.box');
  const resetButton = document.querySelector('#reset');
  const winner = document.querySelector('.hide');
  const msgContainer = document.querySelector('.msg-container');
  const newBtn = document.querySelector('#new-btn')

  let turnO = true;
  const enableBoxes = () => {
    turnO = true;
    boxs.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
        msgContainer.classList.add('hide')
    })
  }
  newBtn.addEventListener('click', enableBoxes);
  resetButton.addEventListener('click', enableBoxes)
  boxs.forEach((box) => {
    box.addEventListener('click', () =>{
        if(turnO) {
            box.innerText = 'O'
            turnO = false
        } else {
            box.innerText = 'X';
            turnO = true
        }
        box.disabled = true;
        findWinner(box)
    })
  });
  const disableBoxes = () => {

    for(let box of boxs) {
        box.disabled = true;
    }
  }
  const findWinner = () => {
        winPatterns.forEach((b) => {
            let pos1 = boxs[b[0]].innerText;
            let pos2 = boxs[b[1]].innerText;
            let pos3 = boxs[b[2]].innerText;
            if(pos1 != '' && pos2 != '' && pos3 != '') {
                if(pos1 === pos2 && pos2 === pos3) {
                    console.log("winner ", winner);
                    disableBoxes();
                    winner.children[0].innerText = `Winner is ${pos1}`
                    winner.classList.remove('hide');

                }
            }
        });
  };