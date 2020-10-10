function switchVisible() {
    if (document.getElementById('SignUpDiv')) {

        if (document.getElementById('SignUpDiv').style.display == 'none') {
            document.getElementById('SignUpDiv').style.display = 'block';
            document.getElementById('LogInDiv').style.display = 'none';
        }
        else {
            document.getElementById('SignUpDiv').style.display = 'none';
            document.getElementById('LogInDiv').style.display = 'block';
        }
    }
}