pipeline {
  agent {
    docker {
      image 'node:14'
    }
  }

  environment {
    HOME="${WORKSPACE}"
  }

  options {
    timeout(time: 10, unit: 'MINUTES')
    ansiColor('xterm')
  }

  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
  }
}
