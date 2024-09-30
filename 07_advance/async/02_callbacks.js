
// fetchData function having callback function 
function fetchData(callback){
    console.log("Fetching data")
    setTimeout(()=>{
        const data = {
            id: 101, 
            message: "Hello from data"
        }
        callback(data)
    },2000)
}

// processData() function takes data as a parameter and log then
function processData(data){
    console.log("Processing data")
    console.log(`Data get receive: ${data.message}`)
}

// calling fetchData function and pass processData as a argument i.e. callbacks
fetchData(processData)

