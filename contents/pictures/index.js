var picture = {
    complete: function()
    {
        $.get("pictures/complete.jade", function(template) 
        {
            var html = jade.render(template)
            $("#pictures").html(html)
        })
    },

    loadQuestions: function(next,id,e1,e2,e3,e3) {
        $("#pictures").html()
        id = id + 1
        if (next == true)
        {
            if (e1 == "true")
            {
                if (e3 == "true")
                {}
                else
                {}
            }
            else
            {
                if (e3 == "true")
                {}
                else
                {}
            }
        }
        if (id == 88)
        {
            complete()
            return
        }
        $.get("data/cyberbullying_data2.json.data", function(data) {
            var result = JSON.parse(data)
            //make data arrays so they can be more easily parsed by jade?

            $.get("pictures/list.jade", function(template) {
                var html = jade.render(template, {
                    data: result.data[id]
                })
                $("#pictures").html(html)
                scroll(0,0)
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