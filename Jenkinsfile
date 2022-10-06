node {
    stage('cloning git repo') {
        git branch: 'master', url:'https://github.com/gem-khushiporwal/new_project.git'
    }
    stage("Build") {
        bat 'npm install'
        bat 'npm run ng build --prod'
    }
    stage('build docker image'){
        bat 'docker build -t ang-app:latest .'
     }
     stage('push image to nexus'){
        bat 'docker login -u "admin" -p "Porwal@32" 127.0.0.1:9001'
        bat 'docker tag ang-app 127.0.0.1:9001/repository/docker_nexus/ang-app:01'
        bat 'docker push 127.0.0.1:9001/repository/docker_nexus/ang-app:01'
     }
     stage('deploy to K8s'){
        bat 'kubectl apply -f deploy-service.yml --context minikube'
     }    
}



