from requests import get

print("request...")
res = get("http://localhost:8000/users/by-email?email=absde@mail.ru")
print(res, res.headers, res.text)