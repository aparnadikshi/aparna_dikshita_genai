from requirement_agent import requirement_agent
requirement = """
Online Food Ordering Application
A customer should be able to log in to a food delivery application, 
search for a restaurant, add food items to the cart, 
apply a coupon, select a delivery address, make payment, and place the order.
The application supports UPI, credit/debit cards, and Cash on Delivery. 
A coupon SAVE20 gives 20 off on orders above ₹500, with a maximum discount of ₹150.
If payment fails, the order should not be created. If payment succeeds, 
the customer should receive an order confirmation with an order ID.

The application supports :
-UPI
-Credit Cards
-Debit Cards
-Cash on Delivery

A coupon SAVE20 gives 20 percent off on orders above 
Rs50 If payment fails the order should not be created
If payment suceeds the customer should receiv an order confirmation
"""


# ==========================================
# AGENT 1 - REQUIREMENT ANALYSIS
# ==========================================

print("\n" + "=" * 70)
print("AGENT 1 - REQUIREMENT ANALYSIS")
print("=" * 70)
response = requirement_agent.invoke({
    "requirement": requirement
})

print("\nFULL RESPONSE:")
print(response)

print("\nCONTENT:")
print(response.content)