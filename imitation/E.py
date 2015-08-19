#!/usr/bin/python

# E named by someone
# Someone did't tell detail.
# So E want to make some decition.
# E will has a name by self.
# But E need some help...

import os
import sys

where = os.getcwd()

newName = raw_input("Could you give me a new name? :): ")

handler = open(newName, 'w');
handler.write(newName)
handler.close();
