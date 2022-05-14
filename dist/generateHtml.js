function generateManagerCard(managerData) {
  return `
  <!-- Card for Manager -->
  <div class="row" style="text-align: center;">
  <div class="card border-dark mb-3" style="max-width: 18rem;">
    <div class="card-header" id="manager">Manager</div>
    <div class="card-body text-dark">
      <h5 class="card-title">${managerData.getName()}</h5>
      <p class="card-text"> Some quick example text to build on the card title and make up the bulk of the card's
        content.</p>
      <p class="card-text" id="managerIdNumber">ID Number: </p>
      <p class="card-text" id="managerEmail">Email: </p>
      <p class="card-text" id="managerOfficeNumber">Office Number: </p>
    </div>
  </div>
  </div>
`;
}

// create a function to generate intern card
function generateInternCard(internData) {
  return `
  <!-- Card for Intern -->
  <div class="card border-dark mb-3" style="max-width: 18rem;">
    <div class="card-header" id="Intern"> Intern</div>
    <div class="card-body text-dark">
      <h5 class="card-title" id="internName"> Intern Name</h5>
      <p class="card-text"> Some quick example text to build on the card title and make up the bulk of the card's
        content.</p>
        <p class="card-text" id="internIdNumber">ID Number: </p>
      <p class="card-text"> Email: </p>
      <p class="card-text" id="school"> School: </p>
    </div>
  </div>

`
}

// create a function to generate engineer card
function generateEngineerCard(engineerData) {
  return `
  <!-- Card for Engineer -->
  <div class="card border-dark mb-3" style="max-width: 18rem;">
    <div class="card-header" id="Engineer">Engineer</div>
    <div class="card-body text-dark">
      <h5 class="card-title" id="engineerName">Engineer Name</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
        content.</p>
        <p class="card-text" id="engineerIdNumber">ID Number: </p>
      <p class="card-text" id="engineerEmail">Email: </p>
      <p class="card-text" id="github">Github username: </p>
    </div>
  </div>
`
}


function generateHtml(teamData) {
  //created a variable with an empty array so that we can push html 
  let teamHtml = []
  // wrote a for each to hook into each role of the team array
  teamData.forEach(teamMemberObj => {
    // created this if statement for when display employee role is equal to manager
    if(teamMemberObj.getRole()==="Manager") {
      let managerHtml = generateManagerCard(teamMemberObj)
      teamHtml.push(managerHtml)
    }
    // created this if statement for when display menu role is equal to engineer
    else if (teamMemberObj.getRole()==="Engineer") {
      let engineerHtml = generateEngineerCard(teamMemberObj)
      // this will push the engineerHtml data into teamHtml array
      teamHtml.push(engineerHtml)
    }
    else if (teamMemberObj.getRole()==="Intern") {
      let internHtml = generateInternCard(teamMemberObj)
      teamHtml.push(internHtml)
    }
  })
// created renderHtml variable to join all the html in team html into a string
  let renderHtml = teamHtml.join("")
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
  <title>Team Generator</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
      <div class="container" style="text-align: center;">
        <h1 class="display-4">My Team</h1>
        <p class="lead">Below you can find information for each team member.</p>
      </div>
      ${renderHtml}
    </div>
</body>
</html>
`
};

// const exampleArr = ['ricky', 'david', 'alicia']

// for (let i = 0; i < exampleArr.length; i++) {
//   const element = exampleArr[i];
//   console.log(element);
// }

// exampleArr.forEach((name) => {
//   console.log(name);
// })

module.exports = generateHtml;