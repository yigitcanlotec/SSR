function editTaskData(id){
    const strId = id.substring(5); //id value is 'edit-{number}' form and parse the number


    //Edit the table row of that given id.
    const idText = document.getElementById(`td-id-${strId}`);
    const titleText = document.getElementById(`td-title-${strId}`);
    const assigneeText = document.getElementById(`td-assignee-${strId}`);
    const doneText = document.getElementById(`td-done-${strId}`);
    const lastColumn = document.getElementById(`form-table-data-${strId}`)

    //Get the text of each column that row
    const spanIdText = idText.children[0].textContent;
    const spanTitleText = titleText.children[0].textContent;
    const spanAssigneeText =  assigneeText.children[0].textContent;
    const spanDoneText = doneText.children[0].textContent;


    //Remove the child of that given row.
    const childIdText = idText.children[0];
    const childtitleText = titleText.children[0];
    const childAssigneeText = assigneeText.children[0];
    const childDoneText = doneText.children[0];
    

    idText.removeChild(childIdText);
    titleText.removeChild(childtitleText);
    assigneeText.removeChild(childAssigneeText);
    doneText.removeChild(childDoneText);
    
    while (lastColumn.firstChild) {
        lastColumn.removeChild(lastColumn.firstChild);
    }

    
    //Add the input=text child element of each column of row.
    var inputIdElement = document.createElement("input");
    inputIdElement.type = "text";
    inputIdElement.id =`id-${strId}`;
    inputIdElement.style.width =  140;
    inputIdElement.value = spanIdText;

    var inputTitleElement = document.createElement("input");
    inputTitleElement.type = "text";
    inputTitleElement.id =`id-title-${strId}`;
    inputTitleElement.style.width =  140;
    inputTitleElement.value = spanTitleText;

    var inputAssigneeElement = document.createElement("input");
    inputAssigneeElement.type = "text";
    inputAssigneeElement.id =`id-assignee-${strId}`;
    inputAssigneeElement.style.width =  140;
    inputAssigneeElement.value = spanAssigneeText;

    var inputDoneElement = document.createElement("input");
    inputDoneElement.type = "text";
    inputDoneElement.id =`id-done-${strId}`;
    inputDoneElement.style.width = 140;
    inputDoneElement.value = spanDoneText;


    idText.appendChild(inputIdElement);
    titleText.appendChild(inputTitleElement);
    assigneeText.appendChild(inputAssigneeElement);
    doneText.appendChild(inputDoneElement);
    


    //------------------------------------------
    //Add update button to last column.
    var lastColumnElement = document.createElement("form");
    lastColumnElement.id=`form-${strId}`;
    lastColumnElement.action="/update";
    lastColumnElement.method="POST";

    var last = document.getElementById(`form-table-data-${strId}`);
    last.appendChild(lastColumnElement);

    var lastColumnForm = document.body.appendChild().appendChild(lastColumnElement);
    
    var lastColumnFormButtonUpdate = document.createElement("input");
    lastColumnFormButtonUpdate.type="submit";
    lastColumnFormButtonUpdate.id =`form-submit-${strId}`;
    lastColumnFormButtonUpdate.style.height = 20;
    lastColumnFormButtonUpdate.value = "Update";

  

    var inputIdElement2 = document.createElement("input");
    inputIdElement2.type = "text";
    inputIdElement2.id =`id-${strId}`;
    // inputIdElement2.style.display = 'none';
    inputIdElement2.value = inputIdElement.value;

    var inputTitleElement2 = document.createElement("input");
    inputTitleElement2.type = "text";
    inputTitleElement2.id =`title-${strId}`;
    // inputTitleElement2.style.display = 'none';
    inputTitleElement2.value = inputTitleElement.value;

    var inputAssigneeElement2 = document.createElement("input");
    inputAssigneeElement2.type = "text";
    inputAssigneeElement2.id =`assignee-${strId}`;
    // inputAssigneeElement2.style.display = 'none';
    inputAssigneeElement2.value = inputAssigneeElement.value;

    var inputDoneElement2 = document.createElement("input");
    inputDoneElement2.type = "text";
    inputDoneElement2.id =`done-${strId}`;
    // inputDoneElement2.style.display = 'none';
    inputDoneElement2.value = inputDoneElement.value;

    
    lastColumnForm.appendChild(inputIdElement2);
    lastColumnForm.appendChild(inputTitleElement2);
    lastColumnForm.appendChild(inputAssigneeElement2);
    lastColumnForm.appendChild(inputDoneElement2);

    lastColumnForm.appendChild(lastColumnFormButtonUpdate);

}