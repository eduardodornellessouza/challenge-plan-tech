# The Challenge - Plan Tech
## Cookbook - Challenge Plan Tech
Repo: https://github.com/eduardodornellessouza/challenge-plan-tech

Docker hub: https://hub.docker.com/repository/docker/eduardods/challenge-ms-plan-tech/general

Docker image: https://hub.docker.com/layers/204742552/eduardods/challenge-ms-plan-tech/latest/images/sha256-3f9e603d477b52f5aebaf1311aa449e79e643373523cc87d0b06e53bbbaeb6e8?context=repo

## Folders explain
Folder application: contain all microservice source code 

Folder docker: contain Dockerfile to build and Docker Image

Folder kubernetes: contain all Kubernetes artefacts to deploy an application

Folder terraform: contain all artefacts to provisisoning an EKS cluster on AWS cloud

## Challenge explanation
### - Level 1 - Create a simple microservice in any programming language
Description: https://github.com/Plan-A-Technologies/DevOps-Challenge-Level-1

Was build an simple application using NodeJs wich return the curl get command in json format like below:

The code is in application folder.

{

    "timestamp": "Sat Apr 23 2022 00:48:58 GMT-0300 (Horário Padrão de Brasília)",
    "hostname": "MacBook-Air.local",
    "engine": "9.6.180.15-node.12",
    "ip_visitor": "179.179.80.41"   

}

### - Level 2 - Create an EKS cluster using Terraform, AWS CloudFormation or AWS CDK
Description: https://github.com/Plan-A-Technologies/DevOps-Challenge-Level-2

Was created a terraform code to deploy VPC with 2 private subnets and 2 public subnets + EKS deploy.

The code is in terraform folder.
