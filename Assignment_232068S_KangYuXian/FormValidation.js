
function Validation1() {
    let X = document.forms['MyForm']['name'].value;
    if (X == "") {
        alert("Name must be filled in!");
        return false;

    }
}
function Validation2() {
    let Y = document.forms['MyForm']['AdminNo'].value;
    if (Y == "") {
        alert("Admin Number must also be filled in!");
        return false;
    }
}
function Validation3() {
    let Z = document.forms['MyForm']['contactNo'].value;
    if (Z == "") {
        alert("Contact Number must also be filled in!");
        return false;
    }
}

function Validation4() {
    let F = document.forms['MyForm']['contactNo'].value
    if (F.length !== 8) {
        alert('Contact Number must have 8 digits!')
        return false;
    }
}

function Validation5() {
    {
        var Joining = document.MyForm.joinPublicity;
        for (var i = 0; i < Joining.length; i++) {
            if (Joining[i].checked) {
                break;
            }
        }
        if (i == Joining.length) {
            return alert('Please check the radio button!')
        }
    }
}

function Validations() {
    Validation1();
    Validation2();
    Validation3();
    Validation4();
    Validation5();
}

