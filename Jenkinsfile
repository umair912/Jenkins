pipeline{

  agent any

  parameters{
    string(name: 'SPEC', defaultValue: "cypress/integration//**/**", description: "Enter the scripts path that you want to execute")
    choice(name: 'BROWSER', choices: ['chrome','edge','firefox'], description: "Chose Browser")
  }

  stages{
    stage('Building'){
      echo "Building the application"
    }
    stage('Testing'){
      steps{
        sh "npm i"
        sh "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
      }
    }
    stage('Deploying'){
      echo "Deploying the application"
    }
  }
  
}