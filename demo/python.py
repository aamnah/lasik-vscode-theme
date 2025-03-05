@decorator(param=1)
def f(x):
    """ Syntax Highlighting Demo
        @param x Parameter"""
    s = ("Test", 2+3, {'a': 'b'}, x)   # Comment
    print s[0].lower()
    for t in s:
        if t in s:
            print('sorry') 
            x & s


class Foo:
    def __init__(self):
        byte_string = 'newline:\n also newline:\x0a'
        text_string = u"Cyrillic Я is \u042f. Oops: \u042g"
        self.makeSense(whatever=1)

    def makeSense(self, whatever):
        self.sense = whatever
        if True:
            pass

x = len('abc')
print(f.__doc__)

# nested `in` operator
requested_toppings = ['mushrooms', 'french fries', 'extra cheese']
for requested_topping in requested_toppings:
    if requested_topping in available_toppings:
        print (f'Sorry, we do not have {requested_topping})')
    print('Infinished making your pizza!')


'''
7.1
Declare a class Human. Class has two properties, name and age. Implement Human-class:
Constructor initializes Human-object name and age thru its parameters.
Override Human class str function to print object information.
Declare two Human class objects. Initialize them with data that produces the example output:
'''

class Human:
    def __init__(self, name = '', age = 0):
        self.name = name
        self.age = age

    def __str__(self):
        return 'Name: {}, Age: {}'.format(self.name, self.age)

    name = ''
    age = 0


"""
10.3.
[x] Make a program that asks the user for numbers (either an integer or a floating point number) and 
[x] save the integers in a different file than the floating point numbers.
[x] The application should be terminated if the user does not enter an integer or a floating point number.
[x] Use a text editor to check the contents of the files.
"""

filename_int = 'integers.txt'
filename_flt = 'floats.txt'

def is_integer(x):
    try:
        isinstance(int(x), int)
        return True
    except ValueError:
        return False

def write_number_to_file(x):
    try:
        file_int = open(filename_int, "a") # a is for append mode
        file_flt = open(filename_flt, "a")

        if (is_integer(x)):
            file_int.write(x+"\n")
        else:
            file_flt.write(x+"\n")

        file_int.close()
        file_flt.close()
    except Exception as e:
        print(f"ERROR: {e}")


# Keep asking for input until empty input given
while True:
    number = input("Gimme an integer or floating point number: ")
    
    if number == "": break

    write_number_to_file(number)
