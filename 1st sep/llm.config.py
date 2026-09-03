import os

from dotenv import load_dotenv
from langchain_huggingface import(
    ChatHuggingFace,
    HuggingFaceEndpoint
)
load_dotenv() #to apply the env file
hf_token=os.getenv("HF_TOKEN") #
if not hf_token:
    raise ValueError("HF_TOKEN not found.Check your env file.")
lm=HuggingFaceEndpoint(
    repo_id="Qwen/Qwen3.8-27B",#this llm can do both text and image generation
    task="text_generation",
    huggingfacehub_api_token=hf_token,
    max_new_tokens=2000,
    temperature=0.2,
)
#these llm model is fed to the chat model
chat_model=ChatHuggingFace(
    llm=lm
)
