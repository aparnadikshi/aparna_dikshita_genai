
from requirement_agent import requirement_agent
from test_case_agent import test_case_chain
from test_data_agent import test_data_agent
from bug_analysis_agent import bug_analysis_agent
from bug_failure_report_agent import (bug_failure_report_agent)


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

def print_header(title):
    print("\n")
    print("="*80)
    print(title)
    print("="*80)
# ==========================================
# AGENT 1 - REQUIREMENT ANALYSIS
# ==========================================

print("\n" + "=" * 70)
print("AGENT 1 - REQUIREMENT ANALYSIS")
print("=" * 70)

analysis_response = requirement_agent.invoke({
    "requirement": requirement
})

analysis = analysis_response.content

print(analysis)


# ==========================================
# AGENT 2 - TEST CASE GENERATION
# ==========================================

print("\n" + "=" * 70)
print("AGENT 2 - TEST CASE GENERATION")
print("=" * 70)

test_case_response = test_case_chain.invoke({
    "requirement": requirement,
    "analysis": analysis
})

test_cases = test_case_response.content

print(test_cases)

print("\nFULL RESPONSE:")
print(test_case_response)

print("\nCONTENT:")
print(test_case_response.content)


# ==========================================
# AGENT 3 - TEST DATA GENERATION
# ==========================================

print("\n" + "=" * 70)
print("AGENT 3 - TEST DATA GENERATION")
print("=" * 70)

test_data_response = test_data_agent.invoke({
    "requirement": requirement,
    "test_cases": test_cases
})

test_data = test_data_response.content

print(test_data)

print("\nFULL RESPONSE:")
print(test_data_response)

print("\nCONTENT:")
print(test_data_response.content)

# ==========================================
# AGENT 4 - BUGS defect
# ==========================================
print_header("AGENT 5 - BUG ANALYSIS")

bug_analysis_response  = bug_analysis_agent.invoke({
    "requirement": requirement,
    "analysis": bug_analysis
})
defect = bug_analysis_response.content
print(defect)



# ==========================================
# AGENT 5 - BUGS FAILURE
# ==========================================
print_header("AGENT 5 - BUG FAILURE REPORT")

bug_report_response  = bug_failure_report_agent.invoke({
    "requirement": requirement,
    "defect":defect,
    "analysis": bug_analysis
})

bug_report = bug_report_response.content
print(bug_report)

