echo "# challenge-plan-tech" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main

git remote add origin https://github.com/eduardodornellessouza/challenge-plan-tech.git
git push -u origin main

git remote add origin https://github.com/eduardodornellessouza/challenge-plan-tech.git
git branch -M main
git push -u origin main

You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

# Cookbook - Challenge Plan Tech
Folder application: contain all microservice source code 
Folder docker: contain Dockerfile to build and Docker Image
Folder kubernetes: contain all Kubernetes artefacts to deploy an application
Folder terraform: contain all artefacts to provisisoning an EKS cluster on AWS cloud

# - Level 1 - Create a simple microservice in any programming language
Description: https://github.com/Plan-A-Technologies/DevOps-Challenge-Level-1


# - Level 2 - Create an EKS cluster using Terraform, AWS CloudFormation or AWS CDK
Description: https://github.com/Plan-A-Technologies/DevOps-Challenge-Level-2