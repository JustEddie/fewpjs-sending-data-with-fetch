// Add your code here


// submitData()
// 1) makes a POST request to /users with a name and email
// 2) handles the POST request response, retrieves the new id value and appends it to the DOM
// 3) handles a failed POST request using catch, appends the error message to the DOM

function submitData(name,email) {
    return fetch("http://localhost:3000/users",{
        method:"POST",
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(response=>response.json())
    .then(json=>document.body.innerHTML=json["id"])
    .catch(err=>document.body.innerHTML=err.message)
};
