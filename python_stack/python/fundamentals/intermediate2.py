
def problem1():
    x = [[5, 2, 3], [10, 8, 9]]
    students = [
        {'first_name':  'Michael', 'last_name': 'Jordan'},
        {'first_name': 'John', 'last_name': 'Rosales'}
    ]
    sports_directory = {
        'basketball': ['Kobe', 'Jordan', 'James', 'Curry'],
        'soccer': ['Messi', 'Ronaldo', 'Rooney']
    }
    z = [{'x': 10, 'y': 20}]


    x[1][0] = 15
    print(x)

    students[0]['last_name'] = 'Bryant'
    print(students)

    sports_directory['soccer'][0] = 'Andres'
    print(sports_directory)

    z[0]['y'] = 30
    print(z)

problem1()


def iterate_dictionary(some_list):
    students = [
    {'first_name':  'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'},
    {'first_name': 'Mark', 'last_name': 'Guillen'},
    {'first_name': 'KB', 'last_name': 'Tonel'}
]
    for curr_dict in some_list:
        display_str = ''
        for curr_key in curr_dict.keys():
        display_str += f"{curr_key} - {curr_dict[curr_key]}, "
        display_str = display_str[:len(display_str) - 2]
        print(display_str)

iterate_dictionary(students)

def iterate_dictionary2(key, some_list):
  for curr_dict in some_list:
    print(curr_dict[key])

iterate_dictionary2('first_name', students)
iterate_dictionary2('last_name', students)


dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

def print_info(some_dict):
  for key in some_dict.keys():
    print(f"{len(some_dict[key])} {key.upper()}")
    for item in some_dict[key]:
      print(item)
    print('\n')

print_info(dojo)