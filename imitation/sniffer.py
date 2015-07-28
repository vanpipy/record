#!/usr/bin/python

import socket
import os

HOST = "10.28.3.118"

def sniffing(host, win, socket_port):
  while 1:
    sniffer = socket.socket(socket.AF_INET, socket.SOCK_RAW, socket_port)
    sniffer.bind((host, 0))

    #include the IP headers in the captured packets
    sniffer.setsockopt(socket.IPPROTO_IP, socket.IP_HDRINCL, 1)

    if win == 1:
      sniffer.ioctl(socket.SIO_RCVALL, socket_RCVALL_ON)

    #read in a single packet
    print sniffer.recvfrom(65565)

def main(host):
  if os.name == "nt":
    sniffing(host, 1, socket.IPPROTO_IP)
  else:
    sniffing(host, 0, socket.IPPROTO_CMP)

if __name__ == "__main__":
  main(HOST)
