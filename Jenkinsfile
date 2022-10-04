node {
    stage('cloning git repo') {
        git branch: 'master', url:'https://github.com/gem-khushiporwal/new_project.git'
    }
    stage("Build") {
        bat 'npm install'
        bat 'ng build --prod'
    }
    stage('build docker image'){
        bat 'docker build -t ass-0 .'
     }
}