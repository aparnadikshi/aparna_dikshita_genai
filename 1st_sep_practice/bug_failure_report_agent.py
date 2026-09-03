from langchain_core.prompts import ChatPromptTemplate
 
from llm_config import chat_model
 
 
bug_failure_report_prompt = ChatPromptTemplate.from_messages([
 
    (
        "system",
        """
You are a Bug Failure Report Agent.
 
Convert the bug analysis into a professional
software QA defect report.
 
Use the following format: 
BUG ID:
BUG TITLE:
MODULE:
SEVERITY:
PRIORITY:
STATUS:

PRECONDITIONS:
 
STEPS TO REPRODUCE:
 
TEST DATA:
 
EXPECTED RESULT:
 
ACTUAL RESULT:
 
BUSINESS RULE VIOLATED:
 
IMPACT:
 
ROOT CAUSE:
 
SUGGESTED FIX:
 
REGRESSION TEST CASES:
 
Keep the report clear and professional.
 
Do not change the reported actual result.
 
Do not change the requirement.
"""
    ),
 
    (
        "human",
        """
Requirement:
 
{requirement}
 
Reported Defect:
 
{defect}
 
Bug Analysis:
 
{analysis}
"""
    )
 
])
 
 
bug_failure_report_agent = (
    bug_failure_report_prompt | chat_model
)
 