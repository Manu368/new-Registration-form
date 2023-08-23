const addTeammateButton = document.getElementById('addTeammate');
const teammateContainer = document.querySelector('.teammate-container');

addTeammateButton.addEventListener('click', () => {
  const newTeammateInput = document.createElement('div');
  newTeammateInput.classList.add('teammate-input');
  newTeammateInput.innerHTML = `
    <input type="text" name="teammate[]" placeholder="Teammate's Name" class="input02">
    <button class="remove-icon button03">x</button>
  `;
  teammateContainer.insertBefore(newTeammateInput, addTeammateButton);

  newTeammateInput.querySelector('.remove-icon').addEventListener('click', () => {
    teammateContainer.removeChild(newTeammateInput);
  });
});