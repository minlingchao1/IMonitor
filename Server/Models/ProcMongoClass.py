# -*- coding:utf-8 -*-
import pymongo
import config

class ProcMongo:

    mongoClien = None
    db = None
    error = None

    def __init__(self, dbName):
        try:
            self.mongoClien = pymongo.MongoClient(config.MONGO_HOST, config.MONGO_PORT)
        except Exception as e:
            self.error = e
        try:
            self.db = getattr(self.mongoClien, dbName)
        except Exception as e:
            self.error = e


    def getName(self):
        print self.db.name

    def save(self, data):
        '''
        保存数据
        :param data: [{'type':'mem', 'time': '', 'value': 12},{},{}]
        :return:
        '''
        # return self.db
        try:
            res = self.db.proc.insert(data)
        except Exception as e:
            self.error = e
        return res

# mongo = ProcMongo('monitor')
# print mongo
# print mongo.db
# try:
#     a = mongo.save('asdf')
# except Exception as e:
#     print e