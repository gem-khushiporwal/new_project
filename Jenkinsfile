node {
    stage('cloning git repo') {
        git branch: 'master', url:'https://github.com/gem-khushiporwal/new_project.git'
    }
    stage("Build") {
        bat 'npm install'
        bat 'npm fund'
        bat 'npm audit fix'
        bat 'ng build --prod'
    }
}
