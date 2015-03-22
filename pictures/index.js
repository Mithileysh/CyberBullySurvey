var picture = {
    complete: function()
    {
        $.get("pictures/complete.jade", function(template) 
        {
            var html = jade.render(template)
            $("#pictures").html(html)
        })
    },

    saveData: function(q1,q2,id) {
        $.get('data/survey_results.json.data', function(data) {
            var result_data = {}
            if (!(q1 == "undefined" || q2 == "undefined")) {
                var post = _.find(data, {'id': id})

                if (post) {
                    result_data = {
                        '1' : q1,
                        '2' : q2
                    }
                    post['results'].push(result_data)
                }
                else{
                    var result_data = {}
                    result_data['id'] = id
                    result_data['results'] = [{
                        '1' : q1,
                        '2' : q2
                    }]
                    data.push(result_data)
                }
                fs.writeFileSync('./data/survey_results.json.data', JSON.stringify(results, null, 4));
            }
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
                {
                    picture.saveData(true,true,id)
                }
                else
                {
                    picture.saveData(true,false,id)
                }
            }
            else
            {
                if (e3 == "true")
                {
                    picture.saveData(false,true,id)
                }
                else
                {
                    picture.saveData(false,false,id)
                }
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