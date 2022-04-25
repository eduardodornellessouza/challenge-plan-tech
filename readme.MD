# The Challenge - Plan Tech
## Summary: 

ID  | Description
:-- | :----------
1   | Description: About the challenge
2   | Repo and Docker Hub address
3   | Explanation about the content of the folders under de repo
4   | How it work, step by step
5   | Testing microservice

## 1 - Description:
Level | Description | Link
:---- | :---------- | :---
1 | Application and deploy | [Link](https://github.com/Plan-A-Technologies/DevOps-Challenge-Level-1)
2 | Create an infraestructure | [Link](https://github.com/Plan-A-Technologies/DevOps-Challenge-Level-2)

## 2 - Repository and Docker Registry (hub)
Type | Link
:---- | :---
Repository |  [Link](https://github.com/eduardodornellessouza/challenge-plan-tech)
Docker registry |  [Link](https://hub.docker.com/repository/docker/eduardods/challenge-ms-plan-tech/general)

## 3 - Folders explain under the project
Folder | Description
:---- | :---------- 
application | Contain all microservice source code.
docker | Contain Dockerfile to build and Docker Image.
kubernetes | Contain all Kubernetes artefacts to deploy an application.
terraform | Contain all artefacts to provisisoning an EKS cluster on AWS cloud.


## 4 - How it work, step by step
Sub-item | Description | Action 
:----  | :---------- | :----
4.1 | Before start the actions, you will need to install some tools on your computer. | [Link](pre-requirements.MD)
4.2 | Create EKS cluster. Navigate to Terraform folder and execute the commands to initialize the project | `terraform init`
4.3 | Create EKS cluster. Navigate to Terraform folder and execute the commands to validate the project | `terraform validate`
4.4 | Create EKS cluster. Navigate to Terraform folder and execute the commands to plan the project | `terraform plan`
4.5 | Create EKS cluster. Navigate to Terraform folder and execute the commands to execute the project | `terraform apply`
4.6 | Connect directly on EKS cluster. For this, use the official documentation by AWS. | [Link](https://aws.amazon.com/pt/premiumsupport/knowledge-center/eks-cluster-connection/)
4.7 | Create a namespace under the EKS cluster to isolate your microservice | `kubectl create namespace challenge`
4.8 | Deploy a Kubernetes service | `kubectl apply -f api-challenge-ms-service.yaml -n challenge`
4.9 | Deploy a Kubernetes deployment/pod | `kubectl apply -f api-challenge-ms-deployment.yaml -n challenge`
4.10 | Verify if your pod was created | `kubectl get pods -n challenge`

## 5 - The result
5.1 - Execute the command: `kubectl get svc -n challenge`

The result, may be like bellow:


NAME                       | TYPE           | CLUSTER-IP   | EXTERNAL-IP     | PORT(S)        | AGE
:------------------------- | :------------- | :----------- | :-------------- | :------------- | ----
api-challenge-ms-service   | LoadBalancer   | 10.2.0.120   | 20.201.46.144   | 80:31403/TCP   | 16m

5.2 - Open your browser, get the attribute "EXTERNAL-IP" try to access using address `http://EXTERNAL-IP/challenge` :
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

