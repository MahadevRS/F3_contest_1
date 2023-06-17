let arr = [

];

let id=1;

function addUser(User){
    arr.push(User);
   
    displayUser(arr);

}

function displayUser(arr){

    let display = document.getElementsByClassName("cards-list")[0];
    display.innerHTML="";
    
    if(arr.length==0){
        let noemployee = document.createElement("div");
        noemployee.className = "noemployee";
        noemployee.innerText = "You have 0 Employees."; 
        display.append(noemployee);
    }

    for(let i=0; i<arr.length; i++){

        let employeeContainer= document.createElement("div");
        employeeContainer.className="employee-container";
        
        let cardContainer= document.createElement("div");
        cardContainer.className="card-container";

        let idCard = document.createElement("div");
        idCard.className = "id-card";
        idCard.innerText = arr[i].id + ".";

        let nameCard = document.createElement("div");
        nameCard.className = "name-card";
        nameCard.innerText =  "Name : " + arr[i].name;

        let professsionCard = document.createElement("div");
        professsionCard.className = "profession-card";
        professsionCard.innerText = "Profession : " + arr[i].profession;

        let ageCard = document.createElement("div");
        ageCard.className = "age-card";
        ageCard.innerText = "Age : " + arr[i].age;

        let deleteButton = document.createElement("button");
        deleteButton.className="delete-button";
        deleteButton.innerText="Delete User";
        deleteButton.onclick = function (){
            let id=arr[i].id;
            deleteUser(id);
        }

        cardContainer.append(idCard);
        cardContainer.append(nameCard);
        cardContainer.append(professsionCard);
        cardContainer.append(ageCard);

        employeeContainer.append(cardContainer);
        employeeContainer.append(deleteButton);

        display.append(employeeContainer);

    }
}


displayUser(arr);

function addUserButtonClicked(){
    let name = document.getElementById("name").value;
    let profession = document.getElementById("profession").value;
    let age = document.getElementById("age").value;

    if(name=="" || age == "" || profession == ""){
        let message = document.getElementById("message");
        message.style.color="red";
        message.innerText="Error : Please Make sure All the fields are filled before adding in an employee !"
    }
    else if(age<=0 || age>=125){
        alert("Please enter valid age");
    }
    else{
        let message = document.getElementById("message");
        message.style.color="green";
        message.innerText="Success : Employee Added!"

        let newUser = {
            id : id++ ,
            name:name,
            age:age,
            profession: profession

        }   
        addUser(newUser);
        
    }

}

function deleteUser(id){
    for(let i=0;i<arr.length; i++){
        if(arr[i].id == id){
            arr.splice(i,1);
        }
    }
    displayUser(arr);
}