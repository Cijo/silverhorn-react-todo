const getTodosApi = async ()=>{
    try {
        return await fetch('https://jsonplaceholder.typicode.com/todos')
                    .then(response => response.json());
    } catch (error) {
        console.error(error);
    }
    
}

export default getTodosApi;