class Rider():
    
    def __init__(self,name,mobile,password):
        self.name = name
        self.mobile = mobile
        self.x = 0
        self.y = 0
        self.password = password

    
    def displayRiderDetails(self):
        print("Rider name : ", self.name)
        print("Rider's Mobile Number", self.mobile)
        print("Rider's Distance", self.x, self.y)


        

    def updateLocation(self,x,y):
        self.x = x
        self.y = y


    def getLocation(self):
        return self.x, self.y