from langchain_community.document_loaders import TextLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_chroma import Chroma
import os

print("1. Loading PetMemaa data...")
loader = TextLoader("petmemaa_data.txt", encoding="utf-8")
documents = loader.load()

print("2. Splitting text into chunks...")
text_splitter = RecursiveCharacterTextSplitter(chunk_size=300, chunk_overlap=50)
chunks = text_splitter.split_documents(documents)

print("3. Downloading embedding model (this takes a moment the first time)...")
# This creates the vector representations of your text
embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")

print("4. Building Chroma Vector Database...")
# Saves the database to a folder named "chroma_db"
db = Chroma.from_documents(chunks, embeddings, persist_directory="./chroma_db")

print("✅ Database built successfully! Shvan has memorized the data.")