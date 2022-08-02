pipeline {
  agent any

  environment {
      CI = 'true' 
  }

  triggers {
      cron('H */4 * * 1-5')
  }

  stages {
    stage('Setup NODE Environment') {
      steps {
        sh '''#!/bin/bash +x
          set -o errexit

          curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
          source ~/.nvm/nvm.sh
          nvm install 14.0.0
          npm install
          npm rum cy:run
        '''
      }
    }
  }
}