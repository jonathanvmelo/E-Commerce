

$(document).ready(function () {
    $("#price").maskMoney({
        prefix: "R$ ",
        decimal: ",",
        thousands: "."
    });
});