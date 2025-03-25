pipeline {
    agent any

    environment {
        APP_NAME = 'mern-app'
        NODE_VERSION = '16'  // Use your required Node version
    }

    tools {
        nodejs 'NodeJS'  // This refers to a NodeJS installation configured in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Setup Node') {
            steps {
                script {
                    // Verify Node/npm are available
                    sh """
                        node --version
                        npm --version
                    """
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}