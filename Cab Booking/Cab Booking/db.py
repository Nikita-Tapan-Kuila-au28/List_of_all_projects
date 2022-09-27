# Python3 program to illustrate store
# efficiently using pickle module
# Module translates an in-memory Python object
# into a serialized byte stream—a string of
# bytes that can be written to any file-like object.

import pickle

def storeData(dbDump):
	# Its important to use binary mode
	dbfile = open('pickleDB', 'ab')
	
	# source, destination
	pickle.dump(dbDump, dbfile)					
	dbfile.close()

def loadData():
	# for reading also binary mode is important
	dbfile = open('pickleDB', 'rb')	
	db = pickle.load(dbfile)
	# for keys in db:
	# 	print(keys, '=>', db[keys])
	dbfile.close()

if __name__ == '__main__':
	storeData()
	loadData()
