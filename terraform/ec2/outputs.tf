output "instance_id" {
  description = "The ID of the EC2 instance"
  value       = aws_instance.ec2-casino-frontend.id
}

output "public_ip" {
  description = "The public IP of the EC2 instance"
  value       = aws_instance.ec2-casino-frontend.public_ip
}