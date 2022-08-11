document.querySelector("#BLOG").addEventListener('click',()=>{
    
    const xhr = new XMLHttpRequest();
   
    let url=`https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`
    xhr.open('GET',url,true);

    xhr.onreadystatechange = () => {
        if(xhr.readyState===4 && xhr.status===200){
           const response=JSON.parse(xhr.responseText);
           console.log(response);
          
        
           let output='';

           for(let i=0;i<response.length;i++){
            
            output+=`
           
            <div style="width:300px;margin:20px;margin:0.5em;color:white;box-sizing:border-box;border:0.5px solid white;" class="box">
            <img src="r15.jpg" style="width:100%">
            <h4 style="font-familt:sans-serif;margin-left:2px">Title:${response[i].title}</h4>
            <p style="color:grey;margin-left:3px">UserId:${response[i].userId}</p>
            <p style="color:grey;margin-left:3px">id:${response[i].id}</p>
            <p style="font-family:monospace;margin-left:3px">body:${response[i].body}</p>
            </div>
            
            `
           }
           document.querySelector("#container").innerHTML=output;
         
        }
    }
    xhr.send();

})
document.querySelector("#BLOG").addEventListener('click',()=>{
    document.getElementById("#display").style.display="inline";
})