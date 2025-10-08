


function SetActiveMate() {
    const Mate = document.getElementById('check-mate');
    const Fenate = document.getElementById('check-fenate')
    const StatusMate = Mate.classList.contains('active')
    if (!StatusMate) {
        Mate.classList.add('active')
        Fenate.classList.remove('active')
        return
    }
}

function SetActiveFenate() {
    const Mate = document.getElementById('check-mate');
    const Fenate = document.getElementById('check-fenate')
    const StatusFenate = Fenate.classList.contains('active')
    if (!StatusFenate) {
        Fenate.classList.add('active')
        Mate.classList.remove('active')
        return
    }
}