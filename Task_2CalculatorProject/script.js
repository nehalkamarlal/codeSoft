const container=document.getElementById('container');
const buttons=document.getElementsByClassName('button');
const input=document.getElementById('input-field');
const infoparagraph=document.getElementById('info');
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',(event)=>{
        // console.log(event.target.innerHTML);
        let inputText='';
        switch(event.target.innerHTML)
        {
            case 'C':
                infoparagraph.innerHTML="";
                break;
            case '=':
                try{
                    inputText=eval(input.value);
                }catch(e)
                {
                   inputText='';
                   infoparagraph.style.display='block';
                   infoparagraph.innerHTML="This Is Invalid Operation";
                }
               
                break;
            case 'R':
                inputText=input.value.slice(0,input.value.length-1);
                 break;
            default:
                  inputText=`${input.value}${event.target.innerHTML}`;
                  break;
        }
       input.value= inputText;
    })
}