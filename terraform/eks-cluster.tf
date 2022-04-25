module "eks" {
  source          = "terraform-aws-modules/eks/aws"
  cluster_name    = local.cluster_name
  cluster_version = "1.21"
  subnets         = module.vpc.private_subnets

  cluster_endpoint_private_access = true
  cluster_endpoint_public_access  = true
  
  tags = {
    Environment = "production"
  }

  vpc_id = module.vpc.vpc_id

 # Managed Node Groups
  node_groups_defaults = {
    ami_type  = "AL2_x86_64"
    root_volume_type = "gp2"
    disk_size = 50
  }

  node_groups = {
    workers_1_group = {
      desired_capacity = 2
      max_capacity     = 20
      min_capacity     = 2

      instance_types = ["c5.xlarge"]
      k8s_labels = {
        Environment = "production"
        Hardware  = "cpu_performance"
      }
      update_config = {
        max_unavailable_percentage = 50 # or set `max_unavailable`
      }
    }
    workers_2_group = {
      desired_capacity = 2
      max_capacity     = 20
      min_capacity     = 2

      instance_types = ["r5.large"]
      k8s_labels = {
        Environment = "production"
        Hardware  = "ram_performance"
      }
      update_config = {
        max_unavailable_percentage = 50 # or set `max_unavailable`
      }
    }
    workers_3_group = {
      desired_capacity = 2
      max_capacity     = 20
      min_capacity     = 2

      instance_types = ["t3.xlarge"]
      capacity_type  = "SPOT"
      k8s_labels = {
        Environment = "production"
        Hardware  = "database_performance"
      }
      update_config = {
        max_unavailable_percentage = 50 # or set `max_unavailable`
      }
    }

  }
}

resource "aws_eks_addon" "vpc_cni" {
  addon_name   = "vpc-cni"
  cluster_name = module.eks.cluster_id
}

resource "aws_eks_addon" "kube_proxy" {
  addon_name   = "kube-proxy"
  cluster_name = module.eks.cluster_id
}

resource "aws_eks_addon" "coredns" {
  addon_name   = "coredns"
  cluster_name = module.eks.cluster_id
}

data "aws_eks_cluster" "cluster" {
  name = module.eks.cluster_id
}

data "aws_eks_cluster_auth" "cluster" {
  name = module.eks.cluster_id
}
