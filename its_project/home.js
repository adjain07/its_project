function changeSubject() {
    var select = document.getElementById("subjectSelect");
    var selectedSubject = select.options[select.selectedIndex].value;

    // Hide all subject contents
    var subjectContents = document.getElementsByClassName('subject-content');
    for (var i = 0; i < subjectContents.length; i++) {
        subjectContents[i].style.display = 'none';
    }

    // Show the selected subject content
    var content = document.getElementById(selectedSubject + '-content');
    content.style.display = 'block';
}
