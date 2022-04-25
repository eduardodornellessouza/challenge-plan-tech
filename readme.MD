## The Challenge - Plan Tech
Summary: 

1 - Description: About the challenge

2 - Repo and Docker Hub address

3 - Explanation about the content of the folders under de repo

4 - How it work, step by step

5 - Testing microservice

## 1 - Description:
Level 1: https://github.com/Plan-A-Technologies/DevOps-Challenge-Level-1

Level 2: https://github.com/Plan-A-Technologies/DevOps-Challenge-Level-2

## 2 - Repo + Docker Hub
Repo: https://github.com/eduardodornellessouza/challenge-plan-tech

Docker hub: https://hub.docker.com/repository/docker/eduardods/challenge-ms-plan-tech/general

## 3 - Folders explain under the project
Folder application: contain all microservice source code.

Folder docker: contain Dockerfile to build and Docker Image.

Folder kubernetes: contain all Kubernetes artefacts to deploy an application.

Folder terraform: contain all artefacts to provisisoning an EKS cluster on AWS cloud.


## 4 - How it work, step by step
Follow the instructions like below to deploy an application:

4.1 - Before start the actions, you will need to install some tools on your computer. Follow the instructions using the file [pre-requirements](pre-requirements.MD) on root folder.

4.2 - Create a Kubernetes cluster:
    Navigate to Terraform folder and execute the commands below:
        terraform init
        terraform validate
        terraform plan
        terraform apply

4.3 - Connect directly on EKS cluster. For this, use the official documentation by AWS: https://aws.amazon.com/pt/premiumsupport/knowledge-center/eks-cluster-connection/

4.4 - Deploy microservice: 
Navigate to kubernetes folder and execute the commands below:

Create a namespace under the EKS cluster to isolate your microservice:

  `kubectl create namespace challenge`
				
Deploy a Kubernetes service:

`kubectl apply -f api-challenge-ms-service.yaml -n challenge`
				
Deploy a Kubernetes deployment/pod

  `kubectl apply -f api-challenge-ms-deployment.yaml -n challenge`
				
Verify if your pod was created:

  `kubectl get pods -n challenge`

## 5 - The result
5.1 - Execute the command: `kubectl get svc -n challenge`

The result, may be like bellow:


NAME                       | TYPE           | CLUSTER-IP   | EXTERNAL-IP     | PORT(S)        | AGE
:------------------------- | :------------- | :----------- | :-------------- | :------------- | ----
api-challenge-ms-service   | LoadBalancer   | 10.2.0.120   | 20.201.46.144   | 80:31403/TCP   | 16m

5.2 - Open your browser, get the attribute "EXTERNAL-IP" try to access using address "http://EXTERNAL-IP/challenge":
The result must be like below:

`[
  {
    "timestamp": "Mon Apr 25 2022 16:57:27 GMT+0000 (Coordinated Universal Time)",
    "hostname": "api-challenge-ms-service-8454f98c95-b46lv",
    "engine": "9.4.146.24-node.20",
    "visitorip": "10.201.22.202"
  }
]`

![image](https://user-images.githubusercontent.com/52758765/165142635-393358de-af42-47b1-b90a-214f824b3d15.png)

