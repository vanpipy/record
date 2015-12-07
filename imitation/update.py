#!/usr/bin/env python

import os
import sys
import time
import getopt
import subprocess

url = 'git@git3.diligrp.com:dlstatic/'

sourcePackage = ['components', 'static-pnr', 'static-logistics', \
                'static-pay', 'logistic-html5', 'static-wappay', \
                'static-fresh', 'static-wappnr']
newStaticPackage = {'components': 'common', 'static-pnr': 'pnr'}

package = {'source': sourcePackage, 'newStatic': newStaticPackage};

bashDirName       = "static"
update_condition  = False
update_state      = False
zipDir            = ""
targetPath        = ""
clearFileName     = ""

def usage():
  print
  print '-l --list\n - list all available git package.\n'
  print '--update\n - Update local static source.\n'
  print '--zip=DirName\n - Zip local static source.\n'
  print '-t --target=path\n - Update static source to target path.\n'
  print '-h --help\n - get help.\n'

def initDir():
  """Initialize static directory in current path."""
  if not os.path.exists(bashDirName):
    os.mkdir(bashDirName);
  else:
    print "static directory is alreally exist. You can try --update."

def listPackage():
  # git@git3.diligrp.com:dlstatic/components.git
  for each in package:
    print
    print bashDirName + "/" + each
    print
    for k in package[each]:
      print " --- " + k

def update():
  locateNow = os.path.abspath('.')

  try:
    for each in package:
      _path = os.path.join(locateNow, bashDirName, each)

      if os.path.exists(_path):
        os.chdir( _path )
      else:
        os.mkdir( _path )
        os.chdir( _path )

      for k in package[each]:
        subprocess.call("git clone " + url + k, shell=True)

        if type(package[each]) == dict:
          subprocess.call("mv " + k + " " + package[each][k])

    # clearFile("node_modules")

  except:
    print 'Path %s is not exist in current path.' % bashDirName
    print 'Please try mkdir "static" in current directory.' 

def doZip():
  global update_condition

  try:
    subprocess.call("tar -zcvf " + zipDir + str(time.time()) + ".tar.gz " +\
        zipDir)

    update_condition = False
  except:
    print "Shell can't use tar tool to zip your file %s\r\n" % bashDirName

def readOpt():
  global update_condition
  global zipDir
  global targetPath
  global clearFileName

  try:
    opts, args = getopt.getopt(sys.argv[1:], 'lhz:t:', ['list', 'update', \
      'help', 'zip=', 'target=', 'init', 'clearfile='])
  except getopt.GetoptError as err:
    print str(err)
    usage()
    sys.exit(2)

  for o, a in opts:
    if o in ('--init'):
      initDir();
    if o in ('--list', '-l'):
      listPackage();
    if o in ('--update'):
      update_condition = True
    if o in ('--zip', '-z'):
      zipDir = a
    if o in ('--target', '-t'):
      targetPath = a
    if o in ('--clearfile'):
      clearFileName = a
    if o in ('--help', '-h'):
      usage()

def clearFile(name):
  """
  docstring for clearFile, clear all node_modules in package.
  """
  subprocess.call("find " + bashDirName + " -name " + name + " | xargs rm -rf",\
      shell=True)
  print "Clear finished."

def main():
  readOpt()

  if update_condition:
    update()

  if len(zipDir):
    doZip()

  if len(targetPath):
    pass

  if len(clearFileName):
    clearFile(clearFileName);

if __name__ == '__main__':
  main()
