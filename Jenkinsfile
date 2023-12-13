pipeline {
  agent any

  tools {nodejs "nodejs"}
    environment {
        CI = 'true'
        registryfrontend = 'gaparul/sangam-alumniportal-frontend'
        registrybackend = 'gaparul/sangam-alumniportal-backend'
        DOCKERHUB_CRED = credentials('CRED_DOCKER')
        registryCredential = 'CRED_DOCKER'
        dockerimage = ''
    }

  stages {
    stage('Git Pull') {
        steps {
            git url: 'https://github.com/Siddharth-Yedlapati/Test-Jenkins.git', branch: 'main'
        }
    }
  }  
}