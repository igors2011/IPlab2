const form = document.forms[0];

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let formData = new FormData(form);
    let commentData = formData.get("comment");
    let nameData = formData.get("username")
    if (commentData === "" || nameData === "")
    {
        swal({
            title: "Ошибка",
            text: "Не заполнено имя или комментарий!",
            icon: "error",
            button: "Ок",
    });
    }
    else
    {
        swal({
            text: "Спасибо за комментарий",
            icon: "success",
            button: "Ок",
    });
    console.log(commentData);
    console.log(nameData);
    }
});
