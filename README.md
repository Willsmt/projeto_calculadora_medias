
```markdown
# 📊 Calculadora de Médias

Uma aplicação simples em **HTML, CSS e JavaScript** para calcular médias de atividades escolares.  
O usuário insere o nome da atividade e a nota correspondente, e o sistema gera uma tabela com os resultados, indicando se cada atividade foi aprovada ou reprovada.  
Ao final, é exibida a **média geral** e o status final do aluno.

---

## 🚀 Funcionalidades

- Inserir **nome da atividade** e **nota** (de 0 a 10).
- Evita duplicidade de atividades já cadastradas.
- Exibe automaticamente:
  - Nota da atividade.
  - Status de aprovação (✅ aprovado ou ❌ reprovado).
- Calcula a **média final** de todas as notas inseridas.
- Mostra se o aluno foi **aprovado ou reprovado** com base na média final.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** → Estrutura da aplicação.
- **CSS3** → Estilização responsiva e moderna.
- **JavaScript (ES6+)** → Lógica de cálculo e manipulação da DOM.
- **Google Fonts (Roboto)** → Tipografia.

---

## 📂 Estrutura de Arquivos

```
📁 calculadora-medias
 ┣ 📂 image
 ┃ ┣ logo.png
 ┃ ┣ aprovado.png
 ┃ ┗ reprovado.png
 ┣ 📄 index.html
 ┣ 📄 style.css
 ┗ 📄 script.js
```

---

## ⚙️ Como Usar

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/calculadora-medias.git
   ```
2. Abra o arquivo `index.html` em qualquer navegador.
3. Insira o nome da atividade e a nota.
4. Clique em **Adicionar +**.
5. Veja a tabela sendo atualizada automaticamente com os resultados.
6. A média final será exibida no rodapé da tabela.

---

## 📸 Demonstração

- **Formulário de entrada**: Nome da atividade + Nota.
- **Tabela dinâmica**: Lista todas as atividades com status de aprovação.
- **Rodapé da tabela**: Exibe a média final e resultado geral.

---

## 📌 Observações

- O sistema solicita a **nota mínima** para aprovação logo ao iniciar (via `prompt`).
- A média final considera todas as notas inseridas.
- O status final é definido como:
  - **Aprovado** → média ≥ Nota Mímina inserida.
  - **Reprovado** → média < Nota Mímina inserida.

---

## 👨‍💻 Autor

Projeto desenvolvido por **Willians** ✨  
```
