
import smtplib
from email.mime.text import MIMEText
from pymongo import MongoClient
import numpy as np



cluster = MongoClient("mongodb+srv://cebraspe-tracker:cebraspe-tracker@cluster0.sa63e.mongodb.net/?retryWrites=true&w=majority")
# bancod e dados para usaurios registrado no sistemas
db = cluster["SmsServicetest"]
collection_users = db["users"]
total_users = collection_users.count_documents({})
print(total_users)
array_nomes =  list(collection_users.find({},{'nome':1,'email':1,'_id':0}))

print(array_nomes)
arrays_of_names = np.array(array_nomes)
print(arrays_of_names)

print(arrays_of_names[0]['nome'])
print("\n"*10)


print("parte 2")
# banco de dados dos pessoas encontrados durane crawling 



db_crawled = cluster["users"]
collection_users_crawled = db_crawled["names_found"]

total_users_2 = collection_users_crawled.count_documents({})
array_nomes_crawled =  list(collection_users_crawled.find({},{'item':1,'_id':0}))
print(total_users_2)
print(array_nomes_crawled)
arrays_of_names_crawled = np.array(array_nomes_crawled)

print(len(arrays_of_names_crawled))

print(arrays_of_names_crawled)

array_of_names_final =[]

for i in range(0,len(arrays_of_names_crawled)):
    if arrays_of_names_crawled[i]['item'] == "":

        continue
    a = arrays_of_names_crawled[i]['item']
    array_of_names_final.append(a)

print(array_of_names_final)



vetor_email=[]
for i in range(0,len(array_of_names_final)):
    for j in range(0,len(arrays_of_names)):
        if array_of_names_final[i] == arrays_of_names[j]['nome']:
            vetor_email.append(arrays_of_names[j]['email'])



print(vetor_email)
#arrays_of_names = np.array(array_nomes)








#s = smtplib.SMTP('smtp.uk.xensource.com')
#s.set_debuglevel(1)
#msg = MIMEText("""body""")
#sender = 'me@example.com'
#recipients = ['john.doe@example.com', 'john.smith@example.co.uk']
#msg['Subject'] = "subject line"
#msg['From'] = sender
#msg['To'] = ", ".join(recipients)
#s.sendmail(sender, recipients, msg.as_string())
