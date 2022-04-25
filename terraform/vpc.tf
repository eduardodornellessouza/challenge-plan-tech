variable "region" {
  default     = "us-east-1"
  description = "AWS region"
}

provider "aws" {
  region = var.region
}

data "aws_availability_zones" "available" {}

locals {
  cluster_name = "eks-challegen-plan-us-east-1-p"
}

module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "3.2.0"

  name                 = "vpc-challegen-plan-us-east-1-p-eks"
  cidr                 = "192.168.0.0/16"
  azs                  = data.aws_availability_zones.available.names
  private_subnets      = ["192.168.160.0/19", "192.168.128.0/19"]
  public_subnets       = ["192.168.64.0/19", "192.168.32.0/19"]
  enable_nat_gateway   = true
  single_nat_gateway   = true
  enable_dns_hostnames = true

  tags = {
    "kubernetes.io/cluster/${local.cluster_name}" = "shared"
  }

  public_subnet_tags = {
    "kubernetes.io/cluster/${local.cluster_name}" = "shared"
    "kubernetes.io/role/elb"                      = "1"
  }

  private_subnet_tags = {
    "kubernetes.io/cluster/${local.cluster_name}" = "shared"
    "kubernetes.io/role/internal-elb"             = "1"
  }
}
