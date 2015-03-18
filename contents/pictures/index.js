var picture = {

    searchByZipcode: function(zipcode) {


        // ref: https://sunlightlabs.github.io/congress/districts.html

        $("#list").html("TODO")

    },

    load: function() {

        $.get("pictures/ui.jade", function(template) {
            var html = jade.render(template)
            $("#pictures").html(html)
        })

    }

}