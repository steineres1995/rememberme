exports.createTask = function (title,description){
    let ts = Date.now();

    let date_ob = new Date(ts);

    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();

    let fullDate= year + "-" + month + "-" + date;

    const newTask ={
        title: title,
        description: description,
        created: fullDate
    };
    return newTask;
};