#!/bin/bash
echo "creating first user"
sudo useradd -m lalitsingh
sudo passwd lalitsingh

echo "creating second user"
sudo useradd -m lalitgoyanda
sudo passwd lalitgoyanda


echo "creating 2 group"
sudo su -
groupadd engineer1
groupadd engineer2


echo "Login as a user and create file"
sudo -u lalitsingh bash
touch u2

echo "copy or send file from one user to other user"
cat ~lalitsingh/u2 | sudo -u lalitgoyanda tee ~lalitgoyanda/u2 > /dev/null


