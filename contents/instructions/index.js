var districts = {

    searchByZipcode: function(zipcode) {


        // ref: https://sunlightlabs.github.io/congress/districts.html

        $("#list").html("TODO")

    },

    load: function() {

        $.get("/sunlight/instructions/instructions.jade", function(template) {
            var html = jade.render(template)
            $("#instructions").html(html)
        })

        // default search results
        districts.searchByZipcode()

    }

}