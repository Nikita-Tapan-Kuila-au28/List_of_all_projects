class Cab():

    def __init__(self,name,mobile,carnumber):

        self.name = name
        self.mobile = mobile
        self.carnumber = carnumber
        self.x = 0
        self.y = 0

    def displayDriverDetails(self):
        print("Cab Driver name: ", self.name)
        print("Cab Driver's Mobile Number: ", self.mobile)
        print("Cab Driver's Car Number: ", self.carnumber)

    def updateLocation(self,x,y):
        self.x = x
        self.y = y

    def getLocation(self):
        return self.x, self.y
