// app.js
document.addEventListener('DOMContentLoaded', function() {
    // Simular carregamento de uma lição
    loadLesson(1);
});

function loadLesson(lessonId) {
    const lessonContainer = document.getElementById('lesson-container');
    
    // Simulação de dados da lição
    const lessonData = {
        id: 1,
        title: "Introdução a SQL",
        description: "Aprenda os comandos básicos de SELECT",
        xp: 20,
        questions: [
            {
                type: "multiple_choice",
                question: "Qual comando SQL é usado para recuperar dados de um banco de dados?",
                options: ["GET", "SELECT", "RETRIEVE", "QUERY"],
                correct: 1,
                explanation: "O comando SELECT é usado para recuperar dados de um banco de dados."
            },
            {
                type: "code",
                question: "Complete a consulta SQL para selecionar todos os campos da tabela 'clientes'",
                code: "______ FROM clientes;",
                answer: "SELECT *",
                explanation: "SELECT * recupera todos os campos da tabela especificada."
            }
        ]
    };
    
    // Construir HTML da lição
    let lessonHTML = `
        <div class="lesson-header">
            <h1>${lessonData.title}</h1>
            <p>${lessonData.description}</p>
            <div class="xp-reward">
                <i class="fas fa-star"></i>
                <span>Ganhe ${lessonData.xp} XP</span>
            </div>
        </div>
        <div class="lesson-content">
            <div class="lesson-card active" id="question-1">
                ${buildQuestionHTML(lessonData.questions[0])}
            </div>
        </div>
        <div class="lesson-actions">
            <button class="btn btn-primary" onclick="checkAnswer(1)">Verificar</button>
        </div>
    `;
    
    lessonContainer.innerHTML = lessonHTML;
}

function buildQuestionHTML(question) {
    if (question.type === "multiple_choice") {
        let optionsHTML = '';
        question.options.forEach((option, index) => {
            optionsHTML += `
                <div class="option" onclick="selectOption(this, ${index})">
                    <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                    <div class="option-text">${option}</div>
                </div>
            `;
        });
        
        return `
            <div class="question-text">${question.question}</div>
            <div class="options-container">${optionsHTML}</div>
        `;
    } else if (question.type === "code") {
        return `
            <div class="question-text">${question.question}</div>
            <div class="code-editor">
                <pre><code>${question.code}</code></pre>
                <input type="text" class="code-input" placeholder="Digite o código aqui...">
            </div>
        `;
    }
}