data "terraform_remote_state" "casino_vpc" {
  backend = "s3"
  config = {
    bucket = "casino-2310-bucket"
    key    = "ec2-casino/vpc.tfstate"
    region = var.aws_region
  }
}

resource "aws_instance" "ec2-casino-frontend" {
  ami                         = "ami-0084a47cc718c111a"
  instance_type               = var.instance_type
  subnet_id                   = data.terraform_remote_state.casino_vpc.outputs.subnet_id1
  security_groups             = [aws_security_group.http.id]
  key_name                    = var.key_name
  associate_public_ip_address = true

  tags = {
    Name = "EC2-Casino-Frontend"
  }
}