pipeline{

  agent any

  tools{nodejs "node"}

  stages{
    stage('Testing'){
      steps{
        node{
          sh "PATH=/sbin:/usr/sbin:/usr/bin:/usr/local/bin"
          sh "npm install"
          sh "npx cypress run --browser Chrome --spec Jenkins/cypress/e2e/Jenkin/jenkins.cy.js"
        }
      }
    }
  }
  
}
