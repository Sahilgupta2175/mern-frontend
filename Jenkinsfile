pipeline {
    agent any

    // 🔥 Matches the name in "Global Tool Configuration"
    tools {
        nodejs 'NodeJS-16'  
    }

    stages {
        stage('Check Node/NPM') {
            steps {
                sh 'node --version && npm --version'  // Verify install
            }
        }

        stage('Install & Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'  // If needed
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}