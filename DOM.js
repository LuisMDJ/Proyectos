function addComment() {
    let commentText = document.getElementById("commentInput").value.trim();

    if (commentText === "") {
        alert("Por favor, escribe un comentario antes de enviarlo.");
        return;
    }

    if (commentText.length > 66) {
        commentText = commentText.substring(0, 66);
        alert("El comentario se ha limitado a 66 caracteres.");
    }

    let commentContainer = document.createElement("div");
    commentContainer.classList.add("comment");

    let currentDate = new Date();
    let formattedDate = currentDate.toLocaleString();

    commentContainer.innerHTML = `
        <p>${commentText}</p>
        <span class="date">${formattedDate}</span>
        <button class="delete-btn" onclick="deleteComment(this)">Eliminar</button>
    `;

    document.getElementById("commentContainer").appendChild(commentContainer);

    if (document.getElementById("commentInput")) {
        document.getElementById("commentInput").value = "";
    }
}

function deleteComment(button) {
    button.parentElement.remove();
}
