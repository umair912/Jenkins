pipeline{

  agent any

  parameters{
    string(name: 'SPEC', defaultValue: "cypress/integration//**/**", description: "Enter the scripts path that you want to execute")
    choice(name: 'BROWSER', choices: ['chrome','edge','firefox'], description: "Chose Browser")
  }

  stages{
    stage('Testing'){
      steps{
        sh "PATH=/sbin:/usr/sbin:/usr/bin:/usr/local/bin"
        sh "npm install"
        sh "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
      }
    }
  }
  
}
