import os, requests, re
from bs4 import BeautifulSoup
from urllib.parse import urljoin

url = "https://denqid.com"
output_dir = "local_copy"
os.makedirs(output_dir, exist_ok=True)

# Fetch HTML
r = requests.get(url)
html = r.text
soup = BeautifulSoup(html, "html.parser")

# Download linked assets
for tag in soup.find_all(["link", "script", "img"]):
    src = tag.get("href") or tag.get("src")
    if src and not src.startswith("data:"):
        full_url = urljoin(url, src)
        filename = os.path.join(output_dir, os.path.basename(src))
        try:
            data = requests.get(full_url).content
            with open(filename, "wb") as f:
                f.write(data)
            # Fix paths in HTML
            if tag.name == "link":
                tag["href"] = os.path.basename(src)
            elif tag.name in ["script", "img"]:
                tag["src"] = os.path.basename(src)
        except:
            pass

# Save modified HTML
with open(os.path.join(output_dir, "index.html"), "w", encoding="utf-8") as f:
    f.write(str(soup))
