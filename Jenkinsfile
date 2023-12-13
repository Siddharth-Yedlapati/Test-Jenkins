pipeline {
  agent any

  tools {nodejs "nodejs"}
    environment {
        CI = 'true'
        registryfrontend = 'siddharth322/test-frontend'
        registrybackend = 'siddharth322/test-backend'
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

    stage('Build Frontend Docker Image') {
      environment {
        IMAGE_NAME = ''
      }
      steps {
        script{
            dir('frontend') {
                dockerimage = sh '/usr/bin/docker build -t '+registryfrontend+':latest .'
            }
        }
      }
    }

    stage('Push Frontend Image to dockerHub') {
        steps {
            script{
                dir('frontend') {
                    sh '/usr/bin/docker login -u "siddharth322" -p "Sidhu@123"'
                    sh '/usr/bin/docker push ' +registryfrontend+':latest'
                }
                
            }
            
        }
    }

    stage('Free frontend local space') {
        steps {
            dir('frontend') {
                sh '/usr/bin/docker rmi '+registryfrontend+':latest'
            }
        }
    }

    stage('Build Backend Docker Image') {
      environment {
        IMAGE_NAME = ''
      }
      steps {
        script{
            dir('backend') {
                dockerimage = sh '/usr/bin/docker build -t '+registrybackend+':latest .'
            }
        }
      }
    }


    stage('Push Backend Image to dockerHub') {
        steps {
            script{
                dir('backend') {
                    sh '/usr/bin/docker login -u "siddharth322" -p "Sidhu@123"'
                    sh '/usr/bin/docker push ' +registrybackend+':latest'
                }
                
            }
            
        }
    }

    stage('Free backend local space') {
        steps {
            dir('backend') {
                sh '/usr/bin/docker rmi '+registrybackend+':latest'
            }
        }
    }

    stage('Deploy') {
        steps {
            sh 'export PATH="/usr/bin/python3.8"'
            sh '/usr/bin/ansible-playbook playbook.yml -i inventory'
        }
    }
  }  
}