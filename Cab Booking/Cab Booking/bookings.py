import time
import uuid

class Bookings:
    def __init__(self, cartid):
        self.bookingId = str(uuid.uuid1()).split("-")[0]
        self.cabId = None
        self.cabNumber = None
        
        self.price = 0
        self.totalQuantity =0
        self.sumAmount = 0

    def modifiyQuantity(self, qty, food):
        missing = True
        for i in range(len(self.items)):
            if food.name == self.foods[i].name:
                self.quantities[i] = qty
                missing = False
                print("INFO : Food quantity updated successfully in cart")
        if missing:
            print("ERROR : This food item [{}] is not in your cart[{}]"
                  .format(food, self.cartId))


    def displayCartItems(self):
        for key,value in self.cartData.items():
            itemCount = 0
            for countKey,countValue in self.count.items():
                    if key==countKey:
                        for i in range(0,countValue):
                            itemCount+=1
            print(f"{itemCount} items of {value.Name}")
        print("Total Items in cart is : ",self.getItemQuantity())
        print("Total Price is : ",self.getTotalAmount(),"Rs")

