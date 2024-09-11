// Zugriff auf fremden S3 Bucket über Cloudfront möglich
// Wird im späteren Verlauf des Projektes eingefügt

terraform {
  backend "s3" {
    bucket = "casino-terraform-bucket"
    key    = "ec2-casino/ec2.tfstate"
    region = "eu-central-1"
  }
}