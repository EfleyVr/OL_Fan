document.querySelectorAll("table.classement").forEach(table => {
    const jsonFile = table.dataset.json;
    const tbody = table.querySelector("tbody");

    fetch(jsonFile)
        .then(res => res.json())
        .then(data => {
            // On trie simplement par position (si ton JSON est déjà correct, pas besoin de recalcul)
            data.sort((a, b) => a.position - b.position);

            data.forEach(team => {
                const tr = document.createElement("tr");
                // Classe spéciale OL pour mettre en valeur
                tr.className = team.club.toLowerCase().includes("olympique lyonnais") ? "ol" : "non-ol";

                tr.innerHTML = `
                    <td>${team.position}</td>
                    <td>${team.club}</td>
                    <td>${team.points}</td>
                    <td>${team.matches}</td>
                    <td>${team.gnp}</td>
                    <td>${team.butPlus}</td>
                    <td>${team.butMoins}</td>
                    <td>${team.diff}</td>
                `;
                tbody.appendChild(tr);
            });
        })
        .catch(err => console.error("Erreur JSON :", err));
});
