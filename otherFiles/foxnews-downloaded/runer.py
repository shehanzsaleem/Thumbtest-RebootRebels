import requests

urls = pd.read_csv('cat_urls.csv')  # save the url list as a dataframe

rows = []

for index, i in urls.iterrows():
    rows.append(i[-1])

counter = 0

for i in rows:
file_name = 'cat' + str(counter) + '.jpg'
    print(file_name)
    response = requests.get(i)
    file = open(file_name, "wb")
    file.write(response.content)
    file.close()
    counter += 1
