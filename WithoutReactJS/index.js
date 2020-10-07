var nb = Math.floor(100*Math.random());
var nb_coup = 0;

document.getElementById('restart').style.display = 'none';
document.getElementById('moins').style.display = 'none';
document.getElementById('plus').style.display = 'none';

function jeux () {
    var result = document.getElementById('result').value;
    nb_coup++;

    if (result > nb) {
        document.getElementById('moins').style.display = 'block';
        document.getElementById('plus').style.display = 'none';
        document.getElementById('result').value = '';
    }
    if (result < nb) {
        document.getElementById('plus').style.display = 'block';
        document.getElementById('moins').style.display = 'none';
        document.getElementById('result').value = '';
    }
    if (result == nb) {
        alert("Bravo, le nombre était "+ nb +". T'as gagné en "+ nb_coup +" coup(s)");
        document.getElementById('restart').style.display = 'block';

    }
}

function restart_game() {
    window.location.reload()
}

console.log(nb)