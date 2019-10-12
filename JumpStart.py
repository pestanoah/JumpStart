import csv
def checkForHelp():
    city = "Ann Arbor"
    #city= input("What city are you in right now? ")
    print("Where are you in ", city, "?")
    #location = input()
    location = "east side"
    #csvfile = open('test.csv','r',newline='') 
    list_people = []
    with open('data.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        next(csv_reader,None)
        
        for row in csv_reader:
            row_l = row[0].split("\t")
           # print(row_l)
            list_people.append(row_l)
    
    #print(list_people)
    counter = 0
    print("The following people have been emailed to come help you: ")
    for person in list_people:
        
        if (person[2] == city):
            counter += 1
            print("Name:", person[0], " Email:", person[1])
            
def createAccount():
    name = input("What is your name?")
    email = input("What is your email?")
    city = input("What is your city?")
    
    with open('data.csv', mode='w') as data_file:
        data_w = csv.writer(data_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
        
        data_w.writerow([name,email,city])
        
        
#createAccount()
checkForHelp()