from langchain_core.prompts import ChatPromptTemplate
from llm_config import chat_model


test_case_prompt = ChatPromptTemplate.from_messages([
    (
        "system",
        """
You are an expert software test engineer.

Generate detailed test cases based on the requirement.

For every test case provide:

Test Case ID
Test Scenario
Preconditions
Test Steps
Test Data
Expected Result
Priority

Pay attention to:
-Adding items to cart
-Removing items
-Quantity changes
-SAVE20 coupon
-Rs 500 boundary
-Rs 150 maximum discount
-UPI  payment

Important boundary values:
Rs 499-> no discount
Rs 500-> no discount
Rs 501-> eligible
Rs 600-> Rs 120 discount
Rs 1000-> Rs 150 discount


Generate:
- Positive test cases
- Negative test cases
- Boundary test cases
- Validation test cases

Do not invent functionality that is not supported by the requirement.
"""
    ),
    (
        "human",
        """
Requirement:

{requirement}

Requirement Analysis:

{analysis}
"""
    )
])


# Create the LangChain runnable
test_case_chain = test_case_prompt | chat_model