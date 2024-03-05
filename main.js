document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const alienName = document.querySelector('input').value
    try{
        const response = await fetch('')
    }catch(error){
        console.log(error)
    }
}