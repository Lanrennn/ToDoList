var addBtn = $('#addBtn')
var templateID = 0

//新增代辦事項
addBtn.on('click', function(){
    //var textinput = $('#textInput').val
    
  var textInput = $('#textInput').val()
  
    var todo =`
     <div id="issuebar_${templateID}">
         <input id="check_${templateID}" type="checkbox" onchange="check(${templateID})" >
         <span id="contents_${templateID}"> ${textInput} </span>
         <button onclick="del(${templateID})">  X  </button>  
               
     </div>`
    
    if(textInput == ''){
        alert('請輸入事項')
    }else{
    $('#todolist').append(todo)
    $('#textInput').val('')
    }
     templateID ++
    
    
})


//勾選代辦事項
function check(id){
    var status = $("#check_"+id).prop('checked')
    console.log(status)
    var contents = $('#contents_'+id)
    if (status) {
        contents.css('textDecoration', 'line-through')
    }else{
        contents.css('textDecoration', 'none')
            
    }
    //var contents = $("#contents_"+id)
    //contents.style("textdecoration","line-through")
    
 }



//刪除代辦事項
function del(id){
    var list = $("#issuebar_"+id)
    list.empty()
}

