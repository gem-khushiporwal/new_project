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
        kubeconfig(credentialsId: 'mykubeconfig', serverUrl: 'https://127.0.0.1:54277') {
             bat 'kubectl apply -f deploy-service.yml'
             bat 'kubectl apply -f nexus-secret.yml'
}
        
     }    
}



