// app.js
let userData = {
    xp: 1245,
    streak: 7,
    level: 3,
    completedLessons: [1, 2, 3]
};

function updateUserProgress() {
    // Atualizar barra de XP
    document.querySelector('.xp-badge').textContent = `${userData.xp} XP`;
    
    // Atualizar streak
    document.querySelector('.streak-counter span').textContent = `${userData.streak} dias`;
    
    // Atualizar nível (poderia ter um componente visual para isso)
}

function awardXP(amount) {
    userData.xp += amount;
    updateUserProgress();
    
    // Mostrar animação de recompensa
    const xpPopup = document.createElement('div');
    xpPopup.className = 'xp-popup';
    xpPopup.innerHTML = `+${amount} XP <i class="fas fa-star"></i>`;
    document.body.appendChild(xpPopup);
    
    setTimeout(() => {
        xpPopup.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        xpPopup.remove();
    }, 3000);
}