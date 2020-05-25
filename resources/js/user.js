$(function() {
    var baseUrl = $(".data-table").data("url");

    var oTable = $(".data-table").DataTable({
        processing: true,
        serverSide: true,
        ajax: {
            url: baseUrl
        },
        columns: [
            {
                data: "id",
                name: "id",
                searchable: false
            },
            { data: "name", name: "name" },
            { data: "email", name: "email" },
            { data: "role.name", name: "role.name" },
            { data: "last_at", name: "last_at", searchable: false },
            { data: "last_ip", name: "last_ip" },
            {
                data: "action",
                name: "action",
                orderable: false,
                searchable: false,
                defaultContent:
                    '<a href="javascript:void(0)" data-toggle="tooltip" class="edit btn btn-primary btn-sm editUser">Edit</a><a href="javascript:void(0)" data-toggle="tooltip" class="btn btn-danger btn-sm deleteUser">Delete</a>'
            }
        ]
    });

    $("#createNewUser").click(function() {
        $("#saveBtn").val("create-user");
        $("#user_id").val("");
        $("#userForm").trigger("reset");
        $("#modelHeading").html("Create New User");
        $("#userModel").modal("show");
    });

    $("body").on("click", ".editUser", function() {
        var user_id = $(this).data("id");

        $.get(`${baseUrl}/${user_id}/edit`, function(data) {
            $("#modelHeading").html("Edit User");
            $("#saveBtn").val("edit-user");
            $("#userModel").modal("show");
            $("#user_id").val(data.id);
            $("#name").val(data.name);
            $("#email").val(data.email);
        });
    });

    $("#saveBtn").click(function(e) {
        e.preventDefault();
        $(this).html("Sending..");

        $.ajax({
            type: "POST",
            url: baseUrl,
            dataType: "json",
            data: $("#userForm").serialize(),
            success: function(data) {
                $("#userForm").trigger("reset");
                $("#userModel").modal("hide");
                oTable.draw();
            },
            error: function(data) {
                console.log("Error:", data);
                $("#saveBtn").html("Save Changes");
            }
        });
    });

    $("body").on("click", ".deleteUser", function() {
        var user_id = $(this).data("id");

        confirm("Are You sure want to delete !");

        $.ajax({
            type: "DELETE",
            url: `${baseUrl}/${user_id}`,
            success: function(data) {
                oTable.draw();
            },
            error: function(data) {
                console.log("Error:", data);
            }
        });
    });
});
