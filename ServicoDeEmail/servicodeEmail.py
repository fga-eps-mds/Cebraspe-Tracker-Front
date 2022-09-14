
import smtplib
from email.mime.text import MIMEText
from pymongo import MongoClient
import numpy as np
from email.message import EmailMessage



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


####################### Mandar Email Caso1 ################################################
def sendEmailOne():     # automacao de emails para  count de links 
    db_sendEmail = cluster["counts"]
    collection_users_sendEmail = db_sendEmail["counts_de_links"]
    total_users_sendEmail = collection_users_sendEmail.count_documents({})
 #   print(total_users_sendEmail)
    array_count_for_links =  list(collection_users_sendEmail.find({},{'_id':0}))

    if array_count_for_links[0]['Count-de-href-ultimo'] != array_count_for_links[0]['Count-de-href-atual']:
          if array_count_for_links[0]['Count-de-Chamadas-ultimo'] != array_count_for_links[0]['Count-de-Chamadas-atual']:
            break
          db = cluster["SmsServicetest"]
          collection_users = db["users"]
          total_users = collection_users.count_documents({})
#print(total_users)
          array_email=[]
          array_email_list =  list(collection_users.find({},{'email':1,'_id':0}))
          for i in range(0,len(array_email_list)):
            array_email.append(array_email_list[i]['email'])
          msg = EmailMessage()
          msg['Subject'] = 'tem atualizacao no cebraspe'
          msg['From'] = 'suporte do cebraspe-tracker'
      
          msg['To'] = array_email
          msg.set_content("Ola querido Candidato(a). \n O nosso sistema encontrou ataulizacao no site do Cebraspe. \n \n \nObservacao esse email e automatico  ")
          print("mandou email")
          server = smtplib.SMTP_SSL('smtp.gmail.com',465)
          server.login('email','senha')
          
          server.send_message(msg)
          server.quit()
            
            
            
  
###########################send email 2#################################

def sendEmailTwo():
    db_sendEmail = cluster["counts"]
    collection_users_sendEmail = db_sendEmail["counts_de_links"]
    total_users_sendEmail = collection_users_sendEmail.count_documents({})
    array_count_for_links =  list(collection_users_sendEmail.find({},{'_id':0}))
    if array_count_for_links[0]['Count-de-Chamadas-ultimo'] != array_count_for_links[0]['Count-de-Chamadas-atual']:
        db = cluster["SmsServicetest"]
        collection_users = db["users"]
        total_users = collection_users.count_documents({})
#print(total_users)
        array_email=[]
        array_email_list =  list(collection_users.find({},{'email':1,'_id':0}))
        for i in range(0,len(array_email_list)):
            array_email.append(array_email_list[i]['email'])
          msg = EmailMessage()
          msg['Subject'] = 'Tem Novo Chamada para Subprograma/Pas'
          msg['From'] = 'Suporte do cebraspe-tracker'
  
          msg['To'] = array_email
          msg.set_content("Ola querido Candidato(a). \n O nosso sistema encontrou Novo Chamada NO site Do Cebraspe. \n \n \nObservacao esse email e automatico  ")
          print("mandou email")
          server = smtplib.SMTP_SSL('smtp.gmail.com',465)
          server.login('email','senha')
          
          server.send_message(msg)
          server.quit()
        
        

########### sendEmailthree ##################################################################

def sendEmailthree():
    db = cluster["SmsServicetest"]
    collection_users = db["users"]
    total_users = collection_users.count_documents({})
    print(total_users)
    array_nomes =  list(collection_users.find({},{'nome':1,'email':1,'_id':0}))


    arrays_of_names = np.array(array_nomes)





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
    msg = EmailMessage()
    msg['Subject'] = 'Tem Novo Chamada para Subprograma/Pas'
    msg['From'] = 'Suporte do cebraspe-tracker'
        #  msg['to'] = 'hannanhoney7000@gmail.com'
    msg['To'] = array_email
    msg.set_content("Ola querido Candidato(a). \n O nosso sistema encontrou Novo Chamada NO site Do Cebraspe. \n \n \nObservacao esse email e automatico  ")
    print("mandou email")
    server = smtplib.SMTP_SSL('smtp.gmail.com',465)
    server.login('email','senha')
          
    server.send_message(msg)
    server.quit()
    


