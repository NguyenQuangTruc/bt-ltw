function setIndex(index, event, limit) {
    if (event === "left") {
        if (index === limit) {
            return index;
        }
        return index - 1;
    }

    if (event === "right") {
        if (index === limit) {
            return index;
        }
        return index + 1;
    }
}

function showAnh(index, event) {
    const listAnh = document.getElementsByClassName("list-anh-thien-nhien");
    if (event === "left") {
        if (index === 0) {
            return;
        }
        for (const anh of listAnh) {
            anh.style.display = "none";
        }
        listAnh[index - 1].style.display = "block";
        return;
    }

    if (event === "right") {
        if (index === listAnh.length - 1) {
            return;
        }
        for (const anh of listAnh) {
            anh.style.display = "none";
        }
        listAnh[index + 1].style.display = "block";
        return;
    }

}