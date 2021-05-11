let allClass = $('span')
let allForm = $(".F")
$("#signIn").click(() => {
    addActiv('signIn')
    changForm('FsignUp')
});
$("#signUp").click(() => {
    addActiv("signUp")
    changForm("FsignIn")
});
addActiv = (e) => {
    allClass.removeClass("active_form")
    $("#" + e).addClass("active_form");

}
changForm = (e) => {
    allForm.removeClass("noShow")
    $("#" + e).addClass("noShow");
    if (e === "FsignUp") {
        $('#sup').text("Sign in")
    } else {
        $('#sup').text("Sign up")
    }

}