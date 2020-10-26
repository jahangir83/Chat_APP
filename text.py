# def not_string(str, n):
#     first_Part = str[:n]
#     last_Part = str[n+1:]
#     return first_Part + last_Part
        
# print(not_string('jahangir', 2))


# def change_sring(str1):
#     one = str1[-1:]
#     toq = str1[1:-1]
#     three = str1[:1]

#     return one + toq + three
#     # return str1[-1:] + str1[1:-1] + str1[:1]
	  
# print(change_sring('abcd'))
# print(change_sring('12345'))

# def fornt3(str):
#     fornt_end = 3
#     if len(str) <= 3:
#         jahangri = "jahangri"
#     fornt = str[:fornt_end]

#     return fornt + fornt + fornt

# print(fornt3("valll"))

# def sting_times(str, n):
#     result = ""
#     for j in range(n):
#         result += str

#     return result

# print(sting_times("jahangri", 3))


# def front_times(str, n):
#     result = ""
#     font_size = 3
    
#     if len(str) <= font_size:
#         font_size = len(str)
#     front = str[:font_size]

#     for j in range(n):
#         result = result + front
#     return result
# print(front_times("jahangri", 5))

# def string_bit(str):
#     result = ""
#     for i in range(len(str)):
#         if i % 2 == 0:
#             result = result + str[i]
#     return result

# print(string_bit("jahangrialam"))


def string_splote(str):
    result = ""

    for i in range(len(str)):
        result = result + str[:i+1]
    return result
print(string_splote("jaha"))