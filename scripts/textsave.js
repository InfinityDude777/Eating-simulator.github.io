var textsave={save:function(){document.getElementById("textareasave").innerHTML=btoa(btoa(JSON.stringify(data)))},load:function(){data=JSON.parse(atob(atob(document.getElementById("textareasave").value)))}};
