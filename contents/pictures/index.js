var picture = {

    loadQuestions: function() {


        $.get("data/cyberbullying_data.json.data", function(data) {
            var result = JSON.parse(data)

            $.get("pictures/list.jade", function(template) {
                var html = jade.render(template, {
                    data: result
                })
                $("#pictures").html(html)
            })

        })
    },
    load: function() {

        $.get("pictures/ui.jade", function(template) {
            var html = jade.render(template)
            $("#pictures").html(html)
        })
    }
}